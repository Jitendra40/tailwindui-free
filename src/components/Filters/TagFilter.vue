<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap items-center gap-2">
   <span class="inline-flex items-center gap-x-1 rounded-md bg-indigo-50 px-2.5 py-1.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/10">
      Price: <span class="text-indigo-900">$0 - $100</span>
      <button type="button" class="group relative -mr-1 h-4 w-4 rounded-sm hover:bg-indigo-600/20 flex items-center justify-center ml-0.5">
         <span class="sr-only">Remove</span>
         <svg class="h-3 w-3 stroke-indigo-600/70 group-hover:stroke-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M18 6 6 18"/>
           <path d="m6 6 12 12"/>
         </svg>
      </button>
   </span>
    <span class="inline-flex items-center gap-x-1 rounded-md bg-purple-50 px-2.5 py-1.5 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/10">
      Color: <span class="text-purple-900 gap-1 flex items-center"><span class="w-2 h-2 rounded-full bg-blue-500"></span> Blue</span>
      <button type="button" class="group relative -mr-1 h-4 w-4 rounded-sm hover:bg-purple-600/20 flex items-center justify-center ml-0.5">
         <span class="sr-only">Remove</span>
         <svg class="h-3.5 w-3.5 stroke-gray-600/50 group-hover:stroke-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M18 6 6 18"/>
           <path d="m6 6 12 12"/>
        </svg>
      </button>
   </span>
   <button class="text-xs font-semibold text-gray-500 hover:text-gray-900 underline decoration-gray-300 underline-offset-4">Clear all</button>
</div>
`
</script>

<template>
  <PreviewWrapper title="Active Filters" description="Applied filters as removable tags." :html-block="htmlBlock">
    <div class="flex flex-wrap items-center gap-2">
       <span class="inline-flex items-center gap-x-1 rounded-md bg-indigo-50 px-2.5 py-1.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/10">
          Price: <span class="text-indigo-900">$0 - $100</span>
          <button type="button" class="group relative -mr-1 h-4 w-4 rounded-sm hover:bg-indigo-600/20 flex items-center justify-center ml-0.5">
             <span class="sr-only">Remove</span>
             <svg class="h-3 w-3 stroke-indigo-600/70 group-hover:stroke-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <path d="M18 6 6 18"/>
               <path d="m6 6 12 12"/>
             </svg>
          </button>
       </span>
        <span class="inline-flex items-center gap-x-1 rounded-md bg-purple-50 px-2.5 py-1.5 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/10">
          Color: <span class="text-purple-900 gap-1 flex items-center"><span class="w-2 h-2 rounded-full bg-blue-500"></span> Blue</span>
          <button type="button" class="group relative -mr-1 h-4 w-4 rounded-sm hover:bg-purple-600/20 flex items-center justify-center ml-0.5">
             <span class="sr-only">Remove</span>
             <svg class="h-3.5 w-3.5 stroke-gray-600/50 group-hover:stroke-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <path d="M18 6 6 18"/>
               <path d="m6 6 12 12"/>
            </svg>
          </button>
       </span>
       <button class="text-xs font-semibold text-gray-500 hover:text-gray-900 underline decoration-gray-300 underline-offset-4">Clear all</button>
    </div>
  </PreviewWrapper>
</template>
