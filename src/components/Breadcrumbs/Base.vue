<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Breadcrumb" class="w-full max-w-3xl mx-auto">
  <ol class="flex flex-wrap items-center gap-2 text-sm text-gray-600">
    <li class="flex items-center gap-2">
      <a href="#" class="font-medium text-gray-900 hover:underline">Dashboard</a>
      <span class="text-gray-300">/</span>
    </li>
    <li class="flex items-center gap-2">
      <a href="#" class="font-medium text-gray-900 hover:underline">Projects</a>
      <span class="text-gray-300">/</span>
    </li>
    <li class="flex items-center gap-2 text-gray-500" aria-current="page">Active</li>
  </ol>
</nav>`
</script>

<template>
  <PreviewWrapper
    title="Breadcrumbs"
    description="Lightweight breadcrumb trail with separators and current page styling."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <nav aria-label="Breadcrumb" class="w-full max-w-3xl mx-auto">
      <ol class="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        <li class="flex items-center gap-2">
          <a href="#" class="font-medium text-gray-900 hover:underline">Dashboard</a>
          <span class="text-gray-300">/</span>
        </li>
        <li class="flex items-center gap-2">
          <a href="#" class="font-medium text-gray-900 hover:underline">Projects</a>
          <span class="text-gray-300">/</span>
        </li>
        <li class="flex items-center gap-2 text-gray-500" aria-current="page">Active</li>
      </ol>
    </nav>
  </PreviewWrapper>
</template>
