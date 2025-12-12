<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<label class="flex items-center cursor-pointer gap-3">
  <!-- Toggle Switch -->
  <div class="relative inline-flex items-center">
      <input type="checkbox" class="sr-only peer" checked>
      <div class="h-6 w-11 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 peer-checked:bg-indigo-600"></div>
      <div class="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></div>
  </div>
  <!-- Label Content -->
  <div class="flex flex-col">
     <span class="text-sm font-medium text-gray-900">Annual billing</span>
     <span class="text-xs text-gray-500">Save 10% on your subscription</span>
  </div>
</label>
`
</script>

<template>
  <PreviewWrapper title="With Label" description="Toggle with title and description text." :html-block="htmlBlock">
    <label class="flex items-center cursor-pointer gap-3">
      <div class="relative inline-flex items-center">
          <input type="checkbox" class="sr-only peer" checked>
          <div class="h-6 w-11 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 peer-checked:bg-indigo-600"></div>
          <div class="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></div>
      </div>
      <div class="flex flex-col">
         <span class="text-sm font-medium text-gray-900">Annual billing</span>
         <span class="text-xs text-gray-500">Save 10% on your subscription</span>
      </div>
    </label>
  </PreviewWrapper>
</template>
