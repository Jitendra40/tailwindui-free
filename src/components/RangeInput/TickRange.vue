<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full">
  <label for="range-ticks" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Zoom Level</label>
  <div class="relative">
    <input id="range-ticks" type="range" list="ticks" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 z-20 relative" />
    <datalist id="ticks" class="flex justify-between text-xs text-gray-400 w-full mt-2 px-1 font-medium">
      <option value="0" label="0%"></option>
      <option value="25" label="25%"></option>
      <option value="50" label="50%"></option>
      <option value="75" label="75%"></option>
      <option value="100" label="100%"></option>
    </datalist>
    <div class="absolute top-1/2 left-0 right-0 flex justify-between px-1 pointer-events-none -translate-y-1/2">
       <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
       <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
       <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
       <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
       <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="With Ticks" description="Visual markers along the track with labels." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
