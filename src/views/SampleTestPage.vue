<template>
  <h1>Sample Test Page</h1>
  <v-btn @click="handleClickEX1">EX1</v-btn>
  <v-btn @click="handleClickEX2">EX2</v-btn>
</template>

<script setup>

import authAxios from "@/util/AuthAxios";

const handleClickEX1 = async () => {
  const res = await authAxios.get('http://localhost:8080/api/sample/ex1')
  const data = res.data;
  console.log(data);
}

const handleClickEX2 = () => {

}

</script>

<style scoped>

</style>
