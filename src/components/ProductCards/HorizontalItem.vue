<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex py-6 border-b border-gray-200">
  <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 flex items-center justify-center bg-gray-100 text-gray-400">
    <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
  </div>

  <div class="ml-4 flex flex-1 flex-col">
    <div>
      <div class="flex justify-between text-base font-medium text-gray-900">
        <h3>
          <a href="#">Throwback Hip Bag</a>
        </h3>
        <p class="ml-4">$90.00</p>
      </div>
      <p class="mt-1 text-sm text-gray-500">Salmon</p>
    </div>
    <div class="flex flex-1 items-end justify-between text-sm">
      <p class="text-gray-500">Qty 1</p>

      <div class="flex">
        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Horizontal Item" description="Cart item style." :html-block="htmlBlock">
    <div class="w-full max-w-sm">
      <div class="flex py-6 border-b border-gray-200 bg-white">
        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 flex items-center justify-center bg-gray-100 text-gray-400">
          <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        </div>

        <div class="ml-4 flex flex-1 flex-col">
          <div>
            <div class="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">Throwback Hip Bag</a>
              </h3>
              <p class="ml-4">$90.00</p>
            </div>
            <p class="mt-1 text-sm text-gray-500">Salmon</p>
          </div>
          <div class="flex flex-1 items-end justify-between text-sm">
            <p class="text-gray-500">Qty 1</p>

            <div class="flex">
              <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
