<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full max-w-md p-5 bg-white rounded-xl border border-gray-200 shadow-sm transition-all hover:shadow-md">
 <div class="mb-3 flex justify-between items-start">
    <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 ring-1 ring-inset ring-red-100">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
        </div>
        <div class="flex flex-col">
            <span class="text-sm font-semibold text-gray-900 truncate max-w-[200px]">quarterly_financial_report_2024.pdf</span>
            <span class="text-xs text-gray-500">2.4 MB</span>
        </div>
    </div>
    <button class="rounded-md p-1.5 text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors">
         <span class="sr-only">Cancel upload</span>
         <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
         </svg>
    </button>
 </div>
 
 <div class="relative mt-2">
    <div class="flex mb-1 items-center justify-between text-xs font-semibold">
        <span class="text-indigo-600">Uploading...</span>
        <span class="text-gray-900">65%</span>
    </div>
    <div class="relative h-2 w-full rounded-full bg-gray-100 overflow-hidden">
        <div class="absolute inset-y-0 left-0 bg-indigo-600 w-[65%] rounded-full transition-all duration-500 ease-out">
             <div class="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
        </div>
    </div>
 </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Upload Progress" description="Detailed file card with animated progress bar." :html-block="htmlBlock">

  </PreviewWrapper>
</template>


