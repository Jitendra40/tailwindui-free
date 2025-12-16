<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="group relative flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div class="relative">
    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80" alt="Aster Field Watch" class="h-64 w-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>
    <span class="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm">New</span>
  </div>
  <div class="space-y-2 p-4">
    <p class="text-xs font-medium uppercase tracking-wide text-gray-500">Analog · Steel</p>
    <div class="flex items-start justify-between gap-3">
      <div>
        <h3 class="text-sm font-semibold text-gray-900">Aster Field Watch</h3>
        <p class="text-sm text-gray-500">38mm · Sapphire crystal</p>
      </div>
      <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$245</span>
    </div>
    <div class="flex items-center gap-2 text-xs text-amber-600">
      <span class="font-semibold">4.8</span>
      <span class="text-gray-400">•</span>
      <span class="text-gray-500">214 reviews</span>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Product" description="Compact modern card." :html-block="htmlBlock">
    <div class="flex justify-center">
      <div class="group relative flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80" alt="Aster Field Watch" class="h-64 w-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>
          <span class="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm">New</span>
        </div>
        <div class="space-y-2 p-4">
          <p class="text-xs font-medium uppercase tracking-wide text-gray-500">Analog · Steel</p>
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="text-sm font-semibold text-gray-900">Aster Field Watch</h3>
              <p class="text-sm text-gray-500">38mm · Sapphire crystal</p>
            </div>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$245</span>
          </div>
          <div class="flex items-center gap-2 text-xs text-amber-600">
            <span class="font-semibold">4.8</span>
            <span class="text-gray-400">•</span>
            <span class="text-gray-500">214 reviews</span>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
