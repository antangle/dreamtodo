<template>
  <h2> Todo List Component </h2>
  <ul>
    <li v-for="todo in result" :key="todo.id">
      {{todo.title}} {{todo.member}}
    </li>
<!--    <v-main>-->
<!--      <v-container-->
<!--        class="py-8 px-6"-->
<!--        fluid-->
<!--      >-->
<!--        <v-row>-->
<!--          <v-col-->
<!--            v-for="todo in result" :key="todo.id"-->
<!--            cols="12"-->
<!--          >-->
<!--            <v-card>-->

<!--              <v-list lines="two">-->
<!--                <v-list-subheader>제목 : {{ todo.title }}</v-list-subheader>-->
<!--                <template v-for="n in 1" :key="n">-->
<!--                  <v-list-item>-->
<!--                    <template v-slot:prepend>-->
<!--                      <v-avatar color="grey-darken-1"></v-avatar>-->
<!--                    </template>-->

<!--                    <v-list-item-title>글쓴이 : {{ todo.member }}</v-list-item-title>-->
<!--                  </v-list-item>-->
<!--                </template>-->
<!--              </v-list>-->
<!--            </v-card>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->
<!--    </v-main>-->
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
  import {ref} from "vue";


  const props = defineProps(['changeDate'])
  const emits = defineEmits(['movePage'])
  let date = new Date().toISOString().substring(0, 10)
  const day = ref(props.changeDate)
  console.log(date)
  console.log("--------------")
  console.log(day)

  const url = `http://localhost:8081/api/todo/search?date=${date}`
  let result = ref({})

  axios.get(url).then(res => {
    result.value = res.data.dtoList
    console.log(result.value)
    return result.value
  }).catch((error) => console.log(error.response));

</script>

<style scoped>

</style>
