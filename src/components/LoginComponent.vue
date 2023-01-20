<template>
  <h2>Login Component </h2>

  <div>
      <form v-on:submit="onSubmitForm">
        <input type="text" v-model="id">
        <input type="text" v-model="pass">
        <v-btn @click="onSubmitForm"> LOGIN </v-btn>
    </form>
  </div>

<!--
  <v-btn @click="handleClick">Generate Key</v-btn>
-->

</template>

<script setup>

import axios from "axios";
import useMemberInfo from "@/store/useMemberInfo";
import authAxios from "@/util/AuthAxios";
import {ref} from "vue";
const id = ref()
const pass = ref()

const onSubmitForm = (id, password) => {
  console.log(id, password)
}

const handleClick = async () => {

  const res = await authAxios.get(`http://localhost:8080/api/generate`)

  //{access:xxxx, refresh:xxxx}
  const data = res.data

  console.log(data)

  const {saveInfo} = useMemberInfo()

  saveInfo(data.access, data.refresh)

}

</script>

<style scoped>

</style>
