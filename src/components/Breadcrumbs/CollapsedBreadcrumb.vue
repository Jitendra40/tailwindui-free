<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Breadcrumb" class="w-full mx-auto">
  <ol class="flex items-center gap-2 text-sm text-gray-600">
    <li class="flex items-center gap-2">
      <a href="javascript:void(0)" class="font-medium text-gray-900 hover:text-blue-600 transition-colors">Home</a>
      <span class="text-gray-400">/</span>
    </li>
    <li class="flex items-center gap-2">
      <button class="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 transition-colors" title="Show all items">
        <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      </button>
      <span class="text-gray-400">/</span>
    </li>
    <li class="flex items-center gap-2">
      <a href="javascript:void(0)" class="font-medium text-gray-900 hover:text-blue-600 transition-colors">Category</a>
      <span class="text-gray-400">/</span>
    </li>
    <li class="flex items-center gap-2">
      <a href="javascript:void(0)" class="font-medium text-gray-900 hover:text-blue-600 transition-colors">Subcategory</a>
      <span class="text-gray-400">/</span>
    </li>
    <li class="font-medium text-gray-900" aria-current="page">Current Item</li>
  </ol>
</nav>`
</script>

<template>
  <PreviewWrapper
    title="Collapsed Breadcrumb"
    description="Breadcrumb with collapsed middle items using ellipsis button for long paths."
    :html-block="htmlBlock"
    default-viewport="full"
  >

  </PreviewWrapper>
</template>
