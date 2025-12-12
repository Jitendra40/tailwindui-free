<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-block text-left">
    <details class="group relative">
         <summary class="inline-flex w-full justify-center items-center gap-x-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 hover:ring-gray-300 hover:shadow active:scale-95 cursor-pointer list-none focus:outline-none select-none">
            Actions
            <svg class="-mr-1 h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 ease-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6"/>
            </svg>
        </summary>
        <div class="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none overflow-hidden p-1.5 transform opacity-0 scale-95 -translate-y-2 duration-200 ease-out group-open:opacity-100 group-open:scale-100 group-open:translate-y-0 transition-all">
            <div class="space-y-0.5">
                 <a href="#" class="group flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                      <path d="m15 5 4 4"/>
                    </svg>
                    Edit
                </a>
                <a href="#" class="group flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                    Duplicate
                </a>
            </div>
             <div class="space-y-0.5 pt-1.5 mt-1.5 border-t border-gray-100">
                 <a href="#" class="group flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="20" height="5" x="2" y="3" rx="1"/>
                      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/>
                      <path d="M10 12h4"/>
                    </svg>
                    Archive
                </a>
            </div>
            <div class="space-y-0.5 pt-1.5 mt-1.5 border-t border-gray-100">
                 <a href="#" class="group flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                    Delete
                </a>
            </div>
        </div>
    </details>
</div>
`
</script>

<template>
  <PreviewWrapper title="Icon Menu" description="Advanced dropdown with clear icon actions." :html-block="htmlBlock">
    <div class="relative inline-block text-left h-80 w-full flex justify-center pt-4">
        <div class="absolute top-4">
            <details class="group relative">
                 <summary class="inline-flex w-full justify-center items-center gap-x-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 hover:ring-gray-300 hover:shadow active:scale-95 cursor-pointer list-none focus:outline-none select-none">
                    Actions
                    <svg class="-mr-1 h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 ease-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                    </svg>
                </summary>
                <div class="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none overflow-hidden p-1.5 transform opacity-0 scale-95 -translate-y-2 duration-200 ease-out group-open:opacity-100 group-open:scale-100 group-open:translate-y-0 transition-all">
                    <div class="space-y-0.5">
                         <a href="#" class="group flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                            <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                              <path d="m15 5 4 4"/>
                            </svg>
                            Edit
                        </a>
                        <a href="#" class="group flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                            <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                            </svg>
                            Duplicate
                        </a>
                    </div>
                     <div class="space-y-0.5 pt-1.5 mt-1.5 border-t border-gray-100">
                         <a href="#" class="group flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                            <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <rect width="20" height="5" x="2" y="3" rx="1"/>
                              <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/>
                              <path d="M10 12h4"/>
                            </svg>
                            Archive
                        </a>
                    </div>
                    <div class="space-y-0.5 pt-1.5 mt-1.5 border-t border-gray-100">
                         <a href="#" class="group flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
                            <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M3 6h18"/>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                            </svg>
                            Delete
                        </a>
                    </div>
                </div>
            </details>
        </div>
    </div>
  </PreviewWrapper>
</template>
