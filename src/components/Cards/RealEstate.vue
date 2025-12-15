<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="group relative max-w-sm overflow-hidden rounded-3xl bg-white p-2 shadow-lg ring-1 ring-gray-100 transition-all hover:shadow-2xl">
  <div class="relative aspect-[4/3] overflow-hidden rounded-2xl">
    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Modern Villa" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60"></div>
    <div class="absolute bottom-4 left-4 text-white">
      <p class="text-sm font-medium text-gray-200">Beverly Hills, CA</p>
      <h3 class="text-xl font-bold font-display">Modern Sanctuary</h3>
    </div>
    <div class="absolute top-4 right-4">
      <span class="inline-flex items-center rounded-full bg-white/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/20">
        $4,500,000
      </span>
    </div>
    <button class="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-red-500 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
        <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.16-1.1c-1.059-1.06-3.85-4.133-3.85-6.327 0-2.417 1.954-4.5 4.381-4.5 1.776 0 2.871.936 3.4 1.57.53-.635 1.625-1.571 3.401-1.571 2.427 0 4.381 2.083 4.381 4.5 0 2.194-2.791 5.267-3.85 6.326a20.771 20.771 0 01-1.16 1.1l-.019.01-.005.003h-.002a.739.739 0 01-.69.51.739.739 0 01-.69-.51z" />
      </svg>
    </button>
  </div>
  
  <div class="px-2 py-4">
    <div class="flex items-center justify-between px-2">
       <div class="flex items-center gap-4 text-gray-600">
         <div class="flex items-center gap-1.5 lead">
           <svg class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
           <span class="text-sm font-semibold text-gray-900">5 <span class="text-gray-400 font-normal">Beds</span></span>
         </div>
          <div class="flex items-center gap-1.5">
           <svg class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
           <span class="text-sm font-semibold text-gray-900">4 <span class="text-gray-400 font-normal">Baths</span></span>
         </div>
          <div class="flex items-center gap-1.5">
           <svg class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
           <span class="text-sm font-semibold text-gray-900">3,200 <span class="text-gray-400 font-normal">sqft</span></span>
         </div>
       </div>
    </div>
    
    <div class="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 px-2">
      <div class="flex items-center gap-3">
        <img class="h-8 w-8 rounded-full object-cover ring-2 ring-gray-100" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Agent">
        <div class="text-xs">
           <p class="font-bold text-gray-900">David Wilson</p>
           <p class="text-gray-400">Premier Agent</p>
        </div>
      </div>
      <button class="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg">
        Details
      </button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Real Estate Card"
    description="Premium property listing card with carousel-style image and glassmorphism elements."
    :html-block="htmlBlock"
  />
</template>
