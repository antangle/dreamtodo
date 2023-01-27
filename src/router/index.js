// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    name: 'HomePage'
  },
  {
    path: '/todo',
    redirect: () => '/todo/list',
    children: [{
      path: 'list',
      name: 'TodoListPage',
      component: () => import('@/views/TodoListPage.vue'),

    }]
  },
  {
    path: '/sampleTest',
    name: 'SampleTestPage',
    component: () => import('@/views/SampleTestPage.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: () => import('@/views/SignupPage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
