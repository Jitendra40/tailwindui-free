<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex items-center gap-4 w-full">
    <button type="button" class="text-gray-400 hover:text-blue-600 transition-colors">
         <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
           <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
           <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
         </svg>
    </button>
    <input type="range" value="50" min="0" max="100" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20" />
    <span class="w-10 text-sm font-medium text-gray-700 text-right">50%</span>
</div>
`
</script>

<template>
  <PreviewWrapper title="Volume Slider" description="With accompanying icon and current value." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
