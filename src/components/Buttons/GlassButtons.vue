<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap items-center gap-3 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8">
  <button class="cursor-pointer rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/30 hover:shadow-lg active:scale-95">
    Glass Effect
  </button>
  <button class="cursor-pointer rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50 active:scale-95">
    Transparent
  </button>
  <button class="cursor-pointer rounded-xl bg-black/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20 transition-all hover:bg-black/30 hover:ring-white/40 active:scale-95">
    Dark Glass
  </button>
  <button class="cursor-pointer rounded-xl bg-gradient-to-r from-white/20 to-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:from-white/30 hover:to-white/20 active:scale-95">
    Gradient Glass
  </button>
  <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-white/25 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/35 hover:shadow-lg active:scale-95">
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
    </svg>
    Export
  </button>
  <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/25 hover:border-white/60 active:scale-95">
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>
    Import
  </button>
  <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-black/25 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/25 transition-all hover:bg-black/35 hover:ring-white/45 active:scale-95">
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
    </svg>
    Create
  </button>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Glass Morphism Buttons"
    description="Modern glassmorphism style buttons with backdrop blur and transparency effects."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="flex flex-wrap items-center gap-3 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8">
      <button class="cursor-pointer rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/30 hover:shadow-lg active:scale-95">
        Glass Effect
      </button>
      <button class="cursor-pointer rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50 active:scale-95">
        Transparent
      </button>
      <button class="cursor-pointer rounded-xl bg-black/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20 transition-all hover:bg-black/30 hover:ring-white/40 active:scale-95">
        Dark Glass
      </button>
      <button class="cursor-pointer rounded-xl bg-gradient-to-r from-white/20 to-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:from-white/30 hover:to-white/20 active:scale-95">
        Gradient Glass
      </button>
      <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-white/25 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/35 hover:shadow-lg active:scale-95">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
        </svg>
        Export
      </button>
      <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/25 hover:border-white/60 active:scale-95">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
        Import
      </button>
      <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-black/25 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/25 transition-all hover:bg-black/35 hover:ring-white/45 active:scale-95">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
        </svg>
        Create
      </button>
    </div>
  </PreviewWrapper>
</template>
