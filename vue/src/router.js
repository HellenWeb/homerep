
// Modules

import { createRouter, createWebHistory } from 'vue-router'
import MyMain from '@/views/Main'
import MyLogin from '@/views/Login'
import store from '@/store/index'

// Logic

const routes = [
  {
    path: '/',
    meta: { requiresAuth: true },
    name: 'Main',
    component: MyMain
  },
  {
    path: '/login',
    name: 'Login',
    component: MyLogin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    router.push({ name: 'Login' })
  }
})

export default router
