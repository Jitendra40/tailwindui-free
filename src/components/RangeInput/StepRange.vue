<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full">
  <label for="range-steps" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Price Range (Steps of $10)</label>
  <input id="range-steps" type="range" min="0" max="100" step="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20" />
  <div class="flex justify-between text-xs font-medium text-gray-500 mt-2 px-1">
    <span>$0</span>
    <span>$20</span>
    <span>$40</span>
    <span>$60</span>
    <span>$80</span>
    <span>$100</span>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="With Steps" description="Slider forcing specific increments with labels." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
