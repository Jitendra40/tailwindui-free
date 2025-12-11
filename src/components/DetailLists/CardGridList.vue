<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
    <div class="flex items-center justify-between mb-3">
      <div class="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
      </div>
      <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
    </div>
    <h3 class="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Frontend App</h3>
    <p class="text-xs text-gray-500 mt-1 line-clamp-2">React based frontend application hosted on Vercel with automatic deployments.</p>
    <div class="mt-4 flex items-center gap-2 pt-3 border-t border-gray-100">
      <div class="flex -space-x-1.5">
         <div class="h-5 w-5 rounded-full bg-gray-200 border-2 border-white"></div>
         <div class="h-5 w-5 rounded-full bg-gray-300 border-2 border-white"></div>
      </div>
      <span class="text-xs text-gray-400">+3 contributors</span>
    </div>
  </div>

  <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
    <div class="flex items-center justify-between mb-3">
      <div class="h-8 w-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
      </div>
      <span class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Paused</span>
    </div>
    <h3 class="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Worker Queue</h3>
    <p class="text-xs text-gray-500 mt-1 line-clamp-2">Background job processing for image resizing and email notifications.</p>
    <div class="mt-4 flex items-center gap-2 pt-3 border-t border-gray-100">
       <span class="text-[10px] text-gray-400 font-mono">Last run: 2 hours ago</span>
    </div>
  </div>
  
  <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
    <div class="flex items-center justify-between mb-3">
      <div class="h-8 w-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
       <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
      </div>
      <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
    </div>
    <h3 class="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Primary DB</h3>
    <p class="text-xs text-gray-500 mt-1 line-clamp-2">Managed PostgreSQL instance with daily backups and point-in-time recovery.</p>
    <div class="mt-4 flex items-center gap-2 pt-3 border-t border-gray-100">
       <span class="text-[10px] text-gray-400 font-mono">v14.5 • 25GB</span>
    </div>
  </div>
  
  <div class="border border-dashed border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all min-h-[140px]">
    <div class="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-2 group-hover:bg-white group-hover:shadow-sm">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
    </div>
    <span class="text-sm font-medium text-gray-900">Add Service</span>
    <span class="text-xs text-gray-500 mt-1">Deploy a new container</span>
  </div>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Card Grid List"
    description="Responsive card grid for displaying resources."
    :html-block="htmlBlock"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
        <div class="flex items-center justify-between mb-3">
          <div class="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
          <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
        </div>
        <h3 class="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Frontend App</h3>
        <p class="text-xs text-gray-500 mt-1 line-clamp-2">React based frontend application hosted on Vercel with automatic deployments.</p>
        <div class="mt-4 flex items-center gap-2 pt-3 border-t border-gray-100">
          <div class="flex -space-x-1.5">
             <div class="h-5 w-5 rounded-full bg-gray-200 border-2 border-white"></div>
             <div class="h-5 w-5 rounded-full bg-gray-300 border-2 border-white"></div>
          </div>
          <span class="text-xs text-gray-400">+3 contributors</span>
        </div>
      </div>

      <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
        <div class="flex items-center justify-between mb-3">
          <div class="h-8 w-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
          </div>
          <span class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Paused</span>
        </div>
        <h3 class="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Worker Queue</h3>
        <p class="text-xs text-gray-500 mt-1 line-clamp-2">Background job processing for image resizing and email notifications.</p>
        <div class="mt-4 flex items-center gap-2 pt-3 border-t border-gray-100">
           <span class="text-[10px] text-gray-400 font-mono">Last run: 2 hours ago</span>
        </div>
      </div>
      
      <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
        <div class="flex items-center justify-between mb-3">
          <div class="h-8 w-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
           <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          </div>
          <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
        </div>
        <h3 class="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Primary DB</h3>
        <p class="text-xs text-gray-500 mt-1 line-clamp-2">Managed PostgreSQL instance with daily backups and point-in-time recovery.</p>
        <div class="mt-4 flex items-center gap-2 pt-3 border-t border-gray-100">
           <span class="text-[10px] text-gray-400 font-mono">v14.5 • 25GB</span>
        </div>
      </div>
      
      <div class="border border-dashed border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all min-h-[140px]">
        <div class="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-2 group-hover:bg-white group-hover:shadow-sm">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
        </div>
        <span class="text-sm font-medium text-gray-900">Add Service</span>
        <span class="text-xs text-gray-500 mt-1">Deploy a new container</span>
      </div>
    </div>
  </PreviewWrapper>
</template>
