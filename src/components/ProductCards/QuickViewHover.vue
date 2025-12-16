<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="group relative flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div class="relative">
    <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80" alt="Walnut desk set" class="h-64 w-full object-cover transition duration-500 group-hover:scale-105">
    <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>
    <div class="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur">
      <span>Ships in 48h</span>
      <span class="text-gray-400">•</span>
      <span>Hand finished</span>
    </div>
    <div class="absolute inset-0 flex items-end justify-center pb-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      <button class="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-white">
        <span>Quick view</span>
      </button>
    </div>
  </div>
  <div class="space-y-2 p-4">
    <div class="flex items-start justify-between gap-3">
      <div>
        <h3 class="text-sm font-semibold text-gray-900">Focus Desk Set</h3>
        <p class="text-sm text-gray-500">Solid walnut · Brass accents</p>
      </div>
      <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$350</span>
    </div>
    <div class="flex items-center gap-2 text-xs text-gray-500">
      <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
      <span>In stock</span>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Quick View Hover" description="Shows button on hover." :html-block="htmlBlock">
    <div class="flex justify-center">
      <div class="group relative flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80" alt="Walnut desk set" class="h-64 w-full object-cover transition duration-500 group-hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>
          <div class="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur">
            <span>Ships in 48h</span>
            <span class="text-gray-400">•</span>
            <span>Hand finished</span>
          </div>
          <div class="absolute inset-0 flex items-end justify-center pb-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <button class="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-white">
              <span>Quick view</span>
            </button>
          </div>
        </div>
        <div class="space-y-2 p-4">
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="text-sm font-semibold text-gray-900">Focus Desk Set</h3>
              <p class="text-sm text-gray-500">Solid walnut · Brass accents</p>
            </div>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$350</span>
          </div>
          <div class="flex items-center gap-2 text-xs text-gray-500">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>In stock</span>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
