<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="group relative">
  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 flex items-center justify-center text-gray-400">
      <svg class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
  </div>
  <div class="mt-4 flex justify-between">
    <div>
      <h3 class="text-sm text-gray-700">
        <a href="#">
          <span aria-hidden="true" class="absolute inset-0"></span>
          Machined Pen
        </a>
      </h3>
      <p class="mt-1 text-sm text-gray-500">Black</p>
    </div>
    <p class="text-sm font-medium text-gray-900">$35</p>
  </div>
  <div class="mt-4">
      <fieldset aria-label="Choose a color" class="flex gap-2">
         <label aria-label="Black" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
            <input type="radio" name="color-choice" value="Black" class="sr-only" checked>
            <span aria-hidden="true" class="h-4 w-4 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
         </label>
         <label aria-label="Brass" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
            <input type="radio" name="color-choice" value="Brass" class="sr-only">
            <span aria-hidden="true" class="h-4 w-4 rounded-full border border-black border-opacity-10 bg-[#B59E54]"></span>
         </label>
         <label aria-label="Chrome" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
            <input type="radio" name="color-choice" value="Chrome" class="sr-only">
            <span aria-hidden="true" class="h-4 w-4 rounded-full border border-black border-opacity-10 bg-[#E5E7EB]"></span>
         </label>
      </fieldset>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Product with Color Swatches" description="Card including color selection." :html-block="htmlBlock">
     <div class="w-64">
      <div class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 flex items-center justify-center text-gray-400">
            <svg class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                Machined Pen
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p class="text-sm font-medium text-gray-900">$35</p>
        </div>
        <div class="mt-4">
            <fieldset aria-label="Choose a color" class="flex gap-2">
               <label aria-label="Black" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                  <input type="radio" name="color-choice" value="Black" class="sr-only" checked>
                  <span aria-hidden="true" class="h-4 w-4 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
               </label>
               <label aria-label="Brass" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" value="Brass" class="sr-only">
                  <span aria-hidden="true" class="h-4 w-4 rounded-full border border-black border-opacity-10 bg-[#B59E54]"></span>
               </label>
               <label aria-label="Chrome" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" value="Chrome" class="sr-only">
                  <span aria-hidden="true" class="h-4 w-4 rounded-full border border-black border-opacity-10 bg-[#E5E7EB]"></span>
               </label>
            </fieldset>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
