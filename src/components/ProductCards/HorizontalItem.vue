<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex w-full max-w-md items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
  <div class="relative h-24 w-24 overflow-hidden rounded-xl">
    <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80" alt="Weekender bag" class="h-full w-full object-cover">
    <span class="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-gray-900 shadow">Carry</span>
  </div>
  <div class="flex flex-1 flex-col gap-2">
    <div class="flex items-start justify-between gap-3">
      <div>
        <h3 class="text-sm font-semibold text-gray-900">Weekender Duffel</h3>
        <p class="text-sm text-gray-500">Recycled nylon · 28L</p>
      </div>
      <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$98</span>
    </div>
    <div class="flex items-center justify-between text-sm text-gray-500">
      <div class="flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
        <span>In stock</span>
        <span class="text-gray-400">•</span>
        <span>Qty 1</span>
      </div>
      <button class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">Move to bag</button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Horizontal Item" description="Cart item style." :html-block="htmlBlock">
    <div class="flex justify-center">
      <div class="flex w-full max-w-md items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div class="relative h-24 w-24 overflow-hidden rounded-xl">
          <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80" alt="Weekender bag" class="h-full w-full object-cover">
          <span class="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-gray-900 shadow">Carry</span>
        </div>
        <div class="flex flex-1 flex-col gap-2">
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="text-sm font-semibold text-gray-900">Weekender Duffel</h3>
              <p class="text-sm text-gray-500">Recycled nylon · 28L</p>
            </div>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$98</span>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>In stock</span>
              <span class="text-gray-400">•</span>
              <span>Qty 1</span>
            </div>
            <button class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">Move to bag</button>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
