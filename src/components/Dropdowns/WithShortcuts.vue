<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-block text-left h-56">
  <details class="group">
    <summary class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none list-none">
      Actions
      <kbd class="hidden font-sans text-xs text-gray-400 group-hover:text-gray-500 md:inline-block">⌘K</kbd>
    </summary>
    <div class="absolute left-0 top-full mt-1 w-64 origin-top-left rounded-xl border border-gray-100 bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
      <div class="p-1 space-y-1">
        <a href="#" class="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
           <div class="flex items-center gap-3">
             <svg class="h-4 w-4 text-gray-400 group-hover:text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
             <span>Edit</span>
           </div>
           <kbd class="font-sans text-xs text-gray-400">⌘E</kbd>
        </a>
        <a href="#" class="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
           <div class="flex items-center gap-3">
             <svg class="h-4 w-4 text-gray-400 group-hover:text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
             <span>Duplicate</span>
           </div>
           <kbd class="font-sans text-xs text-gray-400">⌘D</kbd>
        </a>
         <a href="#" class="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
           <div class="flex items-center gap-3">
             <svg class="h-4 w-4 text-gray-400 group-hover:text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
             <span>Archive</span>
           </div>
           <kbd class="font-sans text-xs text-gray-400">⌘A</kbd>
        </a>
      </div>
      <div class="h-px bg-gray-100 my-1"></div>
       <div class="p-1">
        <a href="#" class="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-rose-600 hover:bg-rose-50 hover:text-rose-700">
           <div class="flex items-center gap-3">
             <svg class="h-4 w-4 text-rose-400 group-hover:text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
             <span>Delete</span>
           </div>
           <kbd class="font-sans text-xs text-rose-300 group-hover:text-rose-500">⌘⌫</kbd>
        </a>
       </div>
    </div>
  </details>
</div>`
</script>

<template>
  <PreviewWrapper
    title="With Shortcuts"
    description="Dropdown menu items with keyboard shortcut indicators."
    :html-block="htmlBlock"
  >
    <div class="relative inline-block text-left h-56">
      <details class="group">
        <summary class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none list-none">
          Actions
          <kbd class="hidden font-sans text-xs text-gray-400 group-hover:text-gray-500 md:inline-block">⌘K</kbd>
        </summary>
        <div class="absolute left-0 top-full mt-1 w-64 origin-top-left rounded-xl border border-gray-100 bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-all opacity-0 scale-95 group-open:opacity-100 group-open:scale-100 duration-100 ease-out">
          <div class="p-1 space-y-1">
            <a href="#" class="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
               <div class="flex items-center gap-3">
                 <svg class="h-4 w-4 text-gray-400 group-hover:text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                 <span>Edit</span>
               </div>
               <kbd class="font-sans text-xs text-gray-400">⌘E</kbd>
            </a>
            <a href="#" class="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
               <div class="flex items-center gap-3">
                 <svg class="h-4 w-4 text-gray-400 group-hover:text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                 <span>Duplicate</span>
               </div>
               <kbd class="font-sans text-xs text-gray-400">⌘D</kbd>
            </a>
             <a href="#" class="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
               <div class="flex items-center gap-3">
                 <svg class="h-4 w-4 text-gray-400 group-hover:text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                 <span>Archive</span>
               </div>
               <kbd class="font-sans text-xs text-gray-400">⌘A</kbd>
            </a>
          </div>
          <div class="h-px bg-gray-100 my-1"></div>
           <div class="p-1">
            <a href="#" class="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition-colors">
               <div class="flex items-center gap-3">
                 <svg class="h-4 w-4 text-rose-400 group-hover:text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                 <span>Delete</span>
               </div>
               <kbd class="font-sans text-xs text-rose-300 group-hover:text-rose-500">⌘⌫</kbd>
            </a>
           </div>
        </div>
      </details>
    </div>
  </PreviewWrapper>
</template>
