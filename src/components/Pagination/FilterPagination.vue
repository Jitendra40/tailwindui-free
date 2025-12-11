<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div class="flex items-center gap-2">
       <span class="text-sm text-gray-700">Rows per page:</span>
       <select class="h-8 rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
          <option>10</option>
          <option>20</option>
          <option>50</option>
       </select>
    </div>
    <div class="flex items-center gap-6">
       <span class="text-sm text-gray-700">1-10 of 100</span>
       <div class="flex items-center gap-1">
           <button type="button" class="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50" disabled>
               <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m15 18-6-6 6-6"/>
               </svg>
           </button>
           <button type="button" class="p-1 rounded-full hover:bg-gray-100">
               <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"/>
               </svg>
           </button>
       </div>
    </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Pagination with options" description="Compact pagination with rows per page selector." :html-block="htmlBlock">
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class="flex items-center gap-2">
           <span class="text-sm text-gray-700">Rows per page:</span>
           <select class="h-8 rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>10</option>
              <option>20</option>
              <option>50</option>
           </select>
        </div>
        <div class="flex items-center gap-6">
           <span class="text-sm text-gray-700">1-10 of 100</span>
           <div class="flex items-center gap-1">
               <button type="button" class="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50" disabled>
                   <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m15 18-6-6 6-6"/>
                   </svg>
               </button>
               <button type="button" class="p-1 rounded-full hover:bg-gray-100">
                   <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                   </svg>
               </button>
           </div>
        </div>
    </div>
  </PreviewWrapper>
</template>
