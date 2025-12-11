<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 rounded-full peer peer-checked:bg-indigo-600 transition-colors duration-200 ease-in-out"></div>
  <div class="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-full flex items-center justify-center">
      <svg class="h-3 w-3 text-gray-400 peer-checked:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <path d="M18 6 6 18"/>
         <path d="m6 6 12 12"/>
      </svg>
      <svg class="h-3 w-3 text-indigo-600 hidden peer-checked:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <path d="M20 6 9 17l-5-5"/>
      </svg>
  </div>
</label>
`
</script>

<template>
  <PreviewWrapper title="With Icons" description="Internal icons for state indication." :html-block="htmlBlock">
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer" checked>
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 rounded-full peer peer-checked:bg-indigo-600 transition-colors duration-200 ease-in-out"></div>
      <div class="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-full flex items-center justify-center">
          <svg class="h-3 w-3 text-gray-400 peer-checked:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <path d="M18 6 6 18"/>
             <path d="m6 6 12 12"/>
          </svg>
          <svg class="h-3 w-3 text-indigo-600 hidden peer-checked:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <path d="M20 6 9 17l-5-5"/>
          </svg>
      </div>
    </label>
  </PreviewWrapper>
</template>
