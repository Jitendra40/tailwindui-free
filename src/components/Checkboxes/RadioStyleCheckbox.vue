<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-2.5">
  <label class="flex items-center gap-2.5 cursor-pointer group">
    <input type="checkbox" class="peer sr-only" checked />
    <div class="relative h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500/20 shadow-sm group-hover:border-gray-400">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="h-1.5 w-1.5 rounded-full bg-white transition-all peer-checked:scale-100 scale-0"></div>
      </div>
    </div>
    <span class="text-sm text-gray-700 group-hover:text-gray-900">Standard deployment</span>
  </label>
  
  <label class="flex items-center gap-2.5 cursor-pointer group">
    <input type="checkbox" class="peer sr-only" />
    <div class="relative h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-purple-600 peer-checked:bg-purple-600 peer-focus:ring-2 peer-focus:ring-purple-500/20 shadow-sm group-hover:border-gray-400">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="h-1.5 w-1.5 rounded-full bg-white transition-all peer-checked:scale-100 scale-0"></div>
      </div>
    </div>
    <span class="text-sm text-gray-700 group-hover:text-gray-900">Canary release</span>
  </label>
  
  <label class="flex items-center gap-2.5 cursor-pointer group">
    <input type="checkbox" class="peer sr-only" />
    <div class="relative h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-emerald-600 peer-checked:bg-emerald-600 peer-focus:ring-2 peer-focus:ring-emerald-500/20 shadow-sm group-hover:border-gray-400">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="h-1.5 w-1.5 rounded-full bg-white transition-all peer-checked:scale-100 scale-0"></div>
      </div>
    </div>
    <span class="text-sm text-gray-700 group-hover:text-gray-900">Blue-green deployment</span>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Radio-Style Checkboxes"
    description="Circular checkboxes with dot indicators."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="space-y-2.5">
      <label class="flex items-center gap-2.5 cursor-pointer group">
        <input type="checkbox" class="peer sr-only" checked />
        <div class="relative h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500/20 shadow-sm group-hover:border-gray-400">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="h-1.5 w-1.5 rounded-full bg-white transition-all peer-checked:scale-100 scale-0"></div>
          </div>
        </div>
        <span class="text-sm text-gray-700 group-hover:text-gray-900">Standard deployment</span>
      </label>
      
      <label class="flex items-center gap-2.5 cursor-pointer group">
        <input type="checkbox" class="peer sr-only" />
        <div class="relative h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-purple-600 peer-checked:bg-purple-600 peer-focus:ring-2 peer-focus:ring-purple-500/20 shadow-sm group-hover:border-gray-400">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="h-1.5 w-1.5 rounded-full bg-white transition-all peer-checked:scale-100 scale-0"></div>
          </div>
        </div>
        <span class="text-sm text-gray-700 group-hover:text-gray-900">Canary release</span>
      </label>
      
      <label class="flex items-center gap-2.5 cursor-pointer group">
        <input type="checkbox" class="peer sr-only" />
        <div class="relative h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-emerald-600 peer-checked:bg-emerald-600 peer-focus:ring-2 peer-focus:ring-emerald-500/20 shadow-sm group-hover:border-gray-400">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="h-1.5 w-1.5 rounded-full bg-white transition-all peer-checked:scale-100 scale-0"></div>
          </div>
        </div>
        <span class="text-sm text-gray-700 group-hover:text-gray-900">Blue-green deployment</span>
      </label>
    </div>
  </PreviewWrapper>
</template>
