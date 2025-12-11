import { createWebHistory, createRouter } from 'vue-router'

const Home = () => import('@/pages/Home.vue')
const Badges = () => import('@/pages/Badges.vue')
const Accordion = () => import('@/pages/Accordion.vue')
const Breadcrumbs = () => import('@/pages/Breadcrumbs.vue')
const Buttons = () => import('@/pages/Buttons.vue')
const Checkboxes = () => import('@/pages/Checkboxes.vue')
const DetailLists = () => import('@/pages/DetailLists.vue')
const Dividers = () => import('@/pages/Dividers.vue')
const Dropdowns = () => import('@/pages/Dropdowns.vue')
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
  {
    path: '/accordion',
    component: Accordion,
    meta: { layout: 'Default' }
  },
  {
    path: '/breadcrumbs',
    component: Breadcrumbs,
    meta: { layout: 'Default' }
  },
  {
    path: '/buttons',
    component: Buttons,
    meta: { layout: 'Default' }
  },
  {
    path: '/checkboxes',
    component: Checkboxes,
    meta: { layout: 'Default' }
  },
  {
    path: '/detail-lists',
    component: DetailLists,
    meta: { layout: 'Default' }
  },
  {
    path: '/dividers',
    component: Dividers,
    meta: { layout: 'Default' }
  },
  {
    path: '/dropdowns',
    component: Dropdowns,
    meta: { layout: 'Default' }
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router