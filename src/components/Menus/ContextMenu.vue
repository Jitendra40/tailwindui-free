<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-flex text-left flex justify-end w-full">
    <details class="group relative">
        <summary class="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-gray-200 transition-all cursor-pointer list-none focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-95">
            <span class="sr-only">Open options</span>
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="12" cy="5" r="1"/>
              <circle cx="12" cy="19" r="1"/>
            </svg>
        </summary>
        
         <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none p-1.5 transform opacity-0 scale-95 -translate-y-2 duration-200 ease-out group-open:opacity-100 group-open:scale-100 group-open:translate-y-0 transition-all">
            <div class="space-y-0.5">
                <a href="#" class="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">View profile</a>
                <a href="#" class="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Copy URL</a>
            </div>
            <div class="mt-1.5 pt-1.5 border-t border-gray-100">
                <a href="#" class="block rounded-xl px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">Block user</a>
            </div>
        </div>
   </details>
</div>
`
</script>

<template>
  <PreviewWrapper title="Context Menu" description="Refined kebab menu with floating aesthetics." :html-block="htmlBlock">
  
  </PreviewWrapper>
</template>
