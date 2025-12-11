<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-2.5">
  <label class="group inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" checked />
    <div class="relative w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500/20 transition-all shadow-sm">
      <div class="absolute top-0.5 left-0.5 bg-white h-4 w-4 rounded-full shadow transition-transform peer-checked:translate-x-4"></div>
    </div>
    <span class="ml-2.5 text-sm text-gray-700 group-hover:text-gray-900">Enable notifications</span>
  </label>
  
  <label class="group inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" />
    <div class="relative w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-emerald-600 peer-focus:ring-2 peer-focus:ring-emerald-500/20 transition-all shadow-sm">
      <div class="absolute top-0.5 left-0.5 bg-white h-4 w-4 rounded-full shadow transition-transform peer-checked:translate-x-4"></div>
    </div>
    <span class="ml-2.5 text-sm text-gray-700 group-hover:text-gray-900">Auto-sync data</span>
  </label>
  
  <label class="group inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" />
    <div class="relative w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-purple-600 peer-focus:ring-2 peer-focus:ring-purple-500/20 transition-all shadow-sm">
      <div class="absolute top-0.5 left-0.5 bg-white h-4 w-4 rounded-full shadow transition-transform peer-checked:translate-x-4"></div>
    </div>
    <span class="ml-2.5 text-sm text-gray-700 group-hover:text-gray-900">Dark mode</span>
  </label>
  
  <label class="inline-flex items-center cursor-not-allowed opacity-50">
    <input type="checkbox" class="sr-only peer" disabled />
    <div class="relative w-9 h-5 bg-gray-200 rounded-full shadow-sm">
      <div class="absolute top-0.5 left-0.5 bg-white h-4 w-4 rounded-full shadow"></div>
    </div>
    <span class="ml-2.5 text-sm text-gray-400">Beta features (Pro)</span>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Toggle Switches"
    description="iOS-style toggle switches for settings and preferences."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="flex flex-col gap-3">
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" checked />
        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-200 transition-colors">
          <div class="absolute top-0.5 left-0.5 bg-white h-5 w-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
        </div>
        <span class="ml-3 text-sm font-medium text-gray-700">Email notifications</span>
      </label>
      
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" />
        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-emerald-600 peer-focus:ring-4 peer-focus:ring-emerald-200 transition-colors">
          <div class="absolute top-0.5 left-0.5 bg-white h-5 w-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
        </div>
        <span class="ml-3 text-sm font-medium text-gray-700">Push notifications</span>
      </label>
      
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" />
        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-purple-600 peer-focus:ring-4 peer-focus:ring-purple-200 transition-colors">
          <div class="absolute top-0.5 left-0.5 bg-white h-5 w-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
        </div>
        <span class="ml-3 text-sm font-medium text-gray-700">SMS notifications</span>
      </label>
      
      <label class="inline-flex items-center cursor-not-allowed opacity-50">
        <input type="checkbox" class="sr-only peer" disabled />
        <div class="relative w-11 h-6 bg-gray-200 rounded-full">
          <div class="absolute top-0.5 left-0.5 bg-white h-5 w-5 rounded-full"></div>
        </div>
        <span class="ml-3 text-sm font-medium text-gray-400">In-app notifications (disabled)</span>
      </label>
    </div>
  </PreviewWrapper>
</template>
