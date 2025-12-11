<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-4">
  <label class="group flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-white cursor-pointer transition-all hover:bg-gray-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/20 has-[:checked]:shadow-lg has-[:checked]:shadow-blue-500/10">
    <div class="relative flex items-center justify-center">
      <input type="checkbox" class="peer sr-only" checked />
      <div class="h-6 w-6 rounded-lg bg-gray-100 transition-all peer-checked:bg-blue-600 peer-checked:scale-110"></div>
      <svg class="absolute w-3.5 h-3.5 text-white opacity-0 transition-opacity delay-100 peer-checked:opacity-100" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="flex-1">
      <div class="flex items-center justify-between">
        <span class="text-sm font-semibold text-gray-900">AI-powered insights</span>
        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 uppercase tracking-wide">Beta</span>
      </div>
      <p class="text-xs text-gray-500 mt-0.5">Unlock predictive analytics for your data.</p>
    </div>
  </label>
  
  <label class="group flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-white cursor-pointer transition-all hover:bg-gray-50 has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50/20 has-[:checked]:shadow-lg has-[:checked]:shadow-purple-500/10">
    <div class="relative flex items-center justify-center">
      <input type="checkbox" class="peer sr-only" />
      <div class="h-6 w-6 rounded-lg bg-gray-100 transition-all peer-checked:bg-purple-600 peer-checked:scale-110"></div>
      <svg class="absolute w-3.5 h-3.5 text-white opacity-0 transition-opacity delay-100 peer-checked:opacity-100" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="flex-1">
      <span class="text-sm font-semibold text-gray-900 block">Automated workflows</span>
      <p class="text-xs text-gray-500 mt-0.5">Streamline repetitive tasks with ease.</p>
    </div>
  </label>
  
  <label class="group flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-white cursor-pointer transition-all hover:bg-gray-50 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/20 has-[:checked]:shadow-lg has-[:checked]:shadow-emerald-500/10">
    <div class="relative flex items-center justify-center">
      <input type="checkbox" class="peer sr-only" />
      <div class="h-6 w-6 rounded-lg bg-gray-100 transition-all peer-checked:bg-emerald-600 peer-checked:scale-110"></div>
      <svg class="absolute w-3.5 h-3.5 text-white opacity-0 transition-opacity delay-100 peer-checked:opacity-100" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="flex-1">
      <span class="text-sm font-semibold text-gray-900 block">Data encryption</span>
      <p class="text-xs text-gray-500 mt-0.5">End-to-end security for your files.</p>
    </div>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Premium Checkboxes"
    description="Custom checkboxes with smooth scale animations and detailed layouts."
    :html-block="htmlBlock"
  >
    <div class="space-y-4">
      <label class="group flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-white cursor-pointer transition-all hover:bg-gray-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/20 has-[:checked]:shadow-lg has-[:checked]:shadow-blue-500/10">
        <div class="relative flex items-center justify-center">
          <input type="checkbox" class="peer sr-only" checked />
          <div class="h-6 w-6 rounded-lg bg-gray-100 transition-all peer-checked:bg-blue-600 peer-checked:scale-110"></div>
          <svg class="absolute w-3.5 h-3.5 text-white opacity-0 transition-opacity delay-100 peer-checked:opacity-100" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <span class="text-sm font-semibold text-gray-900">AI-powered insights</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 uppercase tracking-wide">Beta</span>
          </div>
          <p class="text-xs text-gray-500 mt-0.5">Unlock predictive analytics for your data.</p>
        </div>
      </label>
      
      <label class="group flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-white cursor-pointer transition-all hover:bg-gray-50 has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50/20 has-[:checked]:shadow-lg has-[:checked]:shadow-purple-500/10">
        <div class="relative flex items-center justify-center">
          <input type="checkbox" class="peer sr-only" />
          <div class="h-6 w-6 rounded-lg bg-gray-100 transition-all peer-checked:bg-purple-600 peer-checked:scale-110"></div>
          <svg class="absolute w-3.5 h-3.5 text-white opacity-0 transition-opacity delay-100 peer-checked:opacity-100" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="flex-1">
          <span class="text-sm font-semibold text-gray-900 block">Automated workflows</span>
          <p class="text-xs text-gray-500 mt-0.5">Streamline repetitive tasks with ease.</p>
        </div>
      </label>
      
      <label class="group flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-white cursor-pointer transition-all hover:bg-gray-50 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/20 has-[:checked]:shadow-lg has-[:checked]:shadow-emerald-500/10">
        <div class="relative flex items-center justify-center">
          <input type="checkbox" class="peer sr-only" />
          <div class="h-6 w-6 rounded-lg bg-gray-100 transition-all peer-checked:bg-emerald-600 peer-checked:scale-110"></div>
          <svg class="absolute w-3.5 h-3.5 text-white opacity-0 transition-opacity delay-100 peer-checked:opacity-100" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="flex-1">
          <span class="text-sm font-semibold text-gray-900 block">Data encryption</span>
          <p class="text-xs text-gray-500 mt-0.5">End-to-end security for your files.</p>
        </div>
      </label>
    </div>
  </PreviewWrapper>
</template>
