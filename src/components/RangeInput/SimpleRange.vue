<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <label for="range-basic" class="block text-sm font-medium leading-6 text-gray-900">Volume</label>
  <div class="mt-2">
    <input id="range-basic" type="range" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Range" description="Basic slider." :html-block="htmlBlock">
    <div>
      <label for="range-basic" class="block text-sm font-medium leading-6 text-gray-900">Volume</label>
      <div class="mt-2">
        <input id="range-basic" type="range" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
      </div>
    </div>
  </PreviewWrapper>
</template>
