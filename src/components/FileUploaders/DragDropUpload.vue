<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex justify-center rounded-xl border-2 border-dashed border-gray-300/80 px-6 py-10 hover:bg-gray-50 hover:border-indigo-400 transition-all cursor-pointer group">
  <div class="text-center">
    <div class="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
          <svg class="w-10 h-10 mb-3 text-gray-400 group-hover:text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
            <path d="M12 12v9"/>
            <path d="m16 16-4-4-4 4"/>
          </svg>
    </div>
    <div class="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
      <label for="file-upload-drop" class="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
        <span>Upload a file</span>
        <input id="file-upload-drop" name="file-upload-drop" type="file" class="sr-only" />
      </label>
      <p class="pl-1">or drag and drop</p>
    </div>
    <p class="text-xs leading-5 text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</p>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Drag & Drop Area" description="Large interactive zone." :html-block="htmlBlock">
    <div class="flex justify-center rounded-xl border-2 border-dashed border-gray-300/80 px-6 py-10 hover:bg-gray-50 hover:border-indigo-400 transition-all cursor-pointer group">
      <div class="text-center">
        <div class="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
              <svg class="w-10 h-10 mb-3 text-gray-400 group-hover:text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
                <path d="M12 12v9"/>
                <path d="m16 16-4-4-4 4"/>
              </svg>
        </div>
        <div class="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
          <label for="file-upload-drop" class="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
            <span>Upload a file</span>
            <input id="file-upload-drop" name="file-upload-drop" type="file" class="sr-only" />
          </label>
          <p class="pl-1">or drag and drop</p>
        </div>
        <p class="text-xs leading-5 text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</p>
      </div>
    </div>
  </PreviewWrapper>
</template>
