<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Breadcrumb" class="w-full  mx-auto">
  <ol class="flex flex-wrap items-center gap-2 text-sm text-gray-500">
    <li class="flex items-center gap-2">
      <a href="javascript:void(0)" class="flex items-center gap-1.5 p-1 -m-1 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="sr-only">Home</span>
      </a>
      <svg class="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </li>
    <li class="flex items-center gap-2">
      <a href="javascript:void(0)" class="px-2 py-1 rounded-md font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all">Dashboard</a>
       <svg class="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </li>
    <li class="flex items-center gap-2">
      <a href="javascript:void(0)" class="px-2 py-1 rounded-md font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all">Projects</a>
       <svg class="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </li>
    <li class="flex items-center gap-2 font-semibold text-gray-900 px-2 py-1" aria-current="page">Active</li>
  </ol>
</nav>`
</script>

<template>
  <PreviewWrapper
    title="Breadcrumbs"
    description="Modern breadcrumbs with chevron separators and interactive states."
    :html-block="htmlBlock"
    default-viewport="full"
  >
  
  </PreviewWrapper>
</template>
