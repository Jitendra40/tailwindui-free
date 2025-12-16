<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-4">
  <label class="group flex items-start gap-3 cursor-pointer">
    <div class="relative flex items-center">
      <input type="checkbox" class="peer sr-only" checked />
      <div class="h-5 w-5 rounded border border-gray-300 bg-white shadow-sm transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:[&_svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/30 peer-focus-visible:ring-offset-2 group-hover:border-blue-400">
        <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 transition-opacity" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Enable real-time sync</span>
      <span class="text-xs text-gray-500">Changes update instantly across all devices.</span>
    </div>
  </label>

  <label class="group flex items-start gap-3 cursor-pointer">
    <div class="relative flex items-center">
      <input type="checkbox" class="peer sr-only" />
      <div class="h-5 w-5 rounded border border-gray-300 bg-white shadow-sm transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:[&_svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/30 peer-focus-visible:ring-offset-2 group-hover:border-blue-400">
        <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 transition-opacity" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Auto-archive old data</span>
      <span class="text-xs text-gray-500">Move data older than 30 days to archives.</span>
    </div>
  </label>

  <label class="group flex items-start gap-3 cursor-not-allowed opacity-60">
    <div class="relative flex items-center">
      <input type="checkbox" class="peer sr-only" disabled />
      <div class="h-5 w-5 rounded border border-gray-200 bg-gray-50 shadow-sm">
      </div>
    </div>
    <div class="flex flex-col">
      <span class="text-sm font-medium text-gray-500">Advanced analytics (Pro)</span>
      <span class="text-xs text-gray-400">Upgrade your plan to unlock.</span>
    </div>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Standard Checkboxes"
    description="Clean, custom-styled checkboxes with descriptions and hover states."
    :html-block="htmlBlock"
  >

  </PreviewWrapper>
</template>
