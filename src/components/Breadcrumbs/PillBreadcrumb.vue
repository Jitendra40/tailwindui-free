<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Breadcrumb" class="w-full  mx-auto">
  <ol class="flex items-center gap-2 text-sm">
    <li>
      <a href="javascript:void(0)" class="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all">
        Dashboard
      </a>
    </li>
    <li class="text-gray-300">â†’</li>
    <li>
      <a href="javascript:void(0)" class="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all">
        Team
      </a>
    </li>
    <li class="text-gray-300">â†’</li>
    <li>
      <a href="javascript:void(0)" class="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all">
        Members
      </a>
    </li>
    <li class="text-gray-300">â†’</li>
    <li>
      <span class="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-600 text-white font-medium" aria-current="page">
        Profile
      </span>
    </li>
  </ol>
</nav>`
</script>

<template>
  <PreviewWrapper
    title="Pill Breadcrumb"
    description="Breadcrumb with pill-shaped items and highlighted current page."
    :html-block="htmlBlock"
    default-viewport="full"
  >

  </PreviewWrapper>
</template>
