<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
  <!-- Card 1: Users -->
  <div class="overflow-hidden rounded-lg bg-white shadow ring-1 ring-gray-900/5 hover:ring-gray-900/10 transition-shadow">
    <div class="p-4">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
             <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </span>
        </div>
        <div class="ml-4 w-0 flex-1">
          <dl>
            <dt class="truncate text-xs font-medium text-gray-500 uppercase">Total Candidates</dt>
            <dd>
              <div class="text-lg font-bold text-gray-900">2,451</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="bg-gray-50/50 px-4 py-3 border-t border-gray-100">
      <div class="text-xs">
        <a href="javascript:void(0)" class="font-medium text-indigo-600 hover:text-indigo-500 flex items-center gap-1 group">
          View all candidates
          <span class="inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Card 2: Revenue -->
  <div class="overflow-hidden rounded-lg bg-white shadow ring-1 ring-gray-900/5 hover:ring-gray-900/10 transition-shadow">
    <div class="p-4">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
             <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </span>
        </div>
        <div class="ml-4 w-0 flex-1">
          <dl>
            <dt class="truncate text-xs font-medium text-gray-500 uppercase">Avg. Salary</dt>
            <dd>
              <div class="text-lg font-bold text-gray-900">$95k</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="bg-gray-50/50 px-4 py-3 border-t border-gray-100">
      <div class="text-xs">
        <a href="javascript:void(0)" class="font-medium text-emerald-600 hover:text-emerald-500 flex items-center gap-1 group">
          View salary report
          <span class="inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Card 3: Interviews -->
  <div class="overflow-hidden rounded-lg bg-white shadow ring-1 ring-gray-900/5 hover:ring-gray-900/10 transition-shadow">
    <div class="p-4">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
             <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
          </span>
        </div>
        <div class="ml-4 w-0 flex-1">
          <dl>
            <dt class="truncate text-xs font-medium text-gray-500 uppercase">Interviews Today</dt>
            <dd>
              <div class="text-lg font-bold text-gray-900">12</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="bg-gray-50/50 px-4 py-3 border-t border-gray-100">
      <div class="text-xs">
        <a href="javascript:void(0)" class="font-medium text-amber-600 hover:text-amber-500 flex items-center gap-1 group">
          Open calendar
          <span class="inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper 
    title="Compact Stats with Action" 
    description="Stats cards with a primary icon and formatted footer action." 
    :html-block="htmlBlock" 
    default-viewport="full"
  />
</template>
