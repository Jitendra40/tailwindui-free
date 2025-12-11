<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white rounded-xl border border-gray-200 shadow-sm">
  <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
    <h3 class="text-sm font-semibold text-gray-900">System Status</h3>
    <a href="#" class="text-xs font-medium text-gray-500 hover:text-gray-900">View history &rarr;</a>
  </div>
  <div class="divide-y divide-gray-100">
    <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/30 transition-colors">
      <div class="flex items-center gap-3">
        <div class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </div>
        <p class="text-sm font-medium text-gray-900">API Gateway</p>
      </div>
      <p class="text-sm text-emerald-600 font-medium bg-emerald-50 px-2.5 py-0.5 rounded-full">Operational</p>
    </div>

    <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/30 transition-colors">
      <div class="flex items-center gap-3">
        <div class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </div>
        <p class="text-sm font-medium text-gray-900">Authentication Service</p>
      </div>
       <p class="text-sm text-emerald-600 font-medium bg-emerald-50 px-2.5 py-0.5 rounded-full">Operational</p>
    </div>

    <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/30 transition-colors">
      <div class="flex items-center gap-3">
        <div class="relative flex h-2.5 w-2.5">
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        </div>
        <p class="text-sm font-medium text-gray-900">Image Processing</p>
      </div>
       <p class="text-sm text-amber-600 font-medium bg-amber-50 px-2.5 py-0.5 rounded-full">Degraded Performance</p>
    </div>

    <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/30 transition-colors">
       <div class="flex items-center gap-3">
        <div class="relative flex h-2.5 w-2.5">
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
        </div>
        <p class="text-sm font-medium text-gray-900">Search Indexer</p>
      </div>
       <p class="text-sm text-red-600 font-medium bg-red-50 px-2.5 py-0.5 rounded-full">Downtime</p>
    </div>
  </div>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Status List"
    description="System status indicators with pulsing animations."
    :html-block="htmlBlock"
  >
    <div class="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 class="text-sm font-semibold text-gray-900">System Status</h3>
        <a href="#" class="text-xs font-medium text-gray-500 hover:text-gray-900">View history &rarr;</a>
      </div>
      <div class="divide-y divide-gray-100">
        <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/30 transition-colors">
          <div class="flex items-center gap-3">
            <div class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <p class="text-sm font-medium text-gray-900">API Gateway</p>
          </div>
          <p class="text-sm text-emerald-600 font-medium bg-emerald-50 px-2.5 py-0.5 rounded-full">Operational</p>
        </div>

        <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/30 transition-colors">
          <div class="flex items-center gap-3">
            <div class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <p class="text-sm font-medium text-gray-900">Authentication Service</p>
          </div>
           <p class="text-sm text-emerald-600 font-medium bg-emerald-50 px-2.5 py-0.5 rounded-full">Operational</p>
        </div>

        <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/30 transition-colors">
          <div class="flex items-center gap-3">
            <div class="relative flex h-2.5 w-2.5">
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </div>
            <p class="text-sm font-medium text-gray-900">Image Processing</p>
          </div>
           <p class="text-sm text-amber-600 font-medium bg-amber-50 px-2.5 py-0.5 rounded-full">Degraded Performance</p>
        </div>

        <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/30 transition-colors">
           <div class="flex items-center gap-3">
            <div class="relative flex h-2.5 w-2.5">
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </div>
            <p class="text-sm font-medium text-gray-900">Search Indexer</p>
          </div>
           <p class="text-sm text-red-600 font-medium bg-red-50 px-2.5 py-0.5 rounded-full">Downtime</p>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
