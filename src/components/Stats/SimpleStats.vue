<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<dl class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
  <!-- Card 1: Total Subscribers -->
  <div class="relative overflow-hidden rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50 transition-colors">
    <dt class="flex items-center gap-x-2">
      <div class="rounded-md bg-indigo-50 p-2 ring-1 ring-indigo-500/10">
        <svg class="h-4 w-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
      <span class="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Subscribers</span>
    </dt>
    <dd class="mt-3 flex items-baseline gap-x-2">
      <span class="text-2xl font-semibold tracking-tight text-gray-900">71,897</span>
      <span class="text-xs font-medium text-emerald-600 flex items-center">
        <svg class="h-3 w-3 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
        12%
      </span>
    </dd>
  </div>

  <!-- Card 2: Avg. Open Rate -->
  <div class="relative overflow-hidden rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50 transition-colors">
    <dt class="flex items-center gap-x-2">
      <div class="rounded-md bg-purple-50 p-2 ring-1 ring-purple-500/10">
        <svg class="h-4 w-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </div>
      <span class="text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Open Rate</span>
    </dt>
    <dd class="mt-3 flex items-baseline gap-x-2">
      <span class="text-2xl font-semibold tracking-tight text-gray-900">58.16%</span>
      <span class="text-xs font-medium text-emerald-600 flex items-center">
         <svg class="h-3 w-3 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
        2.1%
      </span>
    </dd>
  </div>

  <!-- Card 3: Avg. Click Rate -->
  <div class="relative overflow-hidden rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50 transition-colors">
    <dt class="flex items-center gap-x-2">
      <div class="rounded-md bg-rose-50 p-2 ring-1 ring-rose-500/10">
        <svg class="h-4 w-4 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>
      <span class="text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Click Rate</span>
    </dt>
    <dd class="mt-3 flex items-baseline gap-x-2">
      <span class="text-2xl font-semibold tracking-tight text-gray-900">24.57%</span>
      <span class="text-xs font-medium text-rose-600 flex items-center">
        <svg class="h-3 w-3 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
          <polyline points="17 18 23 18 23 12"></polyline>
        </svg>
        3.2%
      </span>
    </dd>
  </div>
</dl>
`
</script>

<template>
  <PreviewWrapper 
    title="Compact Simple Stats" 
    description="Minimalist cards with icons, values, and trend indicators." 
    :html-block="htmlBlock" 
    default-viewport="full"
  />
</template>
