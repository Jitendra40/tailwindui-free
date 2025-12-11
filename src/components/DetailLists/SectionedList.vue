<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-6 max-w-lg mx-auto">
  <section class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="bg-gray-50/50 px-6 py-3 border-b border-gray-100">
      <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest">Model Settings</h3>
    </div>
    <div class="divide-y divide-gray-100">
      <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
        <div>
          <p class="text-sm font-medium text-gray-900">Temperature</p>
          <p class="text-xs text-gray-500 mt-0.5">Controls randomness (0.0 - 1.0)</p>
        </div>
        <div class="font-mono text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">0.7</div>
      </div>
      <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
        <div>
          <p class="text-sm font-medium text-gray-900">Max Tokens</p>
          <p class="text-xs text-gray-500 mt-0.5">Limit response length</p>
        </div>
        <div class="font-mono text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">2048</div>
      </div>
    </div>
  </section>

  <section class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="bg-gray-50/50 px-6 py-3 border-b border-gray-100">
      <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest">Deployment Config</h3>
    </div>
    <div class="divide-y divide-gray-100">
      <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
        <div>
          <p class="text-sm font-medium text-gray-900">Auto-Scaling</p>
          <p class="text-xs text-gray-500 mt-0.5">Scale based on CPU usage</p>
        </div>
        <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Enabled</span>
      </div>
      <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
        <div>
          <p class="text-sm font-medium text-gray-900">Region</p>
          <p class="text-xs text-gray-500 mt-0.5">Primary serving location</p>
        </div>
        <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-blue-500"></span>
            <span class="text-sm text-gray-700">us-east-1</span>
        </div>
      </div>
    </div>
  </section>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Sectioned List"
    description="Categorized settings groupings with clear headers."
    :html-block="htmlBlock"
  >
    <div class="space-y-6 max-w-lg mx-auto">
      <section class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="bg-gray-50/50 px-6 py-3 border-b border-gray-100">
          <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest">Model Settings</h3>
        </div>
        <div class="divide-y divide-gray-100">
          <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
            <div>
              <p class="text-sm font-medium text-gray-900">Temperature</p>
              <p class="text-xs text-gray-500 mt-0.5">Controls randomness (0.0 - 1.0)</p>
            </div>
            <div class="font-mono text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">0.7</div>
          </div>
          <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
            <div>
              <p class="text-sm font-medium text-gray-900">Max Tokens</p>
              <p class="text-xs text-gray-500 mt-0.5">Limit response length</p>
            </div>
            <div class="font-mono text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">2048</div>
          </div>
        </div>
      </section>

      <section class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="bg-gray-50/50 px-6 py-3 border-b border-gray-100">
          <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest">Deployment Config</h3>
        </div>
        <div class="divide-y divide-gray-100">
          <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
            <div>
              <p class="text-sm font-medium text-gray-900">Auto-Scaling</p>
              <p class="text-xs text-gray-500 mt-0.5">Scale based on CPU usage</p>
            </div>
            <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Enabled</span>
          </div>
          <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
            <div>
              <p class="text-sm font-medium text-gray-900">Region</p>
              <p class="text-xs text-gray-500 mt-0.5">Primary serving location</p>
            </div>
            <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-blue-500"></span>
                <span class="text-sm text-gray-700">us-east-1</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </PreviewWrapper>
</template>
