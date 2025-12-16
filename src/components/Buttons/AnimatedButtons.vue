<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap items-center gap-3">
  <button class="cursor-pointer group relative overflow-hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 shadow-sm shadow-blue-500/20">
    <span class="relative z-10">Slide Effect</span>
    <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-700 to-blue-800 transition-transform group-hover:translate-x-0"></div>
  </button>
  
  <button class="cursor-pointer group relative overflow-hidden rounded-xl border-2 border-purple-600 bg-white px-5 py-2.5 text-sm font-semibold text-purple-600 transition-all hover:text-white active:scale-95 shadow-sm shadow-black/5">
    <span class="relative z-10">Fill Up</span>
    <div class="absolute inset-0 translate-y-full bg-purple-600 transition-transform group-hover:translate-y-0"></div>
  </button>
  
  <button class="cursor-pointer group relative rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg active:scale-95 shadow-sm shadow-cyan-500/20">
    <span class="relative z-10 inline-flex items-center gap-2">
      <span>Process</span>
      <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
      </svg>
    </span>
  </button>
  
  <button class="cursor-pointer group relative overflow-hidden rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 active:scale-95 shadow-sm shadow-black/20">
    <span class="relative z-10 inline-flex items-center gap-2">
      <svg class="h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
      <span>Processing</span>
    </span>
  </button>
  
  <button class="cursor-pointer group relative overflow-hidden rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all active:scale-95 shadow-sm shadow-emerald-500/20">
    <span class="relative z-10 inline-flex items-center gap-2">
      <svg class="h-4 w-4 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
      </svg>
      <span>Export</span>
    </span>
    <div class="absolute inset-0 -translate-x-full bg-emerald-700 transition-transform group-hover:translate-x-0"></div>
  </button>
  
  <button class="cursor-pointer group relative overflow-hidden rounded-xl border-2 border-blue-600 bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 transition-all hover:text-white active:scale-95 shadow-sm shadow-black/5">
    <span class="relative z-10 inline-flex items-center gap-2">
      <svg class="h-4 w-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
      </svg>
      <span>Import</span>
    </span>
    <div class="absolute inset-0 translate-y-full bg-blue-600 transition-transform group-hover:translate-y-0"></div>
  </button>
  
  <button class="cursor-pointer group relative overflow-hidden rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-all active:scale-95 shadow-sm shadow-purple-500/20">
    <span class="relative z-10 inline-flex items-center gap-2">
      <svg class="h-4 w-4 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
      </svg>
      <span>Create</span>
    </span>
    <div class="absolute inset-0 scale-0 bg-purple-700 transition-transform group-hover:scale-100"></div>
  </button>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Animated Buttons"
    description="Interactive buttons with slide, fill, arrow, and loading animations for modern interfaces."
    :html-block="htmlBlock"
    default-viewport="full"
  >
  
  </PreviewWrapper>
</template>
