<template>
  <h2> Todo List Component </h2>
    <ul>
        <li v-for="todo in result" :key="todo.id" @click="showDetails">
          {{todo.title}} {{todo.member}}
        </li>
      </ul>

      <div class="text-center">
        <v-pagination
          v-model="pageModel"
          :length="test"
          rounded="circle"
          @click="() => emits('movePage', pageModel)"
        ></v-pagination>
      </div>

</template>

<script setup>
  import axios from "axios";
  import {ref, watch} from "vue";


  const props = defineProps(['onChangeDate'])
  const emits = defineEmits(['movePage'])
  const day = ref(props.onChangeDate)
  let date =ref(new Date().toISOString().substring(0, 10))

  // CalendarComponent에서 선택된 날짜 바인딩
  watch(() => day.value, (value) => {
    console.log("======watched======")
    console.log(value)
    console.log(day.value)
  })

  console.log(date)
  console.log("--------------")
  console.log(day)


  // 서버로부터 TodoList 받아와서 출력
  const url = `http://localhost:8081/api/todo/search?date=${date.value}`
  let result = ref({})

  axios.get(url).then(res => {
    result.value = res.data.dtoList
    console.log(result.value)
    return result.value
  }).catch((error) => console.log(error.response));

  const showDetails = () => {
    console.log("show details")
  }

</script>

<style scoped>

</style>
