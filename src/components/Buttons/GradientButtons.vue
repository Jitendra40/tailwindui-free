<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap items-center gap-3">
  <button class="cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105 active:scale-95">
    AI Generate
  </button>
  <button class="cursor-pointer rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 active:scale-95">
    Magic Tool
  </button>
  <button class="cursor-pointer rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/50 transition-all hover:shadow-xl hover:shadow-emerald-500/60 hover:scale-105 active:scale-95">
    Start Analysis
  </button>
  <button class="cursor-pointer rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-500/60 hover:scale-105 active:scale-95">
    Deploy Now
  </button>
  <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/60 hover:scale-105 active:scale-95">
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
    </svg>
    Export Data
  </button>
  <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:shadow-xl hover:shadow-violet-500/60 hover:scale-105 active:scale-95">
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>
    Import Files
  </button>
  <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/50 transition-all hover:shadow-xl hover:shadow-green-500/60 hover:scale-105 active:scale-95">
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
    </svg>
    Create New
  </button>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Gradient Buttons"
    description="Modern gradient buttons with glow effects and hover scaling for AI tools and dashboards."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="flex flex-wrap items-center gap-3">
      <button class="cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105 active:scale-95">
        AI Generate
      </button>
      <button class="cursor-pointer rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 active:scale-95">
        Magic Tool
      </button>
      <button class="cursor-pointer rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/50 transition-all hover:shadow-xl hover:shadow-emerald-500/60 hover:scale-105 active:scale-95">
        Start Analysis
      </button>
      <button class="cursor-pointer rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-500/60 hover:scale-105 active:scale-95">
        Deploy Now
      </button>
      <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/60 hover:scale-105 active:scale-95">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
        </svg>
        Export Data
      </button>
      <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:shadow-xl hover:shadow-violet-500/60 hover:scale-105 active:scale-95">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
        Import Files
      </button>
      <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/50 transition-all hover:shadow-xl hover:shadow-green-500/60 hover:scale-105 active:scale-95">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
        </svg>
        Create New
      </button>
    </div>
  </PreviewWrapper>
</template>
