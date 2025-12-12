<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full max-w-lg">
  <label for="file-upload-drop" class="group relative flex flex-col items-center justify-center w-full aspect-[2/1] rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/30 transition-all hover:bg-gray-50 hover:border-indigo-500 cursor-pointer">
      <div class="flex flex-col items-center justify-center pt-5 pb-6 text-center">
         <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition-transform group-hover:scale-110">
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
               <path d="M12 12v9" />
               <path d="m16 16-4-4-4 4" />
            </svg>
         </div>
         <p class="mb-1 text-sm font-semibold text-gray-900">
            <span class="text-indigo-600 group-hover:underline">Click to upload</span> or drag and drop
         </p>
         <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
      </div>
      <input id="file-upload-drop" name="file-upload-drop" type="file" class="sr-only" />
  </label>
</div>
`
</script>

<template>
  <PreviewWrapper title="Drag & Drop Zone" description="Modern dropzone with scale effects and clear typography." :html-block="htmlBlock">
    <div class="w-full max-w-lg">
      <label for="file-upload-drop" class="group relative flex flex-col items-center justify-center w-full aspect-[2/1] rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/30 transition-all hover:bg-gray-50 hover:border-indigo-500 cursor-pointer">
          <div class="flex flex-col items-center justify-center pt-5 pb-6 text-center">
             <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition-transform group-hover:scale-110">
                <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                   <path d="M12 12v9" />
                   <path d="m16 16-4-4-4 4" />
                </svg>
             </div>
             <p class="mb-1 text-sm font-semibold text-gray-900">
                <span class="text-indigo-600 group-hover:underline">Click to upload</span> or drag and drop
             </p>
             <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
          </div>
          <input id="file-upload-drop" name="file-upload-drop" type="file" class="sr-only" />
      </label>
    </div>
  </PreviewWrapper>
</template>
