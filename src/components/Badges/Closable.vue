<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap items-center gap-4">
  <!-- Basic Closable -->
  <span class="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 transition-colors">
    Framework: Vue.js
    <button type="button" class="group -mr-1 flex h-4 w-4 items-center justify-center rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
      <span class="sr-only">Remove</span>
      <svg class="h-3 w-3 text-gray-500 group-hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </span>

  <!-- Primary Closable -->
  <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 border border-indigo-100">
    <span class="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
    Filter: Marketing
    <button type="button" class="group -mr-1 flex h-4 w-4 items-center justify-center rounded-full hover:bg-indigo-200 ml-1 transition-colors">
      <svg class="h-3 w-3 text-indigo-500 group-hover:text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </span>

    <!-- Destructive Closable -->
  <span class="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700 border border-red-100">
    Bug Report
    <button type="button" class="group -mr-1 flex h-4 w-4 items-center justify-center rounded-full hover:bg-red-200 ml-1 transition-colors">
      <svg class="h-3 w-3 text-red-500 group-hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </span>

  <!-- Avatar Closable -->
  <span class="inline-flex items-center rounded-full border border-gray-200 bg-white py-0.5 pl-0.5 pr-2.5 text-xs font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md">
    <img class="mr-1.5 h-6 w-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    Tom Cook
    <button type="button" class="ml-2 inline-flex flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <span class="sr-only">Remove large option</span>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </span>

   <!-- Dark Closable -->
  <span class="inline-flex items-center gap-1 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white shadow-sm ring-1 ring-inset ring-gray-900/10">
    Dark Mode
    <button type="button" class="group -mr-1 flex h-4 w-4 items-center justify-center rounded-full hover:bg-gray-700 ml-1 transition-colors">
      <svg class="h-3 w-3 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </span>
</div>
`
</script>

<template>
  <PreviewWrapper 
    title="Closable Badges & Tags" 
    description="Interactive badges with dismiss buttons, suitable for active filters, multi-select values, or assigned users." 
    :html-block="htmlBlock"
    default-viewport="full"
  >
  </PreviewWrapper>
</template>
