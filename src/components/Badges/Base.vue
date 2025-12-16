<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap items-center gap-4">
  <span class="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10">
    <span class="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
    Default
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/10">
    <span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
    Primary
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 ring-1 ring-inset ring-purple-600/10">
    <span class="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
    Enterprise
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
     <span class="animate-pulse h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
    Operational
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-600/10">
    <span class="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
    Pending
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-600/10">
    <span class="h-1.5 w-1.5 rounded-full bg-rose-600"></span>
    Failed
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300">
    Bordered
  </span>
</div>`
</script>

<template>
  <PreviewWrapper 
    title="Status Badges" 
    description="Rounded pill badges with dot indicators and refined borders." 
    :html-block="htmlBlock"
    default-viewport="full"
  >
  
  </PreviewWrapper>
</template>
