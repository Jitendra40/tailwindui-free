<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-2">
  <label class="group flex items-center gap-2.5 cursor-pointer">
    <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all" checked />
    <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Enable real-time sync</span>
  </label>
  <label class="group flex items-center gap-2.5 cursor-pointer">
    <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all" />
    <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Auto-archive old data</span>
  </label>
  <label class="group flex items-center gap-2.5 cursor-pointer">
    <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all" />
    <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Send weekly reports</span>
  </label>
  <label class="group flex items-center gap-2.5 cursor-not-allowed opacity-50">
    <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-gray-400" disabled />
    <span class="text-sm font-medium text-gray-500">Advanced analytics (Pro)</span>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Standard Checkboxes"
    description="Compact, professional checkboxes for modern admin interfaces."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="space-y-2">
      <label class="group flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all" checked />
        <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Enable real-time sync</span>
      </label>
      <label class="group flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all" />
        <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Auto-archive old data</span>
      </label>
      <label class="group flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all" />
        <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Send weekly reports</span>
      </label>
      <label class="group flex items-center gap-2.5 cursor-not-allowed opacity-50">
        <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-gray-400" disabled />
        <span class="text-sm font-medium text-gray-500">Advanced analytics (Pro)</span>
      </label>
    </div>
  </PreviewWrapper>
</template>
