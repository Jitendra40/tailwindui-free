<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-6">
  <label class="flex items-center justify-between gap-4 cursor-pointer group">
    <div class="flex flex-col">
      <span class="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">Email Notifications</span>
      <span class="text-xs text-gray-500">Get digests and updates.</span>
    </div>
    <div class="relative">
      <input type="checkbox" class="sr-only peer" checked />
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    </div>
  </label>
  
  <label class="flex items-center justify-between gap-4 cursor-pointer group">
    <div class="flex flex-col">
      <span class="text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors">Push Notifications</span>
      <span class="text-xs text-gray-500">Instant alerts on your device.</span>
    </div>
    <div class="relative">
      <input type="checkbox" class="sr-only peer" />
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
    </div>
  </label>
  
  <label class="flex items-center justify-between gap-4 cursor-pointer group">
    <div class="flex flex-col">
      <span class="text-sm font-medium text-gray-900 group-hover:text-purple-700 transition-colors">Dark Mode</span>
      <span class="text-xs text-gray-500">Switch to dark theme.</span>
    </div>
    <div class="relative">
      <input type="checkbox" class="sr-only peer" />
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
    </div>
  </label>
  
  <label class="flex items-center justify-between gap-4 opacity-50 cursor-not-allowed">
    <div class="flex flex-col">
      <span class="text-sm font-medium text-gray-500">Beta Features</span>
      <span class="text-xs text-gray-400">Available on Pro plan.</span>
    </div>
    <div class="relative">
      <input type="checkbox" class="sr-only peer" disabled />
      <div class="w-11 h-6 bg-gray-200 rounded-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5"></div>
    </div>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Toggle Switches"
    description="Interactive toggle switches with text labels and detailed focusing."
    :html-block="htmlBlock"
  >
    <div class="space-y-6">
      <label class="flex items-center justify-between gap-4 cursor-pointer group">
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">Email Notifications</span>
          <span class="text-xs text-gray-500">Get digests and updates.</span>
        </div>
        <div class="relative">
          <input type="checkbox" class="sr-only peer" checked />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </div>
      </label>
      
      <label class="flex items-center justify-between gap-4 cursor-pointer group">
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors">Push Notifications</span>
          <span class="text-xs text-gray-500">Instant alerts on your device.</span>
        </div>
        <div class="relative">
          <input type="checkbox" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
        </div>
      </label>
      
      <label class="flex items-center justify-between gap-4 cursor-pointer group">
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-900 group-hover:text-purple-700 transition-colors">Dark Mode</span>
          <span class="text-xs text-gray-500">Switch to dark theme.</span>
        </div>
        <div class="relative">
          <input type="checkbox" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
        </div>
      </label>
      
      <label class="flex items-center justify-between gap-4 opacity-50 cursor-not-allowed">
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-500">Beta Features</span>
          <span class="text-xs text-gray-400">Available on Pro plan.</span>
        </div>
        <div class="relative">
          <input type="checkbox" class="sr-only peer" disabled />
          <div class="w-11 h-6 bg-gray-200 rounded-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5"></div>
        </div>
      </label>
    </div>
  </PreviewWrapper>
</template>
