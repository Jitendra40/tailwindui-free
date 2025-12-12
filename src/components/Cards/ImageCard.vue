<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="overflow-hidden rounded-lg bg-white shadow sm:w-full sm:max-w-md">
  <div class="h-32 bg-indigo-500 flex items-center justify-center text-white">
     <svg class="h-12 w-12 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
  </div>
  <div class="px-4 py-5 sm:p-6">
    <h3 class="text-base font-semibold leading-6 text-gray-900">Project Status</h3>
    <div class="mt-2 text-sm text-gray-500">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Media Card" description="Card with an image or media area at the top." :html-block="htmlBlock">
    <div class="overflow-hidden rounded-lg bg-white shadow sm:w-full sm:max-w-md">
      <div class="h-32 bg-indigo-500 flex items-center justify-center text-white">
         <svg class="h-12 w-12 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-base font-semibold leading-6 text-gray-900">Project Status</h3>
        <div class="mt-2 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
