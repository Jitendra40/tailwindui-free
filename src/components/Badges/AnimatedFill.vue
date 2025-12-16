<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap items-center gap-4">
  <!-- Pulse on Hover -->
  <span class="inline-flex cursor-default items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-sm transition-all hover:bg-blue-500 hover:shadow-md">
    Hover Me
  </span>

  <!-- Constant Pulse -->
  <span class="inline-flex items-center rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white shadow-sm animate-pulse">
    Recording
  </span>

  <!-- Ping Indicator -->
  <span class="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
    </span>
    Live Updates
  </span>

  <!-- Spinning Loader -->
  <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
    <svg class="animate-spin h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Processing
  </span>

  <!-- Gradient with Transform -->
  <span class="inline-flex select-none items-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-3 py-1 text-xs font-medium text-white shadow-sm hover:scale-105 transition-transform duration-200">
    Gradient Badge
  </span>

  <!-- Bounce Effect (Subtle) -->
  <span class="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-white shadow-sm hover:animate-bounce cursor-pointer">
    Bounce
  </span>
</div>
`
</script>

<template>
  <PreviewWrapper 
    title="Animated Filled Badges" 
    description="Solid high-contrast badges with various animation states for emphasis, loading, and alerts." 
    :html-block="htmlBlock"
    default-viewport="full"
  >
  </PreviewWrapper>
</template>
