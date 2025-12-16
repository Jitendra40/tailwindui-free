<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap items-center gap-4 rounded-xl bg-gray-100 p-8">
  <button class="cursor-pointer rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
    Neumorphic
  </button>
  
  <button class="cursor-pointer rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[6px_6px_12px_rgba(37,99,235,0.3),-2px_-2px_8px_rgba(147,197,253,0.3)] transition-all hover:shadow-[4px_4px_8px_rgba(37,99,235,0.4),-2px_-2px_6px_rgba(147,197,253,0.4)] active:shadow-[inset_2px_2px_4px_rgba(37,99,235,0.5)]">
    Blue Neu
  </button>
  
  <button class="cursor-pointer rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[6px_6px_12px_rgba(147,51,234,0.3),-2px_-2px_8px_rgba(192,132,252,0.3)] transition-all hover:shadow-[4px_4px_8px_rgba(147,51,234,0.4),-2px_-2px_6px_rgba(192,132,252,0.4)] active:shadow-[inset_2px_2px_4px_rgba(147,51,234,0.5)]">
    Purple Neu
  </button>
  
  <button class="cursor-pointer rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[6px_6px_12px_rgba(5,150,105,0.3),-2px_-2px_8px_rgba(110,231,183,0.3)] transition-all hover:shadow-[4px_4px_8px_rgba(5,150,105,0.4),-2px_-2px_6px_rgba(110,231,183,0.4)] active:shadow-[inset_2px_2px_4px_rgba(5,150,105,0.5)]">
    Green Neu
  </button>
  
  <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[6px_6px_12px_rgba(34,211,238,0.3),-2px_-2px_8px_rgba(165,243,252,0.3)] transition-all hover:shadow-[4px_4px_8px_rgba(34,211,238,0.4),-2px_-2px_6px_rgba(165,243,252,0.4)] active:shadow-[inset_2px_2px_4px_rgba(34,211,238,0.5)]">
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
    </svg>
    Export
  </button>
  
  <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[6px_6px_12px_rgba(139,92,246,0.3),-2px_-2px_8px_rgba(196,181,253,0.3)] transition-all hover:shadow-[4px_4px_8px_rgba(139,92,246,0.4),-2px_-2px_6px_rgba(196,181,253,0.4)] active:shadow-[inset_2px_2px_4px_rgba(139,92,246,0.5)]">
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>
    Import
  </button>
  
  <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-rose-400 to-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[6px_6px_12px_rgba(244,63,94,0.3),-2px_-2px_8px_rgba(253,164,175,0.3)] transition-all hover:shadow-[4px_4px_8px_rgba(244,63,94,0.4),-2px_-2px_6px_rgba(253,164,175,0.4)] active:shadow-[inset_2px_2px_4px_rgba(244,63,94,0.5)]">
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
    </svg>
    Create
  </button>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Neumorphic Buttons"
    description="Soft UI neumorphic buttons with depth and shadow effects for modern admin interfaces."
    :html-block="htmlBlock"
    default-viewport="full"
  >
  
  </PreviewWrapper>
</template>
