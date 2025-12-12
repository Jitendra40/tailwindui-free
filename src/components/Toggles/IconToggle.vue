<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" checked>
  <div class="h-7 w-12 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 peer-checked:bg-indigo-600"></div>
  <div class="absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-5">
      <!-- Off Icon -->
      <svg class="h-3 w-3 text-gray-400 peer-checked:hidden" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <line x1="3" y1="3" x2="9" y2="9" />
         <line x1="9" y1="3" x2="3" y2="9" />
      </svg>
      <!-- On Icon -->
      <svg class="hidden h-3 w-3 text-indigo-600 peer-checked:block" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
         <polyline points="2 6 4.5 9 10 3" />
      </svg>
  </div>
</label>
`
</script>

<template>
  <PreviewWrapper title="Icon Toggle" description="Visual feedback with check and cross icons inside the thumb." :html-block="htmlBlock">
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer" checked>
      <div class="h-7 w-12 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 peer-checked:bg-indigo-600"></div>
      <div class="absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-5">
          <svg class="h-3 w-3 text-gray-400 peer-checked:hidden" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <line x1="3" y1="3" x2="9" y2="9" />
             <line x1="9" y1="3" x2="3" y2="9" />
          </svg>
          <svg class="hidden h-3 w-3 text-indigo-600 peer-checked:block" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
             <polyline points="2 6 4.5 9 10 3" />
          </svg>
      </div>
    </label>
  </PreviewWrapper>
</template>
