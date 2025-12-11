<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <label for="comment" class="block text-sm font-medium leading-6 text-gray-900">Add your comment</label>
  <div class="mt-2">
    <textarea rows="4" name="comment" id="comment" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Textarea" description="Standard textarea with standard styling." :html-block="htmlBlock">
    <div>
      <label for="comment" class="block text-sm font-medium leading-6 text-gray-900">Add your comment</label>
      <div class="mt-2">
        <textarea rows="4" name="comment" id="comment" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
  </PreviewWrapper>
</template>
