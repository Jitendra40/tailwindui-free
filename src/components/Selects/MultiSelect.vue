<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full">
   <label class="block text-sm font-medium leading-6 text-gray-900 mb-2">Technologie Stack</label>
   <div class="w-full rounded-xl border border-gray-200 bg-white p-2  focus-within:ring-2 focus-within:ring-indigo-600 focus-within:border-indigo-600 transition-all">
      <div class="flex flex-wrap gap-2">
         <!-- Tag 1 -->
         <span class="inline-flex items-center gap-x-1 ro rounded-lg bg-indigo-50 px-2.5 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
           Vue.js
           <button type="button" class="group relative -mr-1 h-4 w-4 rounded-md hover:bg-indigo-600/20">
             <span class="sr-only">Remove</span>
             <svg class="h-4 w-4 stroke-indigo-600/70 group-hover:stroke-indigo-600" viewBox="0 0 14 14" fill="none">
               <path d="M4 4l6 6m0-6l-6 6" stroke-width="1.5" stroke-linecap="round" />
             </svg>
           </button>
         </span>
         <!-- Tag 2 -->
         <span class="inline-flex items-center gap-x-1 rounded-lg bg-indigo-50 px-2.5 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
            Tailwind CSS
            <button type="button" class="group relative -mr-1 h-4 w-4 rounded-md hover:bg-indigo-600/20">
             <span class="sr-only">Remove</span>
             <svg class="h-4 w-4 stroke-indigo-600/70 group-hover:stroke-indigo-600" viewBox="0 0 14 14" fill="none">
               <path d="M4 4l6 6m0-6l-6 6" stroke-width="1.5" stroke-linecap="round" />
             </svg>
           </button>
        </span>
         <input type="text" class="flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 min-w-[120px]" placeholder="Add a framework..." />
      </div>
   </div>
   <p class="mt-2 text-xs text-gray-500">Press Enter to add a tag.</p>
</div>
`
</script>

<template>
  <PreviewWrapper title="Multi-Select Tags" description="Modern tag inputs with distinct remove actions." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
