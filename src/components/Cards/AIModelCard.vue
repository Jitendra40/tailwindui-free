<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="rounded-xl border border-gray-200 bg-white shadow-sm max-w-sm">
 <div class="p-5">
    <div class="flex items-center gap-3 mb-4">
       <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
       </div>
       <div>
          <h3 class="font-semibold text-gray-900">GPT-4 Turbo</h3>
          <p class="text-xs text-gray-500">OpenAI • v4.0.1</p>
       </div>
    </div>
    
    <p class="text-sm text-gray-600 mb-4 line-clamp-2">High-performance generative model for complex reasoning and creative tasks.</p>
    
    <div class="space-y-3">
       <div>
          <div class="flex items-center justify-between text-xs mb-1">
             <span class="text-gray-500 font-medium">Token Usage</span>
             <span class="text-gray-900 font-bold">1.2M / 2M</span>
          </div>
          <div class="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
             <div class="h-full bg-indigo-500" style="width: 60%"></div>
          </div>
       </div>
       
       <div class="flex items-center justify-between border-t border-gray-100 pt-3">
          <div class="text-center">
             <p class="text-[10px] text-gray-400 uppercase font-bold">Latency</p>
             <p class="text-xs font-semibold text-gray-900">120ms</p>
          </div>
          <div class="text-center border-l border-gray-100 pl-4">
             <p class="text-[10px] text-gray-400 uppercase font-bold">Cost/1k</p>
              <p class="text-xs font-semibold text-gray-900">$0.03</p>
          </div>
           <div class="text-center border-l border-gray-100 pl-4">
             <p class="text-[10px] text-gray-400 uppercase font-bold">Quality</p>
              <p class="text-xs font-semibold text-green-600">98%</p>
          </div>
       </div>
    </div>
 </div>
 <div class="bg-gray-50 p-3 rounded-b-xl border-t border-gray-100 flex items-center justify-between">
    <div class="flex -space-x-2">
       <span class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">NLP</span>
       <span class="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">Code</span>
    </div>
    <button class="text-xs font-semibold text-indigo-600 hover:text-indigo-500">View API Keys &rarr;</button>
 </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="AI Model Card"
    description="AI model performance tracking card with usage and cost metrics."
    :html-block="htmlBlock"
  />
</template>
