<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex items-end gap-4 h-32">
   <div class="relative w-4 h-full bg-gray-200 rounded-full overflow-hidden">
      <div class="absolute bottom-0 left-0 w-full bg-indigo-600" style="height: 40%"></div>
   </div>
   <div class="relative w-4 h-full bg-gray-200 rounded-full overflow-hidden">
      <div class="absolute bottom-0 left-0 w-full bg-indigo-600" style="height: 70%"></div>
   </div>
    <div class="relative w-4 h-full bg-gray-200 rounded-full overflow-hidden">
      <div class="absolute bottom-0 left-0 w-full bg-indigo-600" style="height: 25%"></div>
   </div>
    <div class="relative w-4 h-full bg-gray-200 rounded-full overflow-hidden">
      <div class="absolute bottom-0 left-0 w-full bg-indigo-600" style="height: 90%"></div>
   </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Vertical Progress" description="Vertical bars for comparative progress." :html-block="htmlBlock">
    <div class="flex items-end gap-4 h-32">
       <div class="relative w-4 h-full bg-gray-200 rounded-full overflow-hidden">
          <div class="absolute bottom-0 left-0 w-full bg-indigo-600" style="height: 40%"></div>
       </div>
       <div class="relative w-4 h-full bg-gray-200 rounded-full overflow-hidden">
          <div class="absolute bottom-0 left-0 w-full bg-indigo-600" style="height: 70%"></div>
       </div>
        <div class="relative w-4 h-full bg-gray-200 rounded-full overflow-hidden">
          <div class="absolute bottom-0 left-0 w-full bg-indigo-600" style="height: 25%"></div>
       </div>
        <div class="relative w-4 h-full bg-gray-200 rounded-full overflow-hidden">
          <div class="absolute bottom-0 left-0 w-full bg-indigo-600" style="height: 90%"></div>
       </div>
    </div>
  </PreviewWrapper>
</template>
