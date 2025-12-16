<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Breadcrumb" class="w-full  mx-auto">
  <ol class="flex items-center gap-1 text-sm">
    <li class="flex items-center gap-1">
      <a href="javascript:void(0)" class="px-3 py-2 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">
        Home
      </a>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </li>
    <li class="flex items-center gap-1">
      <a href="javascript:void(0)" class="px-3 py-2 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">
        Products
      </a>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </li>
    <li class="flex items-center gap-1">
      <a href="javascript:void(0)" class="px-3 py-2 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">
        Electronics
      </a>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </li>
    <li class="flex items-center">
      <span class="px-3 py-2 font-medium text-gray-900" aria-current="page">Laptops</span>
    </li>
  </ol>
</nav>`
</script>

<template>
  <PreviewWrapper
    title="Chevron Breadcrumb"
    description="Breadcrumb navigation with chevron separators and hover states on clickable items."
    :html-block="htmlBlock"
    default-viewport="full"
  >
  
  </PreviewWrapper>
</template>
