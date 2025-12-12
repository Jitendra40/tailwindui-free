<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer">
  <div class="h-7 w-12 rounded-full bg-gray-200 transition-colors duration-300 ease-in-out peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 peer-checked:bg-indigo-600"></div>
  <div class="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
</label>
`
</script>

<template>
  <PreviewWrapper title="Simple Toggle" description="Smooth, modern switch with refined shadows." :html-block="htmlBlock">
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer">
      <div class="h-7 w-12 rounded-full bg-gray-200 transition-colors duration-300 ease-in-out peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 peer-checked:bg-indigo-600"></div>
      <div class="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
    </label>
  </PreviewWrapper>
</template>
