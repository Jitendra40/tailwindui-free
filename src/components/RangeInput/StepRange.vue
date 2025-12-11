<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <label for="range-steps" class="block text-sm font-medium leading-6 text-gray-900">Price Range (Steps of $10)</label>
  <div class="mt-2">
    <input id="range-steps" type="range" min="0" max="100" step="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
    <div class="flex justify-between text-xs text-gray-500 mt-1">
      <span>$0</span>
      <span>$50</span>
      <span>$100</span>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="With Steps" description="Slider forcing specific increments." :html-block="htmlBlock">
    <div>
      <label for="range-steps" class="block text-sm font-medium leading-6 text-gray-900">Price Range (Steps of $10)</label>
      <div class="mt-2">
        <input id="range-steps" type="range" min="0" max="100" step="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
        <div class="flex justify-between text-xs text-gray-500 mt-1">
          <span>$0</span>
          <span>$50</span>
          <span>$100</span>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
