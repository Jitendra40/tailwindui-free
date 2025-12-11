<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-block text-left h-48">
  <details class="group">
    <summary class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 list-none">
      <span>Options</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd" />
      </svg>
    </summary>
    <div class="absolute left-0 top-full mt-2 w-56 origin-top-left rounded-xl border border-gray-100 bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-all">
      <div class="px-2 py-2">
        <a href="#" class="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
           <svg class="h-4 w-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
           View details
        </a>
        <a href="#" class="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
          <svg class="h-4 w-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
          Duplicate
        </a>
      </div>
      <div class="h-px bg-gray-100 my-1"></div>
      <div class="px-2 py-2">
        <a href="#" class="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-rose-600 hover:bg-rose-50 hover:text-rose-700">
          <svg class="h-4 w-4 text-rose-400 group-hover:text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          Delete
        </a>
      </div>
    </div>
  </details>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Dropdowns"
    description="Popup menu with section dividers, icons, and hover states."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="relative inline-block text-left h-48">
      <details class="group">
        <summary class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 list-none">
          <span>Options</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd" />
          </svg>
        </summary>
        <div class="absolute left-0 top-full mt-2 w-56 origin-top-left rounded-xl border border-gray-100 bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-all">
          <div class="px-2 py-2">
            <a href="#" class="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
               <svg class="h-4 w-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
               View details
            </a>
            <a href="#" class="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              <svg class="h-4 w-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
              Duplicate
            </a>
          </div>
          <div class="h-px bg-gray-100 my-1"></div>
          <div class="px-2 py-2">
            <a href="#" class="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-rose-600 hover:bg-rose-50 hover:text-rose-700">
              <svg class="h-4 w-4 text-rose-400 group-hover:text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              Delete
            </a>
          </div>
        </div>
      </details>
    </div>
  </PreviewWrapper>
</template>
