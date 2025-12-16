<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="rounded-xl bg-gray-900 py-6 px-6 shadow-2xl ring-1 ring-white/10 sm:py-8 sm:px-8 max-w-3xl">
  <div class="flex items-center justify-between border-b border-white/10 pb-6">
    <div>
       <h3 class="text-base font-semibold text-white">Network Status</h3>
       <p class="mt-1 text-sm text-gray-400">Real-time api latency and throughput.</p>
    </div>
    <div class="flex gap-2">
       <span class="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
          <span class="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-400"></span>
          Operational
       </span>
    </div>
  </div>
  <dl class="mt-6 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10 pb-6">
    <div class="flex flex-col gap-y-1">
      <dt class="text-xs leading-6 text-gray-400 font-medium uppercase tracking-wider">Latency</dt>
      <dd class="order-first text-2xl font-bold tracking-tight text-white">24<span class="text-sm font-medium text-gray-400 ml-1">ms</span></dd>
    </div>
    <div class="flex flex-col gap-y-1">
      <dt class="text-xs leading-6 text-gray-400 font-medium uppercase tracking-wider">Requests</dt>
      <dd class="order-first text-2xl font-bold tracking-tight text-white">1.2<span class="text-sm font-medium text-gray-400 ml-1">M</span></dd>
    </div>
    <div class="flex flex-col gap-y-1">
      <dt class="text-xs leading-6 text-gray-400 font-medium uppercase tracking-wider">Errors</dt>
      <dd class="order-first text-2xl font-bold tracking-tight text-white">0.01<span class="text-sm font-medium text-gray-400 ml-1">%</span></dd>
    </div>
    <div class="flex flex-col gap-y-1">
      <dt class="text-xs leading-6 text-gray-400 font-medium uppercase tracking-wider">Uptime</dt>
      <dd class="order-first text-2xl font-bold tracking-tight text-white">99.9<span class="text-sm font-medium text-gray-400 ml-1">%</span></dd>
    </div>
  </dl>
  <div class="mt-6 flex justify-between items-center"> 
     <span class="text-xs text-gray-500">Data delayed by 5 seconds</span>
     <button type="button" class="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
        Full Analytics
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18l6-6-6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
     </button>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper 
    title="Dark Compact Dashboard" 
    description="A high-density data card in dark mode, suitable for dashboards." 
    :html-block="htmlBlock" 
    default-viewport="full"
  />
</template>
