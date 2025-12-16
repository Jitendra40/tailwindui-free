<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative w-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8">
  <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
  
  <div class="relative flex flex-wrap items-center gap-4">
    <!-- Glass Light -->
    <span class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md shadow-lg transition-all hover:bg-white/20">
      Glass Light
    </span>

    <!-- Glass Dark -->
    <span class="inline-flex items-center rounded-full border border-black/10 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-md shadow-lg transition-all hover:bg-black/40">
      Glass Dark
    </span>
    
    <!-- Glass Accent (Blue) -->
    <span class="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-100 backdrop-blur-md shadow-glass transition-all hover:bg-blue-500/30">
      <span class="mr-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]"></span>
      Blue Glass
    </span>

    <!-- Glass Accent (Purple) -->
    <span class="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-100 backdrop-blur-md shadow-glass transition-all hover:bg-purple-500/30">
      <span class="mr-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.7)]"></span>
      Pro Feature
    </span>

    <!-- Glass Accent (Emerald) -->
    <span class="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-100 backdrop-blur-md shadow-glass transition-all hover:bg-emerald-500/30">
      <svg class="mr-1.5 h-3 w-3 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      Confirmed
    </span>

    <!-- Glass Prism -->
    <span class="inline-flex items-center rounded-full border border-white/30 bg-gradient-to-r from-white/10 to-white/5 px-3 py-1 text-xs font-medium text-white backdrop-blur-xl shadow-xl transition-all hover:scale-105 hover:border-white/50">
      Prism Effect
    </span>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper 
    title="Glassmorphism Badges" 
    description="Modern translucent badges with background blur filters, perfect for dark mode or image overlays." 
    :html-block="htmlBlock"
    default-viewport="full"
  >
  </PreviewWrapper>
</template>
