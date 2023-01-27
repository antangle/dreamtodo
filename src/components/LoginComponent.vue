<template>
  <m-u-i-layout1>
    <h2>Login Component </h2>

    <div>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="consts.mNameRule"
          label="name"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="consts.passwordRule"
          label="Password"
          required
        ></v-text-field>

        <v-btn
          color="success"
          class="me-4"
          @click="() => onClickLogin(name, password)"
        >
          로그인
        </v-btn>

        <v-btn
          color="blue"
          @click="onClickRouteToSignup"
        >
          회원가입
        </v-btn>

        <v-btn
          color="blue"
          @click="onClickTest"
        >
          테스트
        </v-btn>
      </v-form>
    </div>
  </m-u-i-layout1>

<!--
  <v-btn @click="handleClick">Generate Key</v-btn>
-->

</template>

<script setup>


import {ref} from "vue";
import MUILayout1 from "@/layouts/MUILayout1.vue";
import {useRouter} from "vue-router";
const name = ref()
const password = ref()
const valid = ref()
const router = useRouter()
//name: 아이디는 1~15자 이내 영문/숫자.

import consts from '@/consts/rules'
import axiosConsts from "@/consts/axios";
import axios, {AxiosError} from "axios";
import useMemberInfo from "@/store/useMemberInfo";
import authAxios from "@/util/AuthAxios";

const {saveInfo} = useMemberInfo();

const onClickTest = async () => {
  const res = await authAxios.get(`${axiosConsts.domain}/api/auth/temp`);
  console.log(res);
}

const onClickLogin = (name, password) => {
  if(!valid.value){
    //만약 유효성 검사에서 떨어짐
    console.log("form is not valid")
    return
  }

  /*
    login 요청시,
    성공하면 response data를 받는다.

    실패하면 msg, time, code를 받는다
   */
  axios.post(`${axiosConsts.domain}/api/auth/login`, {
    name: name,
    password: password
  }).then(res => {
    saveInfo(res.data.access ,res.data.refresh)
  }).catch(err => {
    if(err instanceof AxiosError){
      console.log(err.response.data);
      console.log(err.response.status);
    } else {
      console.log(err)
    }
  })

}

const onClickRouteToSignup = () => {
  router.push({name: "SignupPage"})
}

/*
const handleClick = async () => {


  //{access:xxxx, refresh:xxxx}
  const data = res.data

  console.log(data)

  const {saveInfo} = useMemberInfo()

  saveInfo(data.access, data.refresh)

}
*/

</script>

<style scoped>

</style>
