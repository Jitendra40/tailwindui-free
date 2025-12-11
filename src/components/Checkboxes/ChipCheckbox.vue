<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap gap-2">
  <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-blue-400 hover:shadow has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:shadow-blue-200">
    <input type="checkbox" class="sr-only peer" checked />
    <span class="text-xs font-medium">TypeScript</span>
  </label>
  
  <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-purple-400 hover:shadow has-[:checked]:border-purple-600 has-[:checked]:bg-purple-600 has-[:checked]:text-white has-[:checked]:shadow-purple-200">
    <input type="checkbox" class="sr-only peer" checked />
    <span class="text-xs font-medium">React</span>
  </label>
  
  <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-emerald-400 hover:shadow has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-600 has-[:checked]:text-white has-[:checked]:shadow-emerald-200">
    <input type="checkbox" class="sr-only peer" />
    <span class="text-xs font-medium">Vue</span>
  </label>
  
  <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-orange-400 hover:shadow has-[:checked]:border-orange-600 has-[:checked]:bg-orange-600 has-[:checked]:text-white has-[:checked]:shadow-orange-200">
    <input type="checkbox" class="sr-only peer" />
    <span class="text-xs font-medium">Svelte</span>
  </label>
  
  <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-cyan-400 hover:shadow has-[:checked]:border-cyan-600 has-[:checked]:bg-cyan-600 has-[:checked]:text-white has-[:checked]:shadow-cyan-200">
    <input type="checkbox" class="sr-only peer" />
    <span class="text-xs font-medium">Tailwind</span>
  </label>
  
  <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-rose-400 hover:shadow has-[:checked]:border-rose-600 has-[:checked]:bg-rose-600 has-[:checked]:text-white has-[:checked]:shadow-rose-200">
    <input type="checkbox" class="sr-only peer" />
    <span class="text-xs font-medium">Vite</span>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Chip Checkboxes"
    description="Compact tag-style checkboxes for filters and categories."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="flex flex-wrap gap-2">
      <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-blue-400 hover:shadow has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:shadow-blue-200">
        <input type="checkbox" class="sr-only peer" checked />
        <span class="text-xs font-medium">TypeScript</span>
      </label>
      
      <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-purple-400 hover:shadow has-[:checked]:border-purple-600 has-[:checked]:bg-purple-600 has-[:checked]:text-white has-[:checked]:shadow-purple-200">
        <input type="checkbox" class="sr-only peer" checked />
        <span class="text-xs font-medium">React</span>
      </label>
      
      <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-emerald-400 hover:shadow has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-600 has-[:checked]:text-white has-[:checked]:shadow-emerald-200">
        <input type="checkbox" class="sr-only peer" />
        <span class="text-xs font-medium">Vue</span>
      </label>
      
      <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-orange-400 hover:shadow has-[:checked]:border-orange-600 has-[:checked]:bg-orange-600 has-[:checked]:text-white has-[:checked]:shadow-orange-200">
        <input type="checkbox" class="sr-only peer" />
        <span class="text-xs font-medium">Svelte</span>
      </label>
      
      <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-cyan-400 hover:shadow has-[:checked]:border-cyan-600 has-[:checked]:bg-cyan-600 has-[:checked]:text-white has-[:checked]:shadow-cyan-200">
        <input type="checkbox" class="sr-only peer" />
        <span class="text-xs font-medium">Tailwind</span>
      </label>
      
      <label class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 cursor-pointer transition-all shadow-sm hover:border-rose-400 hover:shadow has-[:checked]:border-rose-600 has-[:checked]:bg-rose-600 has-[:checked]:text-white has-[:checked]:shadow-rose-200">
        <input type="checkbox" class="sr-only peer" />
        <span class="text-xs font-medium">Vite</span>
      </label>
    </div>
  </PreviewWrapper>
</template>
