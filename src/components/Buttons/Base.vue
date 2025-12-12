<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
  <div class="flex flex-wrap items-center gap-4">
    <button class="cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 hover:shadow-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Primary</button>
    <button class="cursor-pointer rounded-xl bg-white border border-input px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm shadow-black/5 hover:bg-gray-50 hover:text-accent-foreground hover:border-gray-300 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Secondary</button>
    <button class="cursor-pointer rounded-xl px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-black/5 hover:text-foreground transition-all active:scale-95">Ghost</button>
    <button class="cursor-pointer rounded-xl bg-destructive px-5 py-2.5 text-sm font-semibold text-destructive-foreground shadow-sm shadow-red-500/20 hover:bg-destructive/90 hover:shadow-md hover:shadow-red-500/30 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Danger</button>
    
    <div class="h-8 w-px bg-border mx-2"></div>

    <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-500/30 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
      </svg>
      Export
    </button>
    
    <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-white border border-input px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm shadow-black/5 hover:bg-gray-50 hover:text-accent-foreground hover:border-gray-300 transition-all active:scale-95">
      <svg class="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
      </svg>
      Import
    </button>
    
    <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 hover:shadow-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>
      </svg>
      Create
    </button>
  </div>`
</script>

<template>
  <PreviewWrapper
    title="Buttons"
    description="Refined button styles with smooth interactions, focus rings, and proper states."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="flex flex-wrap items-center gap-4">
      <button class="cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 hover:shadow-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Primary</button>
      <button class="cursor-pointer rounded-xl bg-white border border-input px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm shadow-black/5 hover:bg-gray-50 hover:text-accent-foreground hover:border-gray-300 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Secondary</button>
      <button class="cursor-pointer rounded-xl px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-black/5 hover:text-foreground transition-all active:scale-95">Ghost</button>
      <button class="cursor-pointer rounded-xl bg-destructive px-5 py-2.5 text-sm font-semibold text-destructive-foreground shadow-sm shadow-red-500/20 hover:bg-destructive/90 hover:shadow-md hover:shadow-red-500/30 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Danger</button>
      
      <div class="h-8 w-px bg-border mx-2"></div>

      <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-500/30 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
        </svg>
        Export
      </button>
      
      <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-white border border-input px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm shadow-black/5 hover:bg-gray-50 hover:text-accent-foreground hover:border-gray-300 transition-all active:scale-95">
        <svg class="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
        Import
      </button>
      
      <button class="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 hover:shadow-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>
        </svg>
        Create
      </button>
    </div>
  </PreviewWrapper>
</template>
