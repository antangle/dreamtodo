// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    name: 'HomePage'
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
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('@/components/CalendarComponent.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
