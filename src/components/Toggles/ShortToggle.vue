<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer">
  <div class="h-4 w-8 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 peer-checked:bg-indigo-600"></div>
  <div class="absolute left-0 -top-0.5 h-5 w-5 rounded-full border border-gray-100 bg-white shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-full peer-checked:border-indigo-600"></div>
</label>
`
</script>

<template>
  <PreviewWrapper title="Short Toggle" description="Minimalist, thinner track style." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
