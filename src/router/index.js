import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/view/:id',
      name: 'view',
      component: () => import('../views/DisplayView.vue')
    },
    {
      path: '/input/:id?',
      name: 'input',
      component: () => import('../views/InputView.vue')
    }
  ]
})

export default router
