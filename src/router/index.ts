import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

import LoginView from '@/views/Login/LoginPage.vue'
import RsaView from '@/views/Rsa/RsaPage.vue'
import TodoView from '@/views/Todo/TodoPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RsaView,
      meta: { showMenu: true, requiresAuth: true },
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoView,
      meta: { showMenu: true, requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { showMenu: false },
    },
  ],
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()
  await authStore.waitForAuthReady()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) return { name: 'login' }
  if (to.name === 'login' && authStore.isAuthenticated) return { name: 'home' }
})

export default router
