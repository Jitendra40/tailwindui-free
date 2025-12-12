<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex rounded-xl bg-white shadow-sm shadow-black/5 border border-gray-200 sm:w-full sm:max-w-lg overflow-hidden">
  <div class="w-1/3 bg-gray-50 flex items-center justify-center border-r border-gray-100">
      <svg class="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
  </div>
  <div class="p-6 w-2/3">
    <h3 class="text-base font-semibold leading-6 text-gray-900">Horizontal Card</h3>
    <p class="mt-1 text-sm text-gray-500">This layout is useful for list items or search results where you want to show an image alongside text.</p>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Horizontal Card" description="Side-by-side layout." :html-block="htmlBlock">
    <div class="flex rounded-xl bg-white shadow-sm shadow-black/5 border border-gray-200 sm:w-full sm:max-w-lg overflow-hidden">
      <div class="w-1/3 bg-gray-50 flex items-center justify-center border-r border-gray-100">
          <svg class="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <div class="p-6 w-2/3">
        <h3 class="text-base font-semibold leading-6 text-gray-900">Horizontal Card</h3>
        <p class="mt-1 text-sm text-gray-500">This layout is useful for list items or search results where you want to show an image alongside text.</p>
      </div>
    </div>
  </PreviewWrapper>
</template>
