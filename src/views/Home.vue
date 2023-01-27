<template>
  <m-u-i-layout1>

    <CalendarComponent @changeDate="onChangeDate"></CalendarComponent>
    <TodoListComponent :page="page" @movePage="onClickHandler"></TodoListComponent>

  </m-u-i-layout1>
</template>

<script setup>
  import MUILayout1 from "@/layouts/MUILayout1.vue";
  import CalendarComponent from "@/components/CalendarComponent.vue";
  import TodoListComponent from "@/components/TodoListComponent.vue";
  import {ref} from "vue";
  import {useRoute, useRouter} from "vue-router";

  const route = useRoute();
  const router = useRouter();
  const page = ref(route.query.start || 1);
  const res = ref()

  const onChangeDate = (focus) => {
    res.value = new Date(focus.value).toISOString().substring(0, 10)
    console.log(res.value)
  }

  const onClickHandler = (pageNum) => {
    router.push({name: "Home", query: {start: pageNum}})
    page.value = pageNum
    console.log(page.value);
  }


</script>
