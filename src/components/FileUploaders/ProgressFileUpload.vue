<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full max-w-md p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
 <div class="mb-2 flex justify-between items-center text-sm">
    <div class="flex items-center gap-2">
        <div class="h-8 w-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs font-bold uppercase">PDF</div>
        <div class="flex flex-col">
            <span class="font-medium text-gray-700">quarterly_report.pdf</span>
            <svg class="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
    </svg>
        </div>
    </div>
    <button class="text-gray-400 hover:text-gray-500">
         <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"/>
          <path d="m6 6 12 12"/>
         </svg>
    </button>
 </div>
 <div class="relative h-2 rounded-full bg-gray-100 overflow-hidden mt-3">
    <div class="absolute inset-y-0 left-0 bg-indigo-600 w-[65%] rounded-full transition-all duration-500"></div>
 </div>
 <div class="mt-2 flex justify-between text-xs">
    <span class="text-gray-500">Uploading...</span>
    <span class="font-medium text-gray-900">65%</span>
 </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="With Progress" description="Status indication for ongoing uploads." :html-block="htmlBlock">
    <div class="w-full max-w-md p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
       <div class="mb-2 flex justify-between items-center text-sm">
          <div class="flex items-center gap-2">
              <div class="h-8 w-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs font-bold uppercase">PDF</div>
              <div class="flex flex-col">
                  <span class="font-medium text-gray-700">quarterly_report.pdf</span>
                  <svg class="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
          </svg>
              </div>
          </div>
          <button class="text-gray-400 hover:text-gray-500">
               <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
               </svg>
          </button>
       </div>
       <div class="relative h-2 rounded-full bg-gray-100 overflow-hidden mt-3">
          <div class="absolute inset-y-0 left-0 bg-indigo-600 w-[65%] rounded-full transition-all duration-500"></div>
       </div>
       <div class="mt-2 flex justify-between text-xs">
          <span class="text-gray-500">Uploading...</span>
          <span class="font-medium text-gray-900">65%</span>
       </div>
    </div>
  </PreviewWrapper>
</template>
