<template>
  <h2> Todo List Component </h2>
  <ul>
    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
            v-for="todo in result" :key="todo.id"
            cols="12"
          >
            <v-card>

              <v-list lines="two">
                <v-list-subheader>제목 : {{ todo.title }}</v-list-subheader>
                <template v-for="n in 1" :key="n">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-avatar color="grey-darken-1"></v-avatar>
                    </template>

                    <v-list-item-title>글쓴이 : {{ todo.writer }}</v-list-item-title>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </ul>

  <div class="text-center">
    <v-pagination
      v-model="pageModel"
      :length="test"
      rounded="circle"
      @click="() => emits('movePage', pageModel)"
    ></v-pagination>
  <v-btn @click="handleTestClick">TEST</v-btn>
  </div>

</template>

<script setup>
  import axios from "axios";
  import {ref} from "vue";
  import {useRoute} from "vue-router";
  const props = defineProps(['page'])
  const emits = defineEmits(['movePage'])
  const pageModel = ref(1)

  const test = ref(10)

  const url = `http://localhost:8080/api/todos/list?start=${props.page}`;
  const res = await axios.get(url);
  const result = res.data
  console.log('component: ' + props.page)

  const handleTestClick = () => {
    test.value++;
  }

</script>

<style scoped>

</style>
