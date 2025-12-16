<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <label class="relative flex flex-col p-4 rounded-xl border border-gray-200 bg-white cursor-pointer transition-all hover:border-blue-300 hover:shadow-md has-[:checked]:border-blue-500 has-[:checked]:shadow-blue-500/10 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 group">
    <div class="flex items-center justify-between gap-4 mb-2">
      <div class="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      </div>
      <div class="relative flex items-center">
        <input type="checkbox" class="peer sr-only" checked />
        <div class="h-5 w-5 rounded border-gray-300 text-blue-600 transition-all peer-checked:bg-blue-600 peer-checked:border-transparent peer-checked:[&_svg]:opacity-100 border bg-white">
           <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 transition-opacity" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <h3 class="font-semibold text-gray-900 group-hover:text-blue-700">Startup Plan</h3>
      <p class="text-sm text-gray-500 mt-1">Perfect for small teams and early-stage startups.</p>
    </div>
    <div class="mt-4 pt-3 border-t border-gray-100 flex items-baseline gap-1">
      <span class="text-lg font-bold text-gray-900">$29</span>
      <span class="text-xs text-gray-500 font-medium">/month</span>
    </div>
  </label>
  
  <label class="relative flex flex-col p-4 rounded-xl border border-gray-200 bg-white cursor-pointer transition-all hover:border-purple-300 hover:shadow-md has-[:checked]:border-purple-500 has-[:checked]:shadow-purple-500/10 has-[:checked]:ring-1 has-[:checked]:ring-purple-500 group">
    <div class="flex items-center justify-between gap-4 mb-2">
      <div class="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      </div>
      <div class="relative flex items-center">
        <input type="checkbox" class="peer sr-only" />
        <div class="h-5 w-5 rounded border-gray-300 text-purple-600 transition-all peer-checked:bg-purple-600 peer-checked:border-transparent peer-checked:[&_svg]:opacity-100 border bg-white">
           <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-yellow-300 opacity-0 transition-opacity" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <h3 class="font-semibold text-gray-900 group-hover:text-purple-700">Business Plan</h3>
      <p class="text-sm text-gray-500 mt-1">For growing businesses needing advanced features.</p>
    </div>
    <div class="mt-4 pt-3 border-t border-gray-100 flex items-baseline gap-1">
      <span class="text-lg font-bold text-gray-900">$99</span>
      <span class="text-xs text-gray-500 font-medium">/month</span>
    </div>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Card Checkboxes"
    description="Rich content selection cards with custom graphics and states."
    :html-block="htmlBlock"
  >

  </PreviewWrapper>
</template>
