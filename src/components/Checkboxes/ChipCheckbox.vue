<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap gap-2.5">
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" checked />
    <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-blue-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-blue-500/30 hover:bg-gray-200">TypeScript</span>
  </label>
  
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" checked />
    <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-purple-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-purple-500/30 hover:bg-gray-200">React</span>
  </label>
  
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" />
    <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-emerald-500/30 hover:bg-gray-200">Vue</span>
  </label>
  
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" />
    <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-orange-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-orange-500/30 hover:bg-gray-200">Svelte</span>
  </label>
  
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" />
    <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-cyan-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-cyan-500/30 hover:bg-gray-200">Tailwind</span>
  </label>
  
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" />
    <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-rose-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-rose-500/30 hover:bg-gray-200">Vite</span>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Chip Checkboxes"
    description="Modern pill-shaped selection chips for filters."
    :html-block="htmlBlock"
  >
    <div class="flex flex-wrap gap-2.5">
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" checked />
        <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-blue-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-blue-500/30 hover:bg-gray-200">TypeScript</span>
      </label>
      
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" checked />
        <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-purple-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-purple-500/30 hover:bg-gray-200">React</span>
      </label>
      
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" />
        <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-emerald-500/30 hover:bg-gray-200">Vue</span>
      </label>
      
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" />
        <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-orange-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-orange-500/30 hover:bg-gray-200">Svelte</span>
      </label>
      
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" />
        <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-cyan-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-cyan-500/30 hover:bg-gray-200">Tailwind</span>
      </label>
      
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" />
        <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-transparent transition-all peer-checked:bg-rose-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-rose-500/30 hover:bg-gray-200">Vite</span>
      </label>
    </div>
  </PreviewWrapper>
</template>
