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
          v-model="mname"
          :counter="10"
          :rules="consts.mNameRule"
          label="Mname"
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
          @click="() => onClickSignup(mname, password)"
        >
          회원가입
        </v-btn>
      </v-form>
    </div>
  </m-u-i-layout1>

  <!--
    <v-btn @click="handleClick">Generate Key</v-btn>
  -->

</template>

<script setup>

import authAxios from "@/util/AuthAxios";
import {ref} from "vue";
import MUILayout1 from "@/layouts/MUILayout1.vue";
import {useRouter} from "vue-router";
const mname = ref()
const password = ref()
const valid = ref()
const router = useRouter()
//mname: 아이디는 1~15자 이내 영문/숫자.

import consts from '@/consts/rules'
import axiosConsts from "@/consts/axios";

const onClickSignup = async (mname, password) => {
/*  if(!valid.value){
    //만약 유효성 검사에서 떨어짐
    console.log("form is not valid")
    return
  }*/

  const res = await authAxios.post(`${axiosConsts.domain}/api/signup`, {
    mname: mname,
    password: password
  })

  if(!res){
    console.log("something is not right")
  }


  router.push({name: "LoginPage"})

}


</script>

<style scoped>

</style>
