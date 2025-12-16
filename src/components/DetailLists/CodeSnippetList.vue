<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
  <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
    <h3 class="text-sm font-semibold text-gray-900">API Credentials</h3>
    <a href="javascript:void(0)" class="text-xs font-medium text-blue-600 hover:text-blue-700">Rotate keys</a>
  </div>
  <div class="p-0 divide-y divide-gray-100">
    <div class="px-6 py-5">
      <div class="flex items-center justify-between mb-2">
        <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Publishable Key</label>
        <span class="text-[10px] text-gray-400">Created 2 days ago</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="flex-1 bg-gray-900 rounded-lg p-3 font-mono text-sm text-gray-300 truncate relative group cursor-pointer hover:bg-gray-800 transition-colors">
          pk_test_51Mxq...2e4X9
          <div class="absolute inset-0 flex items-center justify-end px-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="text-xs text-gray-400">Click to copy</span>
          </div>
        </div>
        <button class="p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-gray-700 transition-colors">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
        </button>
      </div>
    </div>
    
    <div class="px-6 py-5">
      <div class="flex items-center justify-between mb-2">
        <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Secret Key</label>
        <div class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-red-500"></span>
            <span class="text-[10px] text-red-600 font-medium">Never share this</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="flex-1 bg-gray-900 rounded-lg p-3 font-mono text-sm text-gray-300 truncate relative group cursor-pointer hover:bg-gray-800 transition-colors">
          sk_test_...<span class="text-gray-600">â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢</span>
           <div class="absolute inset-0 flex items-center justify-end px-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="text-xs text-gray-400">Click to reveal</span>
          </div>
        </div>
        <button class="p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-gray-700 transition-colors">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
        </button>
      </div>
    </div>
    
    <div class="px-6 py-5">
      <div class="flex items-center justify-between mb-2">
        <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Webhook Secret</label>
      </div>
       <div class="flex items-center gap-2">
        <div class="flex-1 bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-500 truncate border border-gray-200">
          whsec_...
        </div>
        <button class="p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-gray-700 transition-colors">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        </button>
      </div>
    </div>
  </div>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Code Snippets List"
    description="Secure display for API keys and configuration values."
    :html-block="htmlBlock"
  >
    <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 class="text-sm font-semibold text-gray-900">API Credentials</h3>
        <a href="javascript:void(0)" class="text-xs font-medium text-blue-600 hover:text-blue-700">Rotate keys</a>
      </div>
      <div class="p-0 divide-y divide-gray-100">
        <div class="px-6 py-5">
          <div class="flex items-center justify-between mb-2">
            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Publishable Key</label>
            <span class="text-[10px] text-gray-400">Created 2 days ago</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-900 rounded-lg p-3 font-mono text-sm text-gray-300 truncate relative group cursor-pointer hover:bg-gray-800 transition-colors">
              pk_test_51Mxq...2e4X9
              <div class="absolute inset-0 flex items-center justify-end px-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="text-xs text-gray-400">Click to copy</span>
              </div>
            </div>
            <button class="p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-gray-700 transition-colors">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </button>
          </div>
        </div>
        
        <div class="px-6 py-5">
          <div class="flex items-center justify-between mb-2">
            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Secret Key</label>
            <div class="flex items-center gap-2">
                <span class="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                <span class="text-[10px] text-red-600 font-medium">Never share this</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-900 rounded-lg p-3 font-mono text-sm text-gray-300 truncate relative group cursor-pointer hover:bg-gray-800 transition-colors">
              sk_test_...<span class="text-gray-600">â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢</span>
               <div class="absolute inset-0 flex items-center justify-end px-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="text-xs text-gray-400">Click to reveal</span>
              </div>
            </div>
            <button class="p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-gray-700 transition-colors">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </button>
          </div>
        </div>
        
        <div class="px-6 py-5">
          <div class="flex items-center justify-between mb-2">
            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Webhook Secret</label>
          </div>
           <div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-500 truncate border border-gray-200">
              whsec_...
            </div>
            <button class="p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-gray-700 transition-colors">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
