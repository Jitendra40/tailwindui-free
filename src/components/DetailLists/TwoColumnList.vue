<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
  <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/30">
    <h3 class="text-sm font-semibold text-gray-900">Instance Configuration</h3>
    <button class="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">Edit</button>
  </div>
  <div class="p-0">
    <dl class="divide-y divide-gray-100">
      <div class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
        <dt class="text-sm font-medium text-gray-500">Instance ID</dt>
        <dd class="text-sm font-mono text-gray-900 col-span-2">i-0a2b3c4d5e6f7g8h</dd>
      </div>
      <div class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
        <dt class="text-sm font-medium text-gray-500">Instance Type</dt>
        <dd class="text-sm font-medium text-gray-900 col-span-2 flex items-center gap-2">
          <span>t4g.xlarge</span>
          <span class="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] uppercase font-bold tracking-wide">Active</span>
        </dd>
      </div>
      <div class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
        <dt class="text-sm font-medium text-gray-500">Public IPv4</dt>
        <dd class="text-sm font-mono text-gray-900 col-span-2">54.123.45.67</dd>
      </div>
      <div class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
        <dt class="text-sm font-medium text-gray-500">Availability Zone</dt>
        <dd class="text-sm text-gray-900 col-span-2">us-west-2a</dd>
      </div>
      <div class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
        <dt class="text-sm font-medium text-gray-500">Security Groups</dt>
        <dd class="text-sm text-gray-900 col-span-2">
          <div class="flex flex-wrap gap-2">
            <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">launch-wizard-1</span>
            <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">ssh-access</span>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Data Grid List"
    description="Dense two-column layout for technical details."
    :html-block="htmlBlock"
  >
    <div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/30">
        <h3 class="text-sm font-semibold text-gray-900">Instance Configuration</h3>
        <button class="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">Edit</button>
      </div>
      <div class="p-0">
        <dl class="divide-y divide-gray-100">
          <div class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
            <dt class="text-sm font-medium text-gray-500">Instance ID</dt>
            <dd class="text-sm font-mono text-gray-900 col-span-2">i-0a2b3c4d5e6f7g8h</dd>
          </div>
          <div class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
            <dt class="text-sm font-medium text-gray-500">Instance Type</dt>
            <dd class="text-sm font-medium text-gray-900 col-span-2 flex items-center gap-2">
              <span>t4g.xlarge</span>
              <span class="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] uppercase font-bold tracking-wide">Active</span>
            </dd>
          </div>
          <div class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
            <dt class="text-sm font-medium text-gray-500">Public IPv4</dt>
            <dd class="text-sm font-mono text-gray-900 col-span-2">54.123.45.67</dd>
          </div>
          <div class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
            <dt class="text-sm font-medium text-gray-500">Availability Zone</dt>
            <dd class="text-sm text-gray-900 col-span-2">us-west-2a</dd>
          </div>
          <div class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
            <dt class="text-sm font-medium text-gray-500">Security Groups</dt>
            <dd class="text-sm text-gray-900 col-span-2">
              <div class="flex flex-wrap gap-2">
                <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">launch-wizard-1</span>
                <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">ssh-access</span>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </PreviewWrapper>
</template>
