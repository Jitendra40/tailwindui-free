<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-6">
  <!-- Solid Variant -->
  <div class="flex flex-wrap gap-2.5">
    <label class="inline-flex items-center cursor-pointer group">
      <input type="checkbox" class="sr-only peer" checked />
      <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 transition-all duration-200 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:shadow-md peer-checked:shadow-blue-500/20 group-hover:bg-gray-200 peer-checked:group-hover:bg-blue-700">TypeScript</span>
    </label>
    
    <label class="inline-flex items-center cursor-pointer group">
      <input type="checkbox" class="sr-only peer" checked />
      <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 transition-all duration-200 peer-checked:bg-purple-600 peer-checked:text-white peer-checked:shadow-md peer-checked:shadow-purple-500/20 group-hover:bg-gray-200 peer-checked:group-hover:bg-purple-700">React</span>
    </label>
    
    <label class="inline-flex items-center cursor-pointer group">
      <input type="checkbox" class="sr-only peer" />
      <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 transition-all duration-200 peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:shadow-md peer-checked:shadow-emerald-500/20 group-hover:bg-gray-200 peer-checked:group-hover:bg-emerald-700">Vue</span>
    </label>
  </div>

  <!-- Divider -->
  <div class="h-px bg-gray-100 w-full"></div>

  <!-- Outline Variant -->
  <div class="flex flex-wrap gap-2.5">
    <label class="inline-flex items-center cursor-pointer group">
      <input type="checkbox" class="sr-only peer" checked />
      <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 bg-white transition-all duration-200 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-50 group-hover:border-gray-300 peer-checked:group-hover:border-blue-700 peer-checked:group-hover:text-blue-700">Design</span>
    </label>
    
    <label class="inline-flex items-center cursor-pointer group">
      <input type="checkbox" class="sr-only peer" />
      <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 bg-white transition-all duration-200 peer-checked:border-purple-600 peer-checked:text-purple-600 peer-checked:bg-purple-50 group-hover:border-gray-300 peer-checked:group-hover:border-purple-700 peer-checked:group-hover:text-purple-700">Development</span>
    </label>
    
    <label class="inline-flex items-center cursor-pointer group">
      <input type="checkbox" class="sr-only peer" />
      <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 bg-white transition-all duration-200 peer-checked:border-orange-600 peer-checked:text-orange-600 peer-checked:bg-orange-50 group-hover:border-gray-300 peer-checked:group-hover:border-orange-700 peer-checked:group-hover:text-orange-700">Marketing</span>
    </label>
  </div>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Chip Checkboxes"
    description="Modern pill-shaped selection chips for filters."
    :html-block="htmlBlock"
  >
    <div class="space-y-6">
      <!-- Solid Variant -->
      <div class="flex flex-wrap gap-2.5">
        <label class="inline-flex items-center cursor-pointer group">
          <input type="checkbox" class="sr-only peer" checked />
          <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 transition-all duration-200 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:shadow-md peer-checked:shadow-blue-500/20 group-hover:bg-gray-200 peer-checked:group-hover:bg-blue-700">TypeScript</span>
        </label>
        
        <label class="inline-flex items-center cursor-pointer group">
          <input type="checkbox" class="sr-only peer" checked />
          <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 transition-all duration-200 peer-checked:bg-purple-600 peer-checked:text-white peer-checked:shadow-md peer-checked:shadow-purple-500/20 group-hover:bg-gray-200 peer-checked:group-hover:bg-purple-700">React</span>
        </label>
        
        <label class="inline-flex items-center cursor-pointer group">
          <input type="checkbox" class="sr-only peer" />
          <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 transition-all duration-200 peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:shadow-md peer-checked:shadow-emerald-500/20 group-hover:bg-gray-200 peer-checked:group-hover:bg-emerald-700">Vue</span>
        </label>
      </div>

      <!-- Divider -->
      <div class="h-px bg-gray-100 w-full"></div>

      <!-- Outline Variant -->
      <div class="flex flex-wrap gap-2.5">
        <label class="inline-flex items-center cursor-pointer group">
          <input type="checkbox" class="sr-only peer" checked />
          <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 bg-white transition-all duration-200 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-50 group-hover:border-gray-300 peer-checked:group-hover:border-blue-700 peer-checked:group-hover:text-blue-700">Design</span>
        </label>
        
        <label class="inline-flex items-center cursor-pointer group">
          <input type="checkbox" class="sr-only peer" />
          <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 bg-white transition-all duration-200 peer-checked:border-purple-600 peer-checked:text-purple-600 peer-checked:bg-purple-50 group-hover:border-gray-300 peer-checked:group-hover:border-purple-700 peer-checked:group-hover:text-purple-700">Development</span>
        </label>
        
        <label class="inline-flex items-center cursor-pointer group">
          <input type="checkbox" class="sr-only peer" />
          <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 bg-white transition-all duration-200 peer-checked:border-orange-600 peer-checked:text-orange-600 peer-checked:bg-orange-50 group-hover:border-gray-300 peer-checked:group-hover:border-orange-700 peer-checked:group-hover:text-orange-700">Marketing</span>
        </label>
      </div>
    </div>
  </PreviewWrapper>
</template>
