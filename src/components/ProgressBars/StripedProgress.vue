<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
   <h4 class="text-sm font-medium text-gray-900 mb-2">Processing (Striped)</h4>
  <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
      <div class="bg-indigo-600 h-4 rounded-full" style="width: 70%; background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent); background-size: 1rem 1rem;"></div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Striped Progress" description="Striped pattern to indicate activity." :html-block="htmlBlock">
    <div>
       <h4 class="text-sm font-medium text-gray-900 mb-2">Processing (Striped)</h4>
      <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div class="bg-indigo-600 h-4 rounded-full" style="width: 70%; background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent); background-size: 1rem 1rem;"></div>
      </div>
    </div>
  </PreviewWrapper>
</template>
