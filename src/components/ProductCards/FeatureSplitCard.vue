<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="group relative flex w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div class="relative w-1/2 min-w-[240px]">
    <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80" alt="Modern lounge chair" class="h-full w-full object-cover transition duration-500 group-hover:scale-105">
    <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>
    <span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow">Studio drop</span>
  </div>
  <div class="flex flex-1 flex-col justify-between gap-4 p-6">
    <div class="space-y-2">
      <p class="text-xs font-medium uppercase tracking-wide text-gray-500">Furniture</p>
      <div class="flex items-start justify-between gap-3">
        <div class="space-y-1">
          <h3 class="text-lg font-semibold text-gray-900">Arc Lounge Chair</h3>
          <p class="text-sm text-gray-600">Ash frame, boucle upholstery, hand-finished edges.</p>
        </div>
        <span class="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-900">$920</span>
      </div>
    </div>
    <div class="grid gap-3 sm:grid-cols-2">
      <div class="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
        <div class="flex items-center justify-between">
          <span>Lead time</span>
          <span class="text-gray-900">3-4 weeks</span>
        </div>
      </div>
      <div class="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
        <div class="flex items-center justify-between">
          <span>Made in</span>
          <span class="text-gray-900">Portland, OR</span>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-3 text-sm text-gray-600">
      <div class="flex items-center gap-2">
        <span class="h-6 w-6 rounded-full border border-white bg-[#f8fafc]"></span>
        <span class="h-6 w-6 rounded-full border border-white bg-[#d6d3d1]"></span>
        <span class="h-6 w-6 rounded-full border border-white bg-[#0f172a]"></span>
        <span>3 finishes</span>
      </div>
      <span class="text-gray-300">•</span>
      <span class="text-amber-600 font-semibold">4.9 · 140 reviews</span>
      <span class="text-gray-300">•</span>
      <span>White-glove delivery available</span>
    </div>
    <div class="flex flex-wrap gap-3">
      <button class="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black">Add to bag</button>
      <button class="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:border-gray-400">View details</button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Feature Split Card" description="Wide spotlight layout." :html-block="htmlBlock">
    <div class="flex justify-center">
      <div class="group relative flex w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div class="relative w-1/2 min-w-[240px]">
          <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80" alt="Modern lounge chair" class="h-full w-full object-cover transition duration-500 group-hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>
          <span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow">Studio drop</span>
        </div>
        <div class="flex flex-1 flex-col justify-between gap-4 p-6">
          <div class="space-y-2">
            <p class="text-xs font-medium uppercase tracking-wide text-gray-500">Furniture</p>
            <div class="flex items-start justify-between gap-3">
              <div class="space-y-1">
                <h3 class="text-lg font-semibold text-gray-900">Arc Lounge Chair</h3>
                <p class="text-sm text-gray-600">Ash frame, boucle upholstery, hand-finished edges.</p>
              </div>
              <span class="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-900">$920</span>
            </div>
          </div>
          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
              <div class="flex items-center justify-between">
                <span>Lead time</span>
                <span class="text-gray-900">3-4 weeks</span>
              </div>
            </div>
            <div class="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
              <div class="flex items-center justify-between">
                <span>Made in</span>
                <span class="text-gray-900">Portland, OR</span>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <span class="h-6 w-6 rounded-full border border-white bg-[#f8fafc]"></span>
              <span class="h-6 w-6 rounded-full border border-white bg-[#d6d3d1]"></span>
              <span class="h-6 w-6 rounded-full border border-white bg-[#0f172a]"></span>
              <span>3 finishes</span>
            </div>
            <span class="text-gray-300">•</span>
            <span class="text-amber-600 font-semibold">4.9 · 140 reviews</span>
            <span class="text-gray-300">•</span>
            <span>White-glove delivery available</span>
          </div>
          <div class="flex flex-wrap gap-3">
            <button class="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black">Add to bag</button>
            <button class="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:border-gray-400">View details</button>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
