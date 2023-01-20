<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <ul>
        <li v-for="(menu, idx) in showMenus" :key="idx">
          <router-link :to="menu.path">{{ menu.name }}</router-link>
        </li>
      </ul>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
        </v-row>

        <v-col cols="12">
            <slot> </slot>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import {computed, ref} from "vue";

    const drawer = ref(null)

    const menus = ref([
      {
        path: '/',
        name: 'Home'
      },
      {
        path: '/todo',
        name: 'Todo'
      },
      {
        path: '/login',
        name: "Login"
      }
    ])
  const loginFlag = ref(false)
  const checkLogin = () => {
      if(!loginFlag.value){
        if(localStorage.getItem('login')){
          loginFlag.value = true
        }
      }
      return loginFlag.value
  }

  const showMenus = computed(() => {
    if(!checkLogin()){
      menus.value = [{
        path: '/login',
        name: 'Login'
      }]
    }
    return menus.value
  })
</script>

<style scoped>

</style>
