import { createWebHistory, createRouter } from 'vue-router'

const Home = () => import('@/pages/Home.vue')
const Badges = () => import('@/pages/Badges.vue')
const routes = [
  { 
    path: '/', 
    component: Home,  
    meta: { layout: 'Default' }
  },
  {
    path: '/badges',
    component: Badges,
    meta: { layout: 'Default' }
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router