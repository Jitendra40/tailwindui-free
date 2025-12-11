<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
    <div class="px-4 py-3 border-b border-gray-200 bg-gray-50/50 flex justify-between items-center">
       <h4 class="text-sm font-semibold text-gray-900">Attached Files (2)</h4>
       <button class="text-xs font-medium text-indigo-600 hover:text-indigo-500">Download All</button>
    </div>
    <ul role="list" class="divide-y divide-gray-100">
      <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 hover:bg-gray-50 transition-colors group">
        <div class="flex w-0 flex-1 items-center">
          <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
    </svg>
          <div class="ml-4 flex min-w-0 flex-1 gap-2 flex-col">
            <span class="truncate font-medium text-gray-900">resume_frontend_dev.pdf</span>
            <span class="flex-shrink-0 text-gray-500 text-xs">2.4 MB • Uploaded just now</span>
          </div>
        </div>
        <div class="ml-4 flex-shrink-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button type="button" class="p-1 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-indigo-50">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
          </button>
           <div class="w-px h-4 bg-gray-200"></div>
          <button type="button" class="p-1 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                <line x1="10" x2="10" y1="11" y2="17"/>
                <line x1="14" x2="14" y1="11" y2="17"/>
              </svg>
          </button>
        </div>
      </li>
       <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 hover:bg-gray-50 transition-colors group">
        <div class="flex w-0 flex-1 items-center">
          <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
    </svg>
          <div class="ml-4 flex min-w-0 flex-1 gap-2 flex-col">
            <span class="truncate font-medium text-gray-900">cover_letter_v2.docx</span>
            <span class="flex-shrink-0 text-gray-500 text-xs">142 KB • Uploaded 2h ago</span>
          </div>
        </div>
        <div class="ml-4 flex-shrink-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button type="button" class="p-1 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-indigo-50">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
          </button>
           <div class="w-px h-4 bg-gray-200"></div>
          <button type="button" class="p-1 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                <line x1="10" x2="10" y1="11" y2="17"/>
                <line x1="14" x2="14" y1="11" y2="17"/>
              </svg>
          </button>
        </div>
      </li>
    </ul>
</div>
`
</script>

<template>
  <PreviewWrapper title="File List" description="Display of uploaded files with actions." :html-block="htmlBlock">
    <div class="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-200 bg-gray-50/50 flex justify-between items-center">
           <h4 class="text-sm font-semibold text-gray-900">Attached Files (2)</h4>
           <button class="text-xs font-medium text-indigo-600 hover:text-indigo-500">Download All</button>
        </div>
        <ul role="list" class="divide-y divide-gray-100">
          <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 hover:bg-gray-50 transition-colors group">
            <div class="flex w-0 flex-1 items-center">
              <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
        </svg>
              <div class="ml-4 flex min-w-0 flex-1 gap-2 flex-col">
                <span class="truncate font-medium text-gray-900">resume_frontend_dev.pdf</span>
                <span class="flex-shrink-0 text-gray-500 text-xs">2.4 MB • Uploaded just now</span>
              </div>
            </div>
            <div class="ml-4 flex-shrink-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button type="button" class="p-1 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-indigo-50">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
              </button>
               <div class="w-px h-4 bg-gray-200"></div>
              <button type="button" class="p-1 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    <line x1="10" x2="10" y1="11" y2="17"/>
                    <line x1="14" x2="14" y1="11" y2="17"/>
                  </svg>
              </button>
            </div>
          </li>
           <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 hover:bg-gray-50 transition-colors group">
            <div class="flex w-0 flex-1 items-center">
              <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
        </svg>
              <div class="ml-4 flex min-w-0 flex-1 gap-2 flex-col">
                <span class="truncate font-medium text-gray-900">cover_letter_v2.docx</span>
                <span class="flex-shrink-0 text-gray-500 text-xs">142 KB • Uploaded 2h ago</span>
              </div>
            </div>
            <div class="ml-4 flex-shrink-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button type="button" class="p-1 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-indigo-50">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
              </button>
               <div class="w-px h-4 bg-gray-200"></div>
              <button type="button" class="p-1 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    <line x1="10" x2="10" y1="11" y2="17"/>
                    <line x1="14" x2="14" y1="11" y2="17"/>
                  </svg>
              </button>
            </div>
          </li>
        </ul>
    </div>
  </PreviewWrapper>
</template>
