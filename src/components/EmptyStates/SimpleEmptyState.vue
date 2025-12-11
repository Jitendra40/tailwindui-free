<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="text-center p-8 border-2 border-dashed border-gray-200 rounded-xl hover:border-indigo-300 transition-colors">
  <svg class="mx-auto h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" x2="12" y1="22.08" y2="12"/>
  </svg>
  <h3 class="mt-2 text-sm font-semibold text-gray-900">No content</h3>
  <p class="mt-1 text-sm text-gray-500">Get started by creating a new item.</p>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple" description="Icon, title, and description." :html-block="htmlBlock">
    <div class="text-center p-8 border-2 border-dashed border-gray-200 rounded-xl hover:border-indigo-300 transition-colors">
      <svg class="mx-auto h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" x2="12" y1="22.08" y2="12"/>
    </svg>
      <h3 class="mt-2 text-sm font-semibold text-gray-900">No content</h3>
      <p class="mt-1 text-sm text-gray-500">Get started by creating a new item.</p>
    </div>
  </PreviewWrapper>
</template>
