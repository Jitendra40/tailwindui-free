<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="group relative flex w-64 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div class="relative">
    <img src="https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=900&q=80" alt="Leather wallet" class="h-52 w-full object-cover transition duration-500 group-hover:scale-105">
    <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
    <span class="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-gray-900 shadow">Handmade</span>
    <div class="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-gray-900 shadow">
      <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
      <span>Ships today</span>
    </div>
  </div>
  <div class="space-y-2 p-4">
    <div class="flex items-start justify-between gap-3">
      <div>
        <p class="text-[11px] font-medium uppercase tracking-wide text-gray-500">Carry</p>
        <h3 class="text-sm font-semibold text-gray-900">Koboko Wallet</h3>
        <p class="text-sm text-gray-500">Full-grain leather · RFID safe</p>
      </div>
      <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$68</span>
    </div>
    <div class="flex items-center justify-between text-xs text-gray-500">
      <div class="flex items-center gap-2">
        <div class="flex items-center -space-x-1.5">
          <span class="h-6 w-6 rounded-full border border-white bg-[#0f172a]"></span>
          <span class="h-6 w-6 rounded-full border border-white bg-[#d6d3d1]"></span>
          <span class="h-6 w-6 rounded-full border border-white bg-[#f5f5f4]"></span>
        </div>
        <span>3 colors</span>
      </div>
      <span class="font-semibold text-amber-600">4.7 · 320</span>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Compact Grid Card" description="Small grid-friendly tile." :html-block="htmlBlock">
    <div class="flex justify-center">
      <div class="group relative flex w-64 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=900&q=80" alt="Leather wallet" class="h-52 w-full object-cover transition duration-500 group-hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
          <span class="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-gray-900 shadow">Handmade</span>
          <div class="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-gray-900 shadow">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>Ships today</span>
          </div>
        </div>
        <div class="space-y-2 p-4">
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="text-[11px] font-medium uppercase tracking-wide text-gray-500">Carry</p>
              <h3 class="text-sm font-semibold text-gray-900">Koboko Wallet</h3>
              <p class="text-sm text-gray-500">Full-grain leather · RFID safe</p>
            </div>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$68</span>
          </div>
          <div class="flex items-center justify-between text-xs text-gray-500">
            <div class="flex items-center gap-2">
              <div class="flex items-center -space-x-1.5">
                <span class="h-6 w-6 rounded-full border border-white bg-[#0f172a]"></span>
                <span class="h-6 w-6 rounded-full border border-white bg-[#d6d3d1]"></span>
                <span class="h-6 w-6 rounded-full border border-white bg-[#f5f5f4]"></span>
              </div>
              <span>3 colors</span>
            </div>
            <span class="font-semibold text-amber-600">4.7 · 320</span>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
