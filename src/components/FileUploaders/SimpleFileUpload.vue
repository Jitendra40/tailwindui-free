<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex items-center gap-4">
  <label for="file-upload-basic" class="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">
    <svg class="mx-auto h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
      <path d="M12 12v9"/>
      <path d="m16 16-4-4-4 4"/>
    </svg>
    <span>Attach file</span>
    <input id="file-upload-basic" name="file-upload-basic" type="file" class="sr-only" />
  </label>
  <span class="text-sm text-gray-500">No file chosen</span>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Dropzone" description="Basic dashed border area." :html-block="htmlBlock">
    <div class="flex items-center gap-4">
      <label for="file-upload-basic" class="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">
        <svg class="mx-auto h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
          <path d="M12 12v9"/>
          <path d="m16 16-4-4-4 4"/>
        </svg>
        <span>Attach file</span>
        <input id="file-upload-basic" name="file-upload-basic" type="file" class="sr-only" />
      </label>
      <span class="text-sm text-gray-500">No file chosen</span>
    </div>
  </PreviewWrapper>
</template>
