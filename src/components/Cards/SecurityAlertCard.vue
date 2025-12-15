<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="rounded-xl border border-red-100 bg-white shadow-sm max-w-sm relative overflow-hidden">
  <div class="absolute top-0 right-0 p-3 opacity-10">
      <svg class="h-24 w-24 text-red-500" fill="currentColor" viewBox="0 0 20 20">
         <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
  </div>
  
  <div class="p-5 relative z-10">
     <div class="flex items-center gap-3">
        <div class="rounded-lg bg-red-100 p-2 text-red-600">
           <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
           </svg>
        </div>
        <div>
           <h3 class="font-bold text-gray-900">Security Alert</h3>
           <p class="text-xs text-red-600 font-medium">Critical Threat Detected</p>
        </div>
     </div>
     
     <div class="mt-4 rounded-lg bg-red-50 border border-red-100 p-3">
        <div class="flex items-start gap-2">
           <svg class="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
           </svg>
           <p class="text-xs text-red-800">
              <span class="font-bold">Suspicious Login Attempt</span><br>
              IP: 192.168.1.105 (Moscow, RU)<br>
              5 failed attempts in 2 min.
           </p>
        </div>
     </div>
     
     <div class="mt-4 flex items-center justify-between text-xs">
        <div class="flex items-center gap-1.5 text-gray-500">
           <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
           2 mins ago
        </div>
        <span class="rounded bg-gray-100 px-2 py-0.5 text-gray-600 font-medium">ID: #SEC-9921</span>
     </div>
     
     <div class="mt-5 grid grid-cols-2 gap-3">
        <button class="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
           Dismiss
        </button>
        <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
           Block IP
        </button>
     </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Security Alert Card"
    description="Critical security threat notification card with immediate action buttons."
    :html-block="htmlBlock"
  />
</template>
