<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full">
  <label for="range-basic" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Volume</label>
  <input id="range-basic" type="range" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20" />
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Range" description="Basic slider with refined blue accent." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
