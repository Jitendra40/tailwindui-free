<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
    <div class="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-5 py-4">
       <div class="flex items-center gap-2">
           <h4 class="text-sm font-semibold text-gray-900">Attached Files</h4>
           <span class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">2</span>
       </div>
       <button class="text-xs font-semibold text-indigo-600 hover:text-indigo-500 hover:underline">Download All</button>
    </div>
    <ul role="list" class="divide-y divide-gray-100">
      <!-- File 1 -->
      <li class="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-4">
           <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 ring-1 ring-inset ring-red-100">
             <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
           </div>
          <div class="flex min-w-0 flex-col">
            <p class="truncate text-sm font-medium text-gray-900">resume_frontend_dev.pdf</p>
            <p class="text-xs text-gray-500">2.4 MB • Uploaded just now</p>
          </div>
        </div>
        <div class="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button type="button" class="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-indigo-600 transition-colors" title="Download">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
          </button>
          <button type="button" class="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors" title="Delete">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
          </button>
        </div>
      </li>
      <!-- File 2 -->
       <li class="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-4">
           <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <line x1="10" y1="9" x2="8" y2="9"/>
              </svg>
           </div>
          <div class="flex min-w-0 flex-col">
            <p class="truncate text-sm font-medium text-gray-900">cover_letter_v2.docx</p>
            <p class="text-xs text-gray-500">142 KB • Uploaded 2h ago</p>
          </div>
        </div>
        <div class="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button type="button" class="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-indigo-600 transition-colors" title="Download">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
          </button>
          <button type="button" class="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors" title="Delete">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
          </button>
        </div>
      </li>
    </ul>
</div>
`
</script>

<template>
  <PreviewWrapper title="FileList" description="Clean file list with distinct icons and prominent actions." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
