<template>
  <m-u-i-layout1>

    <template #default>
        <h1>Todo List Page</h1>

        <v-card>
          <div :key="componentKey">
            <Suspense>
              <template #fallback>
                <h1>Loading!!</h1>
              </template>

              <template #default>
                <TodoListComponent :page="page" @movePage="onClickHandler"></TodoListComponent>
              </template>

            </Suspense>
          </div>

        </v-card>

    </template>
  </m-u-i-layout1>
</template>

<script setup>
import MUILayout1 from "@/layouts/MUILayout1.vue";
import {ref} from "vue";
import TodoListComponent from "@/components/TodoListComponent.vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const page = ref(route.query.start || 1);
const componentKey = ref(0);
const router = useRouter();

const onClickHandler = (pageNum) => {
  router.push({name: "TodoListPage", query: {start: pageNum}})
  page.value = pageNum
  console.log(page.value);
}

router.beforeEach((to, from, next) => {
  page.value = to.query.start
  componentKey.value++;
  next()
})
</script>

<style scoped>

</style>
