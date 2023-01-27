<template>

      <v-sheet height="500">
        <date-picker
          ref="calendar"
          :now="day"
          v-model="focus"
          color="black"
          @click="showTodo"
        >
        </date-picker>
      </v-sheet>

</template>

<script setup>

import {DatePicker} from "v-calendar";
import {ref} from "vue";
import axios from "axios";

const focus = ref()
const emits = defineEmits(['changeDate'])

const showTodo = async () => {

  const day = new Date(focus.value).toISOString().substring(0, 10)
  console.log(day)

  emits('changeDate', focus)

  await axios.post(`http://localhost:8081/api/todo/date`, day)
    .then((response) => {
      if (response.status === 200) {
        console.log(day)
        return day
      }
    })
    .catch((error) => console.log(error.response));

}


</script>

<style scoped>



</style>
