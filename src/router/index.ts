import { createWebHistory, createRouter } from 'vue-router'

const Home = () => import('@/pages/Home.vue')
const Badges = () => import('@/pages/Badges.vue')
const Accordion = () => import('@/pages/Accordion.vue')
const Breadcrumbs = () => import('@/pages/Breadcrumbs.vue')
const Buttons = () => import('@/pages/Buttons.vue')
const Checkboxes = () => import('@/pages/Checkboxes.vue')
const DetailLists = () => import('@/pages/DetailLists.vue')
const Dividers = () => import('@/pages/Dividers.vue')
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
const Cards = () => import('@/pages/Cards.vue')
const Modals = () => import('@/pages/Modals.vue')
const Auth = () => import('@/pages/Auth.vue')
const Dashboards = () => import('@/pages/Dashboards.vue')
const Settings = () => import('@/pages/Settings.vue')
// Marketing
const Announcements = () => import('@/pages/Announcements.vue')
const BlogSections = () => import('@/pages/BlogSections.vue')
const Pricing = () => import('@/pages/Pricing.vue')
const ContactSections = () => import('@/pages/ContactSections.vue')
const CTAs = () => import('@/pages/CTAs.vue')
const TeamSections = () => import('@/pages/TeamSections.vue')
const Reviews = () => import('@/pages/Reviews.vue')
const Newsletter = () => import('@/pages/Newsletter.vue')
const FAQs = () => import('@/pages/FAQs.vue')
const LogoClouds = () => import('@/pages/LogoClouds.vue')
const HeroSections = () => import('@/pages/HeroSections.vue')
const FeatureSections = () => import('@/pages/FeatureSections.vue')
const Headers = () => import('@/pages/Headers.vue')
const Footers = () => import('@/pages/Footers.vue')
// Ecommerce
const ProductCards = () => import('@/pages/ProductCards.vue')
const ShoppingCarts = () => import('@/pages/ShoppingCarts.vue')
const ProductOverviews = () => import('@/pages/ProductOverviews.vue')
const CategoryPreviews = () => import('@/pages/CategoryPreviews.vue')
const Pages = () => import('@/pages/Pages/Pages.vue')


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

  { path: '/cards', component: Cards, meta: { layout: 'Default' } },
  { path: '/modals', component: Modals, meta: { layout: 'Default' } },
  { path: '/auth', component: Auth, meta: { layout: 'Default' } },
  { path: '/dashboards', component: Dashboards, meta: { layout: 'Default' } },
  { path: '/settings', component: Settings, meta: { layout: 'Default' } },
  // Marketing
  { path: '/announcements', component: Announcements, meta: { layout: 'Default' } },
  { path: '/blog-sections', component: BlogSections, meta: { layout: 'Default' } },
  { path: '/pricing', component: Pricing, meta: { layout: 'Default' } },
  { path: '/contact-sections', component: ContactSections, meta: { layout: 'Default' } },
  { path: '/ctas', component: CTAs, meta: { layout: 'Default' } },
  { path: '/team-sections', component: TeamSections, meta: { layout: 'Default' } },
  { path: '/reviews', component: Reviews, meta: { layout: 'Default' } },
  { path: '/newsletter', component: Newsletter, meta: { layout: 'Default' } },
  { path: '/faqs', component: FAQs, meta: { layout: 'Default' } },
  { path: '/logo-clouds', component: LogoClouds, meta: { layout: 'Default' } },
  { path: '/hero-sections', component: HeroSections, meta: { layout: 'Default' } },
  { path: '/feature-sections', component: FeatureSections, meta: { layout: 'Default' } },
  { path: '/headers', component: Headers, meta: { layout: 'Default' } },
  { path: '/footers', component: Footers, meta: { layout: 'Default' } },
  // Ecommerce
  { path: '/product-cards', component: ProductCards, meta: { layout: 'Default' } },
  { path: '/shopping-carts', component: ShoppingCarts, meta: { layout: 'Default' } },
  { path: '/product-overviews', component: ProductOverviews, meta: { layout: 'Default' } },
  { path: '/category-previews', component: CategoryPreviews, meta: { layout: 'Default' } },
  { path: '/pages', component: Pages, meta: { layout: 'Default' } },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router