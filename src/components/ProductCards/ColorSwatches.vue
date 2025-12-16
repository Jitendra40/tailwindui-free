<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="group relative flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div class="relative">
    <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80" alt="Minimal sneakers" class="h-60 w-full object-cover transition duration-500 group-hover:scale-105">
    <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
    <span class="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-gray-900 shadow">Edition 03</span>
  </div>
  <div class="space-y-3 p-4">
    <div class="flex items-start justify-between gap-3">
      <div>
        <p class="text-xs font-medium uppercase tracking-wide text-gray-500">Everyday</p>
        <h3 class="text-sm font-semibold text-gray-900">Orbit Sneaker</h3>
        <p class="text-sm text-gray-500">Breathable knit upper · EVA sole</p>
      </div>
      <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$118</span>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 text-xs text-gray-500">
        <span>Colors</span>
        <div class="flex items-center gap-2">
          <span class="relative inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-[#e5e7eb] ring-2 ring-gray-900"></span>
          <span class="inline-flex h-6 w-6 rounded-full border border-gray-200 bg-[#d6d3d1]"></span>
          <span class="inline-flex h-6 w-6 rounded-full border border-gray-200 bg-[#0f172a]"></span>
          <span class="inline-flex h-6 w-6 rounded-full border border-gray-200 bg-[#d1d5db]"></span>
        </div>
      </div>
      <button class="text-xs font-semibold text-indigo-600 hover:text-indigo-500">View details</button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Product with Color Swatches" description="Card including color selection." :html-block="htmlBlock">
    <div class="flex justify-center">
      <div class="group relative flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80" alt="Minimal sneakers" class="h-60 w-full object-cover transition duration-500 group-hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
          <span class="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-gray-900 shadow">Edition 03</span>
        </div>
        <div class="space-y-3 p-4">
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="text-xs font-medium uppercase tracking-wide text-gray-500">Everyday</p>
              <h3 class="text-sm font-semibold text-gray-900">Orbit Sneaker</h3>
              <p class="text-sm text-gray-500">Breathable knit upper · EVA sole</p>
            </div>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$118</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-xs text-gray-500">
              <span>Colors</span>
              <div class="flex items-center gap-2">
                <span class="relative inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-[#e5e7eb] ring-2 ring-gray-900"></span>
                <span class="inline-flex h-6 w-6 rounded-full border border-gray-200 bg-[#d6d3d1]"></span>
                <span class="inline-flex h-6 w-6 rounded-full border border-gray-200 bg-[#0f172a]"></span>
                <span class="inline-flex h-6 w-6 rounded-full border border-gray-200 bg-[#d1d5db]"></span>
              </div>
            </div>
            <button class="text-xs font-semibold text-indigo-600 hover:text-indigo-500">View details</button>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
