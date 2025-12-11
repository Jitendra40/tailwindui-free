<script setup lang="ts">
import { ref, computed } from 'vue'
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const min = 0
const max = 100
const minVal = ref(20)
const maxVal = ref(80)

const minPos = computed(() => ((minVal.value - min) / (max - min)) * 100)
const maxPos = computed(() => ((maxVal.value - min) / (max - min)) * 100)

const htmlBlock = `
<div>
  <label class="block text-sm font-medium leading-6 text-gray-900 mb-4">Price Range (Simulated)</label>
  <div class="relative w-full h-12">
      <!-- Track -->
      <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded-full -translate-y-1/2"></div>
      <!-- Active Track -->
      <div class="absolute top-1/2 h-1 bg-indigo-600 rounded-full -translate-y-1/2 z-10" :style="{ left: minPos + '%', right: (100 - maxPos) + '%' }"></div>
      
      <!-- Left Thumb -->
      <div class="absolute top-1/2 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full -translate-y-1/2 shadow cursor-grab z-20 hover:scale-110 transition-transform" :style="{ left: minPos + '%' }">
           <div class="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">\${{ minVal }}</div>
      </div>

      <!-- Right Thumb -->
       <div class="absolute top-1/2 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full -translate-y-1/2 shadow cursor-grab z-20 hover:scale-110 transition-transform" :style="{ left: maxPos + '%' }">
           <div class="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">\${{ maxVal }}</div>
      </div>
      
      <!-- Note: Real implementation would need complex JS for dragging. This is visual representation. -->
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Dual Range" description="Simulated range selection (Min/Max)." :html-block="htmlBlock">
    <div>
      <label class="block text-sm font-medium leading-6 text-gray-900 mb-4">Price Range (Simulated)</label>
      <div class="relative w-full h-12">
          <!-- Track -->
          <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded-full -translate-y-1/2"></div>
          <!-- Active Track -->
          <div class="absolute top-1/2 h-1 bg-indigo-600 rounded-full -translate-y-1/2 z-10" :style="{ left: minPos + '%', right: (100 - maxPos) + '%' }"></div>
          
          <!-- Left Thumb -->
          <div class="absolute top-1/2 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full -translate-y-1/2 shadow cursor-grab z-20 hover:scale-110 transition-transform" :style="{ left: minPos + '%' }">
               <div class="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">${{ minVal }}</div>
          </div>

          <!-- Right Thumb -->
           <div class="absolute top-1/2 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full -translate-y-1/2 shadow cursor-grab z-20 hover:scale-110 transition-transform" :style="{ left: maxPos + '%' }">
               <div class="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">${{ maxVal }}</div>
          </div>
          
          <!-- Note: Real implementation would need complex JS for dragging. This is visual representation. -->
      </div>
    </div>
  </PreviewWrapper>
</template>
