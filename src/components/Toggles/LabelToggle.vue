<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 rounded-full peer peer-checked:bg-indigo-600 transition-colors duration-200 ease-in-out"></div>
  <div class="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></div>
  <span class="ml-3 text-sm">
    <span class="font-medium text-gray-900">Annual billing</span>
    <span class="text-gray-500"> (Save 10%)</span>
  </span>
</label>
`
</script>

<template>
  <PreviewWrapper title="With Label" description="Toggle with associated text." :html-block="htmlBlock">
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer" checked>
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 rounded-full peer peer-checked:bg-indigo-600 transition-colors duration-200 ease-in-out"></div>
      <div class="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></div>
      <span class="ml-3 text-sm">
        <span class="font-medium text-gray-900">Annual billing</span>
        <span class="text-gray-500"> (Save 10%)</span>
      </span>
    </label>
  </PreviewWrapper>
</template>
