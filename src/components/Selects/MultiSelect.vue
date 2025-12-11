<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
   <label class="block text-sm font-medium leading-6 text-gray-900">Skills</label>
   <div class="mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 bg-white min-h-[42px] flex flex-wrap gap-2">
       <span class="inline-flex items-center gap-x-0.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
           Vue.js
           <button type="button" class="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20">
             <span class="sr-only">Remove</span>
             <svg class="h-3.5 w-3.5 stroke-gray-600/50 group-hover:stroke-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
             </svg>
           </button>
       </span>
        <span class="inline-flex items-center gap-x-0.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
           TypeScript
            <button type="button" class="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20">
             <span class="sr-only">Remove</span>
             <svg class="h-3.5 w-3.5 stroke-gray-600/50 group-hover:stroke-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
             </svg>
           </button>
       </span>
       <input type="text" class="flex-1 border-0 bg-transparent p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 min-w-[100px]" placeholder="Add skill..." />
   </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Multi-Select" description="Input field with chip display for multiple values." :html-block="htmlBlock">
   <div>
      <label class="block text-sm font-medium leading-6 text-gray-900">Skills</label>
      <div class="mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 bg-white min-h-[42px] flex flex-wrap gap-2">
          <span class="inline-flex items-center gap-x-0.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
              Vue.js
              <button type="button" class="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20">
                <span class="sr-only">Remove</span>
                <svg class="h-3.5 w-3.5 stroke-gray-600/50 group-hover:stroke-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
          </span>
           <span class="inline-flex items-center gap-x-0.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
              TypeScript
               <button type="button" class="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20">
                <span class="sr-only">Remove</span>
                <svg class="h-3.5 w-3.5 stroke-gray-600/50 group-hover:stroke-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
          </span>
          <input type="text" class="flex-1 border-0 bg-transparent p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 min-w-[100px]" placeholder="Add skill..." />
      </div>
   </div>
  </PreviewWrapper>
</template>
