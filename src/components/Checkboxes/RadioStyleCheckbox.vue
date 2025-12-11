<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-3">
  <label class="flex items-center gap-3 cursor-pointer group p-3 rounded-lg border border-transparent hover:bg-white hover:shadow-sm hover:border-gray-200 transition-all">
    <div class="relative flex items-center justify-center">
      <input type="checkbox" class="peer sr-only" checked />
      <div class="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 group-hover:border-gray-400"></div>
      <div class="absolute h-2.5 w-2.5 rounded-full bg-white scale-0 transition-transform peer-checked:scale-100"></div>
    </div>
    <div class="flex flex-col">
      <span class="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">Standard Deployment</span>
      <span class="text-xs text-gray-500">Deploy to a single availability zone.</span>
    </div>
  </label>
  
  <label class="flex items-center gap-3 cursor-pointer group p-3 rounded-lg border border-transparent hover:bg-white hover:shadow-sm hover:border-gray-200 transition-all">
    <div class="relative flex items-center justify-center">
      <input type="checkbox" class="peer sr-only" />
      <div class="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-purple-600 peer-checked:bg-purple-600 group-hover:border-gray-400"></div>
      <div class="absolute h-2.5 w-2.5 rounded-full bg-white scale-0 transition-transform peer-checked:scale-100"></div>
    </div>
    <div class="flex flex-col">
      <span class="text-sm font-medium text-gray-900 group-hover:text-purple-700 transition-colors">Canary Release</span>
      <span class="text-xs text-gray-500">Gradual rollout to 10% of users.</span>
    </div>
  </label>
  
  <label class="flex items-center gap-3 cursor-pointer group p-3 rounded-lg border border-transparent hover:bg-white hover:shadow-sm hover:border-gray-200 transition-all">
    <div class="relative flex items-center justify-center">
      <input type="checkbox" class="peer sr-only" />
      <div class="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-emerald-600 peer-checked:bg-emerald-600 group-hover:border-gray-400"></div>
      <div class="absolute h-2.5 w-2.5 rounded-full bg-white scale-0 transition-transform peer-checked:scale-100"></div>
    </div>
    <div class="flex flex-col">
      <span class="text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors">Blue-Green Deployment</span>
      <span class="text-xs text-gray-500">Zero downtime release strategy.</span>
    </div>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Radio-Style Checkboxes"
    description="Checkboxes disguised as radio buttons with nice hover states."
    :html-block="htmlBlock"
  >
    <div class="space-y-3">
      <label class="flex items-center gap-3 cursor-pointer group p-3 rounded-lg border border-transparent hover:bg-white hover:shadow-sm hover:border-gray-200 transition-all">
        <div class="relative flex items-center justify-center">
          <input type="checkbox" class="peer sr-only" checked />
          <div class="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 group-hover:border-gray-400"></div>
          <div class="absolute h-2.5 w-2.5 rounded-full bg-white scale-0 transition-transform peer-checked:scale-100"></div>
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">Standard Deployment</span>
          <span class="text-xs text-gray-500">Deploy to a single availability zone.</span>
        </div>
      </label>
      
      <label class="flex items-center gap-3 cursor-pointer group p-3 rounded-lg border border-transparent hover:bg-white hover:shadow-sm hover:border-gray-200 transition-all">
        <div class="relative flex items-center justify-center">
          <input type="checkbox" class="peer sr-only" />
          <div class="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-purple-600 peer-checked:bg-purple-600 group-hover:border-gray-400"></div>
          <div class="absolute h-2.5 w-2.5 rounded-full bg-white scale-0 transition-transform peer-checked:scale-100"></div>
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-900 group-hover:text-purple-700 transition-colors">Canary Release</span>
          <span class="text-xs text-gray-500">Gradual rollout to 10% of users.</span>
        </div>
      </label>
      
      <label class="flex items-center gap-3 cursor-pointer group p-3 rounded-lg border border-transparent hover:bg-white hover:shadow-sm hover:border-gray-200 transition-all">
        <div class="relative flex items-center justify-center">
          <input type="checkbox" class="peer sr-only" />
          <div class="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-emerald-600 peer-checked:bg-emerald-600 group-hover:border-gray-400"></div>
          <div class="absolute h-2.5 w-2.5 rounded-full bg-white scale-0 transition-transform peer-checked:scale-100"></div>
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors">Blue-Green Deployment</span>
          <span class="text-xs text-gray-500">Zero downtime release strategy.</span>
        </div>
      </label>
    </div>
  </PreviewWrapper>
</template>
