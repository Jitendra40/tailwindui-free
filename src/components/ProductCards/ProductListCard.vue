<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div class="relative">
    <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80" alt="Folded tees" class="h-64 w-full object-cover transition duration-500 group-hover:scale-105">
    <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>
    <span class="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow">Bundle</span>
  </div>
  <div class="flex flex-1 flex-col gap-3 p-4">
    <div class="flex items-start justify-between gap-3">
      <div>
        <p class="text-xs font-medium uppercase tracking-wide text-gray-500">Staples</p>
        <h3 class="text-sm font-semibold text-gray-900">Pima Cotton Tee Set</h3>
        <p class="text-sm text-gray-500">6-pack · long-staple pima · pre-shrunk</p>
      </div>
      <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$168</span>
    </div>
    <ul class="space-y-2 text-sm text-gray-600">
      <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Certified organic cotton</li>
      <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Flatlock seams, no scratch tags</li>
      <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>8 curated colorways</li>
    </ul>
    <div class="flex items-center justify-between text-sm text-gray-500">
      <span>Free shipping over $75</span>
      <button class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">View pack</button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Product List Card" description="Detailed card with description." :html-block="htmlBlock">
    <div class="flex justify-center">
      <div class="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80" alt="Folded tees" class="h-64 w-full object-cover transition duration-500 group-hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>
          <span class="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow">Bundle</span>
        </div>
        <div class="flex flex-1 flex-col gap-3 p-4">
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="text-xs font-medium uppercase tracking-wide text-gray-500">Staples</p>
              <h3 class="text-sm font-semibold text-gray-900">Pima Cotton Tee Set</h3>
              <p class="text-sm text-gray-500">6-pack · long-staple pima · pre-shrunk</p>
            </div>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">$168</span>
          </div>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Certified organic cotton</li>
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Flatlock seams, no scratch tags</li>
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>8 curated colorways</li>
          </ul>
          <div class="flex items-center justify-between text-sm text-gray-500">
            <span>Free shipping over $75</span>
            <button class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">View pack</button>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
