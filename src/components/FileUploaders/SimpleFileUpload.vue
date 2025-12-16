<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex items-center gap-4">
  <label for="file-upload-basic" class="group relative cursor-pointer inline-flex items-center gap-2.5 rounded-xl bg-indigo-50 px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-inset ring-indigo-200 transition-all hover:bg-indigo-100 hover:ring-indigo-300 active:scale-95">
    <svg class="h-5 w-5 text-indigo-600 transition-colors group-hover:text-indigo-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13.2 11.4L9 16.8 17.4 16.8 13.2 11.4Z" />
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
    <span>Choose File</span>
    <input id="file-upload-basic" name="file-upload-basic" type="file" class="sr-only" />
  </label>
  <span class="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">No file chosen</span>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Button" description="Enhanced upload button with better interaction states." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
