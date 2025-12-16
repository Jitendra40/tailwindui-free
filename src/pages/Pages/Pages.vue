<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const LandingPage = defineAsyncComponent(() => import('@/components/Pages/LandingPage.vue'))
const AboutUs = defineAsyncComponent(() => import('@/components/Pages/AboutUs.vue'))
const NotFoundPage = defineAsyncComponent(() => import('@/components/Pages/NotFoundPage.vue'))
const ComingSoon = defineAsyncComponent(() => import('@/components/Pages/ComingSoon.vue'))
</script>

<template>
  <div class="space-y-12">
    <div>
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-6">Landing Page</h2>
        <LandingPage />
    </div>

    <div>
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-6">About Us</h2>
        <AboutUs />
    </div>
    
    <div>
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-6">404 Not Found</h2>
        <NotFoundPage />
    </div>

    <div>
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-6">Coming Soon</h2>
        <ComingSoon />
    </div>
  </div>
</template>
