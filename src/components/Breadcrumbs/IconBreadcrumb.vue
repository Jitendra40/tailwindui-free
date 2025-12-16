<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Breadcrumb" class="w-full mx-auto border-b border-gray-200 pb-4">
  <ol class="flex items-center gap-3 text-sm">
    <li class="flex items-center gap-3">
      <a href="#" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
        </svg>
        <span class="font-medium">Dashboard</span>
      </a>
      <span class="text-gray-300">/</span>
    </li>
    <li class="flex items-center gap-3">
      <a href="#" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
        </svg>
        <span class="font-medium">Users</span>
      </a>
      <span class="text-gray-300">/</span>
    </li>
    <li class="flex items-center gap-3">
      <a href="#" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
        </svg>
        <span class="font-medium">Admin Panel</span>
      </a>
      <span class="text-gray-300">/</span>
    </li>
    <li class="flex items-center gap-2 text-gray-900">
      <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
      </svg>
      <span class="font-semibold" aria-current="page">Settings</span>
    </li>
  </ol>
</nav>`
</script>

<template>
  <PreviewWrapper
    title="Icon Breadcrumb"
    description="Breadcrumb with contextual icons for each item and bottom border."
    :html-block="htmlBlock"
    default-viewport="full"
  >

  </PreviewWrapper>
</template>
