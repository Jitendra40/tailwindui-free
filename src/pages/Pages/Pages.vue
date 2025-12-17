<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="space-y-16">
    
    <!-- Landing Pages -->
    <section>
      <div class="relative mb-6">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-start">
          <span class="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">Landing Pages</span>
        </div>
      </div>
      <div class="flex gap-4 flex-wrap">
        <RouterLink to="/view/pages/landing-page" class="variant-link">Landing Page (SaaS)</RouterLink>
        <RouterLink to="/view/pages/hr-landing-page" class="variant-link">HR Landing Page</RouterLink>
        <RouterLink to="/view/pages/agency-landing" class="variant-link">Agency Landing</RouterLink>
        <RouterLink to="/view/pages/mobile-app-landing" class="variant-link">Mobile App Landing</RouterLink>
        <RouterLink to="/view/pages/photography-landing" class="variant-link">Photography Landing</RouterLink>
      </div>
    </section>

    <!-- About Us Pages -->
    <section>
      <div class="relative mb-6">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-start">
          <span class="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">About Us Pages</span>
        </div>
      </div>
      <div class="flex gap-4 flex-wrap">
        <RouterLink to="/view/pages/about-us" class="variant-link">About Us (Original)</RouterLink>
        <RouterLink to="/view/pages/about-simple" class="variant-link">About Simple</RouterLink>
        <RouterLink to="/view/pages/about-split" class="variant-link">About Split</RouterLink>
        <RouterLink to="/view/pages/about-grid" class="variant-link">About Team Grid</RouterLink>
        <RouterLink to="/view/pages/about-dark" class="variant-link">About Dark</RouterLink>
      </div>
    </section>

    <!-- Coming Soon Pages -->
    <section>
      <div class="relative mb-6">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-start">
          <span class="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">Coming Soon Pages</span>
        </div>
      </div>
      <div class="flex gap-4 flex-wrap">
        <RouterLink to="/view/pages/coming-soon" class="variant-link">Coming Soon (Original)</RouterLink>
        <RouterLink to="/view/pages/coming-soon-simple" class="variant-link">Coming Soon Simple</RouterLink>
        <RouterLink to="/view/pages/coming-soon-split" class="variant-link">Coming Soon Split</RouterLink>
        <RouterLink to="/view/pages/coming-soon-newsletter" class="variant-link">Coming Soon Newsletter</RouterLink>
        <RouterLink to="/view/pages/coming-soon-video" class="variant-link">Coming Soon Video</RouterLink>
      </div>
    </section>

    <!-- Error Pages -->
    <section>
      <div class="relative mb-6">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-start">
          <span class="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">Error Pages</span>
        </div>
      </div>
      <div class="flex gap-4 flex-wrap">
        <RouterLink to="/view/pages/not-found" class="variant-link">404 (Original)</RouterLink>
        <RouterLink to="/view/pages/not-found-simple" class="variant-link">404 Simple</RouterLink>
        <RouterLink to="/view/pages/not-found-split" class="variant-link">404 Split</RouterLink>
        <RouterLink to="/view/pages/not-found-background" class="variant-link">404 Background</RouterLink>
        <RouterLink to="/view/pages/not-found-dark" class="variant-link">404 Dark</RouterLink>
      </div>
    </section>

    <!-- Authentication -->
    <section>
      <div class="relative mb-6">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-start">
          <span class="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">Authentication</span>
        </div>
      </div>
      <div class="flex gap-4 flex-wrap">
        <RouterLink to="/view/auth/simple-login" class="variant-link">Simple Login</RouterLink>
        <RouterLink to="/view/auth/split-screen-login" class="variant-link">Split Screen Login</RouterLink>
        <RouterLink to="/view/auth/two-factor" class="variant-link">Two Factor Auth</RouterLink>
      </div>
    </section>

    <!-- Dashboards -->
    <section>
      <div class="relative mb-6">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-start">
          <span class="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">Dashboards</span>
        </div>
      </div>
      <div class="flex gap-4 flex-wrap">
        <RouterLink to="/view/dashboards/sidebar-layout" class="variant-link">Dashboard Sidebar</RouterLink>
        <RouterLink to="/view/dashboards/stacked-layout" class="variant-link">Dashboard Stacked</RouterLink>
        <RouterLink to="/view/pages/lead-details" class="variant-link">Lead Details</RouterLink>
      </div>
    </section>

  </div>
</template>

<style scoped>
.variant-link {
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem; /* rounded-lg */
  border-width: 1px;
  border-color: #e5e7eb; /* border-gray-200 */
  background-color: white;
  padding-left: 1.25rem; /* px-5 */
  padding-right: 1.25rem;
  padding-top: 0.625rem; /* py-2.5 */
  padding-bottom: 0.625rem;
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: #374151; /* text-gray-700 */
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.variant-link:hover {
  background-color: #f9fafb; /* hover:bg-gray-50 */
  color: #111827; /* hover:text-gray-900 */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* hover:shadow */
}

.variant-link:active {
  transform: scale(0.95); /* active:scale-95 */
}
</style>
