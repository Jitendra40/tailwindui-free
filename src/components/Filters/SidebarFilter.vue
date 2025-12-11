<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-64 border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
  <div class="border-b border-gray-200 pb-4">
     <div class="flow-root">
        <button type="button" class="flex w-full items-center justify-between bg-white py-2 text-sm text-gray-400 hover:text-gray-500">
           <span class="font-medium text-gray-900">Color</span>
           <span class="ml-6 flex items-center">
               <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/>
          </svg>
           </span>
        </button>
     </div>
     <div class="pt-4">
        <div class="space-y-3">
           <div class="flex items-center">
              <input id="filter-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer">
              <label for="filter-color-0" class="ml-3 text-sm text-gray-600 select-none cursor-pointer">White</label>
           </div>
            <div class="flex items-center">
              <input id="filter-color-1" name="color[]" value="beige" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer">
              <label for="filter-color-1" class="ml-3 text-sm text-gray-600 select-none cursor-pointer">Beige</label>
           </div>
           <div class="flex items-center">
              <input id="filter-color-2" name="color[]" value="blue" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer">
              <label for="filter-color-2" class="ml-3 text-sm text-gray-600 select-none cursor-pointer">Blue</label>
           </div>
        </div>
     </div>
  </div>
  <div class="pt-4">
     <div class="flow-root">
        <button type="button" class="flex w-full items-center justify-between bg-white py-2 text-sm text-gray-400 hover:text-gray-500">
           <span class="font-medium text-gray-900">Category</span>
           <span class="ml-6 flex items-center">
               <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/>
            <path d="M12 5v14"/>
          </svg>
           </span>
        </button>
     </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Sidebar Filter" description="Accordion-style sidebar filters." :html-block="htmlBlock">
    <div class="w-64 border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
      <div class="border-b border-gray-200 pb-4">
         <div class="flow-root">
            <button type="button" class="flex w-full items-center justify-between bg-white py-2 text-sm text-gray-400 hover:text-gray-500">
               <span class="font-medium text-gray-900">Color</span>
               <span class="ml-6 flex items-center">
                   <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
              </svg>
               </span>
            </button>
         </div>
         <div class="pt-4">
            <div class="space-y-3">
               <div class="flex items-center">
                  <input id="filter-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer">
                  <label for="filter-color-0" class="ml-3 text-sm text-gray-600 select-none cursor-pointer">White</label>
               </div>
                <div class="flex items-center">
                  <input id="filter-color-1" name="color[]" value="beige" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer">
                  <label for="filter-color-1" class="ml-3 text-sm text-gray-600 select-none cursor-pointer">Beige</label>
               </div>
               <div class="flex items-center">
                  <input id="filter-color-2" name="color[]" value="blue" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer">
                  <label for="filter-color-2" class="ml-3 text-sm text-gray-600 select-none cursor-pointer">Blue</label>
               </div>
            </div>
         </div>
      </div>
      <div class="pt-4">
         <div class="flow-root">
            <button type="button" class="flex w-full items-center justify-between bg-white py-2 text-sm text-gray-400 hover:text-gray-500">
               <span class="font-medium text-gray-900">Category</span>
               <span class="ml-6 flex items-center">
                   <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
                <path d="M12 5v14"/>
              </svg>
               </span>
            </button>
         </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
