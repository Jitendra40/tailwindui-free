<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
  <div class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96 flex items-center justify-center text-gray-400">
    <svg class="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
  </div>
  <div class="flex flex-1 flex-col space-y-2 p-4">
    <h3 class="text-sm font-medium text-gray-900">
      <a href="#">
        <span aria-hidden="true" class="absolute inset-0"></span>
        Basic Tee 6-Pack
      </a>
    </h3>
    <p class="text-sm text-gray-500">Includes 6 colors: black, white, gray, heather gray, navy, and olive.</p>
    <div class="flex flex-1 flex-col justify-end">
      <p class="text-sm italic text-gray-500">8 colors</p>
      <p class="text-base font-medium text-gray-900">$192</p>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Product List Card" description="Detailed card with description." :html-block="htmlBlock">
    <div class="w-64">
      <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96 flex items-center justify-center text-gray-400 h-96">
          <svg class="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        </div>
        <div class="flex flex-1 flex-col space-y-2 p-4">
          <h3 class="text-sm font-medium text-gray-900">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0"></span>
              Basic Tee 6-Pack
            </a>
          </h3>
          <p class="text-sm text-gray-500">Includes 6 colors: black, white, gray, heather gray, navy, and olive.</p>
          <div class="flex flex-1 flex-col justify-end">
            <p class="text-sm italic text-gray-500">8 colors</p>
            <p class="text-base font-medium text-gray-900">$192</p>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
