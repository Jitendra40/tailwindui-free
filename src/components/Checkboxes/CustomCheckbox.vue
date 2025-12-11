<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-2">
  <label class="group flex items-center gap-2.5 cursor-pointer">
    <input type="checkbox" class="peer sr-only" checked />
    <div class="relative h-4 w-4 rounded border border-gray-300 bg-white shadow-sm transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500/20 group-hover:border-gray-400">
      <svg class="absolute inset-0 h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">AI-powered insights</span>
  </label>
  
  <label class="group flex items-center gap-2.5 cursor-pointer">
    <input type="checkbox" class="peer sr-only" />
    <div class="relative h-4 w-4 rounded border border-gray-300 bg-white shadow-sm transition-all peer-checked:border-purple-600 peer-checked:bg-purple-600 peer-focus:ring-2 peer-focus:ring-purple-500/20 group-hover:border-gray-400">
      <svg class="absolute inset-0 h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Automated workflows</span>
  </label>
  
  <label class="group flex items-center gap-2.5 cursor-pointer">
    <input type="checkbox" class="peer sr-only" />
    <div class="relative h-4 w-4 rounded border border-gray-300 bg-white shadow-sm transition-all peer-checked:border-emerald-600 peer-checked:bg-emerald-600 peer-focus:ring-2 peer-focus:ring-emerald-500/20 group-hover:border-gray-400">
      <svg class="absolute inset-0 h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Data encryption</span>
  </label>
  
  <label class="flex items-center gap-2.5 cursor-not-allowed opacity-50">
    <input type="checkbox" class="peer sr-only" disabled />
    <div class="relative h-4 w-4 rounded border border-gray-300 bg-gray-50 shadow-sm">
      <svg class="absolute inset-0 h-4 w-4 text-gray-400 opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-500">Enterprise features (Contact sales)</span>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Premium Checkboxes"
    description="Elegant checkboxes with subtle animations and professional styling."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="space-y-2">
      <label class="group flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" class="peer sr-only" checked />
        <div class="relative h-4 w-4 rounded border border-gray-300 bg-white shadow-sm transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500/20 group-hover:border-gray-400">
          <svg class="absolute inset-0 h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">AI-powered insights</span>
      </label>
      
      <label class="group flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" class="peer sr-only" />
        <div class="relative h-4 w-4 rounded border border-gray-300 bg-white shadow-sm transition-all peer-checked:border-purple-600 peer-checked:bg-purple-600 peer-focus:ring-2 peer-focus:ring-purple-500/20 group-hover:border-gray-400">
          <svg class="absolute inset-0 h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Automated workflows</span>
      </label>
      
      <label class="group flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" class="peer sr-only" />
        <div class="relative h-4 w-4 rounded border border-gray-300 bg-white shadow-sm transition-all peer-checked:border-emerald-600 peer-checked:bg-emerald-600 peer-focus:ring-2 peer-focus:ring-emerald-500/20 group-hover:border-gray-400">
          <svg class="absolute inset-0 h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Data encryption</span>
      </label>
      
      <label class="flex items-center gap-2.5 cursor-not-allowed opacity-50">
        <input type="checkbox" class="peer sr-only" disabled />
        <div class="relative h-4 w-4 rounded border border-gray-300 bg-gray-50 shadow-sm">
          <svg class="absolute inset-0 h-4 w-4 text-gray-400 opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <span class="text-sm font-medium text-gray-500">Enterprise features (Contact sales)</span>
      </label>
    </div>
  </PreviewWrapper>
</template>
