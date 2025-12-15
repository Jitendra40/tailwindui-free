<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-gray-300"></div>
  </div>
  <div class="relative flex justify-start">
    <span class="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">Title</span>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Label Left" description="Divider with text label aligned to the left." :html-block="htmlBlock" />
</template>
