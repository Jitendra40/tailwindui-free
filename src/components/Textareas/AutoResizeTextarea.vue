<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative">
  <label for="notes" class="block text-sm font-medium leading-6 text-gray-900">Session Notes</label>
  <div class="mt-2">
     <textarea id="notes" name="notes" rows="1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 min-h-[80px]" placeholder="This box has a minimum height..." ></textarea>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Auto Resize" description="Textarea with minimum height." :html-block="htmlBlock">
    <div class="relative">
      <label for="notes" class="block text-sm font-medium leading-6 text-gray-900">Session Notes</label>
      <div class="mt-2">
         <textarea id="notes" name="notes" rows="1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 min-h-[80px]" placeholder="This box has a minimum height..." />
      </div>
    </div>
  </PreviewWrapper>
</template>
