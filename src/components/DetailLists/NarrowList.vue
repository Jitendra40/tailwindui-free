<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full max-w-xs bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
  <div class="px-4 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
    <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Activity Log</h3>
    <span class="text-[10px] font-mono text-gray-400">LIVE</span>
  </div>
  <ul class="divide-y divide-gray-50">
    <li class="group px-4 py-3 hover:bg-gray-50 transition-colors cursor-default">
      <div class="flex items-start gap-3">
        <div class="mt-1 min-w-[6px] h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
        <div class="flex-1 min-w-0">
          <p class="text-sm text-gray-900 font-medium truncate">Deployment successful</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs text-gray-500 font-mono">prod-us-east-1</span>
            <span class="text-[10px] text-gray-400">2m ago</span>
          </div>
        </div>
      </div>
    </li>
    <li class="group px-4 py-3 hover:bg-gray-50 transition-colors cursor-default">
      <div class="flex items-start gap-3">
        <div class="mt-1 min-w-[6px] h-1.5 rounded-full bg-blue-500"></div>
        <div class="flex-1 min-w-0">
          <p class="text-sm text-gray-900 font-medium truncate">New user registered</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs text-gray-500 font-mono">user_8823</span>
            <span class="text-[10px] text-gray-400">15m ago</span>
          </div>
        </div>
      </div>
    </li>
    <li class="group px-4 py-3 hover:bg-gray-50 transition-colors cursor-default">
      <div class="flex items-start gap-3">
        <div class="mt-1 min-w-[6px] h-1.5 rounded-full bg-amber-500"></div>
        <div class="flex-1 min-w-0">
          <p class="text-sm text-gray-900 font-medium truncate">Rate limit warning</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs text-gray-500 font-mono">api-gateway</span>
            <span class="text-[10px] text-gray-400">1h ago</span>
          </div>
        </div>
      </div>
    </li>
    <li class="group px-4 py-3 hover:bg-gray-50 transition-colors cursor-default">
      <div class="flex items-start gap-3">
        <div class="mt-1 min-w-[6px] h-1.5 rounded-full bg-gray-300"></div>
        <div class="flex-1 min-w-0">
          <p class="text-sm text-gray-600 truncate">System backup completed</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs text-gray-500 font-mono">automated</span>
            <span class="text-[10px] text-gray-400">3h ago</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Narrow List"
    description="Compact activity stream ideal for sidebars."
    :html-block="htmlBlock"
  >
    <div class="w-full max-w-xs bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mx-auto">
      <div class="px-4 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Activity Log</h3>
        <span class="text-[10px] font-mono text-gray-400">LIVE</span>
      </div>
      <ul class="divide-y divide-gray-50">
        <li class="group px-4 py-3 hover:bg-gray-50 transition-colors cursor-default">
          <div class="flex items-start gap-3">
            <div class="mt-1 min-w-[6px] h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-900 font-medium truncate">Deployment successful</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-xs text-gray-500 font-mono">prod-us-east-1</span>
                <span class="text-[10px] text-gray-400">2m ago</span>
              </div>
            </div>
          </div>
        </li>
        <li class="group px-4 py-3 hover:bg-gray-50 transition-colors cursor-default">
          <div class="flex items-start gap-3">
            <div class="mt-1 min-w-[6px] h-1.5 rounded-full bg-blue-500"></div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-900 font-medium truncate">New user registered</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-xs text-gray-500 font-mono">user_8823</span>
                <span class="text-[10px] text-gray-400">15m ago</span>
              </div>
            </div>
          </div>
        </li>
        <li class="group px-4 py-3 hover:bg-gray-50 transition-colors cursor-default">
          <div class="flex items-start gap-3">
            <div class="mt-1 min-w-[6px] h-1.5 rounded-full bg-amber-500"></div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-900 font-medium truncate">Rate limit warning</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-xs text-gray-500 font-mono">api-gateway</span>
                <span class="text-[10px] text-gray-400">1h ago</span>
              </div>
            </div>
          </div>
        </li>
        <li class="group px-4 py-3 hover:bg-gray-50 transition-colors cursor-default">
          <div class="flex items-start gap-3">
            <div class="mt-1 min-w-[6px] h-1.5 rounded-full bg-gray-300"></div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-600 truncate">System backup completed</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-xs text-gray-500 font-mono">automated</span>
                <span class="text-[10px] text-gray-400">3h ago</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </PreviewWrapper>
</template>
