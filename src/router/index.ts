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
const EmptyStates = () => import('@/pages/EmptyStates.vue')
const FileUploaders = () => import('@/pages/FileUploaders.vue')
const Filters = () => import('@/pages/Filters.vue')
const Inputs = () => import('@/pages/Inputs.vue')
const Media = () => import('@/pages/Media.vue')
const Pagination = () => import('@/pages/Pagination.vue')
const ProgressBars = () => import('@/pages/ProgressBars.vue')
const RadioGroups = () => import('@/pages/RadioGroups.vue')
const RangeInput = () => import('@/pages/RangeInput.vue')
const Selects = () => import('@/pages/Selects.vue')
const SkipLink = () => import('@/pages/SkipLink.vue')
const Stats = () => import('@/pages/Stats.vue')
const Steps = () => import('@/pages/Steps.vue')
const Tables = () => import('@/pages/Tables.vue')
const Textareas = () => import('@/pages/Textareas.vue')
const Toggles = () => import('@/pages/Toggles.vue')
const Menus = () => import('@/pages/Menus.vue')

const routes = [
  {
    path: '/',
    component: Home,
    meta: { layout: 'Default' }
  },
  { path: '/empty-states', component: EmptyStates, meta: { layout: 'Default' } },
  { path: '/file-uploaders', component: FileUploaders, meta: { layout: 'Default' } },
  { path: '/filters', component: Filters, meta: { layout: 'Default' } },
  { path: '/inputs', component: Inputs, meta: { layout: 'Default' } },
  { path: '/media', component: Media, meta: { layout: 'Default' } },
  { path: '/pagination', component: Pagination, meta: { layout: 'Default' } },
  { path: '/progress-bars', component: ProgressBars, meta: { layout: 'Default' } },
  { path: '/radio-groups', component: RadioGroups, meta: { layout: 'Default' } },
  { path: '/range-input', component: RangeInput, meta: { layout: 'Default' } },
  { path: '/selects', component: Selects, meta: { layout: 'Default' } },
  { path: '/skip-link', component: SkipLink, meta: { layout: 'Default' } },
  { path: '/stats', component: Stats, meta: { layout: 'Default' } },
  { path: '/steps', component: Steps, meta: { layout: 'Default' } },
  { path: '/tables', component: Tables, meta: { layout: 'Default' } },
  { path: '/textareas', component: Textareas, meta: { layout: 'Default' } },
  { path: '/toggles', component: Toggles, meta: { layout: 'Default' } },
  { path: '/menus', component: Menus, meta: { layout: 'Default' } },
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