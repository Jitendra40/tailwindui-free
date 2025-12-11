<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <label for="range-ticks" class="block text-sm font-medium leading-6 text-gray-900">Zoom Level</label>
  <div class="mt-2 relative">
    <input id="range-ticks" type="range" list="ticks" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
    <datalist id="ticks" class="flex justify-between text-xs text-gray-400 w-full mt-1 px-1">
      <option value="0" label="0%"></option>
      <option value="25" label="25%"></option>
      <option value="50" label="50%"></option>
      <option value="75" label="75%"></option>
      <option value="100" label="100%"></option>
    </datalist>
    <!-- Visual ticks (since datalist styling is limited) -->
     <div class="absolute top-3 left-0 right-0 flex justify-between px-1 pointer-events-none">
         <span class="w-0.5 h-1 bg-gray-300"></span>
         <span class="w-0.5 h-1 bg-gray-300"></span>
         <span class="w-0.5 h-1 bg-gray-300"></span>
         <span class="w-0.5 h-1 bg-gray-300"></span>
         <span class="w-0.5 h-1 bg-gray-300"></span>
     </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="With Ticks" description="Visual markers along the track." :html-block="htmlBlock">
    <div>
      <label for="range-ticks" class="block text-sm font-medium leading-6 text-gray-900">Zoom Level</label>
      <div class="mt-2 relative">
        <input id="range-ticks" type="range" list="ticks" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
        <datalist id="ticks" class="flex justify-between text-xs text-gray-400 w-full mt-1 px-1">
          <option value="0" label="0%"></option>
          <option value="25" label="25%"></option>
          <option value="50" label="50%"></option>
          <option value="75" label="75%"></option>
          <option value="100" label="100%"></option>
        </datalist>
        <!-- Visual ticks (since datalist styling is limited) -->
         <div class="absolute top-3 left-0 right-0 flex justify-between px-1 pointer-events-none">
             <span class="w-0.5 h-1 bg-gray-300"></span>
             <span class="w-0.5 h-1 bg-gray-300"></span>
             <span class="w-0.5 h-1 bg-gray-300"></span>
             <span class="w-0.5 h-1 bg-gray-300"></span>
             <span class="w-0.5 h-1 bg-gray-300"></span>
         </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
