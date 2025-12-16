<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full">
  <label class="block text-sm font-medium leading-6 text-gray-900 mb-4">Price Range</label>
  <div class="relative w-full h-12 select-none">
      <!-- Background Track -->
      <div class="absolute top-1/2 left-0 w-full h-2 bg-gray-200 rounded-full -translate-y-1/2"></div>
      
      <!-- Colored Range Track (Visual only) -->
      <div class="absolute top-1/2 left-[20%] right-[20%] h-2 bg-blue-600 rounded-full -translate-y-1/2 z-10"></div>
      
      <!-- Left Thumb -->
      <div class="absolute top-1/2 left-[20%] w-5 h-5 bg-white border-2 border-blue-600 rounded-full -translate-y-1/2 -translate-x-1/2 shadow-sm cursor-grab z-20 hover:scale-110 hover:shadow-md transition-all">
           <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-medium px-2 py-1 rounded shadow opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
              $20
           </div>
      </div>

      <!-- Right Thumb -->
       <div class="absolute top-1/2 left-[80%] w-5 h-5 bg-white border-2 border-blue-600 rounded-full -translate-y-1/2 -translate-x-1/2 shadow-sm cursor-grab z-20 hover:scale-110 hover:shadow-md transition-all">
           <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-medium px-2 py-1 rounded shadow opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
              $80
           </div>
      </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Dual Range" description="Simulated dual-thumb range input." :html-block="htmlBlock">
 
  </PreviewWrapper>
</template>
