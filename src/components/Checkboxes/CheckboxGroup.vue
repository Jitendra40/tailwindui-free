<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-3">
  <div>
    <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Features</h3>
    <div class="space-y-2">
      <label class="flex items-center gap-2.5 cursor-pointer group">
        <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all shadow-sm" checked />
        <span class="text-sm text-gray-700 group-hover:text-gray-900">Real-time collaboration</span>
      </label>
      <label class="flex items-center gap-2.5 cursor-pointer group">
        <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all shadow-sm" checked />
        <span class="text-sm text-gray-700 group-hover:text-gray-900">Auto-save drafts</span>
      </label>
      <label class="flex items-center gap-2.5 cursor-pointer group">
        <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all shadow-sm" />
        <span class="text-sm text-gray-700 group-hover:text-gray-900">Version control</span>
      </label>
    </div>
  </div>
  
  <div>
    <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Permissions</h3>
    <div class="space-y-2">
      <label class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 cursor-pointer transition-all hover:border-blue-400 hover:shadow-sm has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/50">
        <div class="flex items-center gap-2.5 min-w-0">
          <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 shadow-sm" checked />
          <div class="min-w-0">
            <div class="text-sm font-medium text-gray-900">Read access</div>
            <div class="text-xs text-gray-600">View all resources</div>
          </div>
        </div>
      </label>
      <label class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 cursor-pointer transition-all hover:border-purple-400 hover:shadow-sm has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50/50">
        <div class="flex items-center gap-2.5 min-w-0">
          <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-0 shadow-sm" checked />
          <div class="min-w-0">
            <div class="text-sm font-medium text-gray-900">Write access</div>
            <div class="text-xs text-gray-600">Create and edit</div>
          </div>
        </div>
      </label>
      <label class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 cursor-pointer transition-all hover:border-rose-400 hover:shadow-sm has-[:checked]:border-rose-500 has-[:checked]:bg-rose-50/50">
        <div class="flex items-center gap-2.5 min-w-0">
          <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-2 focus:ring-rose-500/20 focus:ring-offset-0 shadow-sm" />
          <div class="min-w-0">
            <div class="text-sm font-medium text-gray-900">Admin access</div>
            <div class="text-xs text-gray-600">Full control</div>
          </div>
        </div>
      </label>
    </div>
  </div>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Checkbox Groups"
    description="Organized checkbox groups with sections."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="space-y-3">
      <div>
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Features</h3>
        <div class="space-y-2">
          <label class="flex items-center gap-2.5 cursor-pointer group">
            <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all shadow-sm" checked />
            <span class="text-sm text-gray-700 group-hover:text-gray-900">Real-time collaboration</span>
          </label>
          <label class="flex items-center gap-2.5 cursor-pointer group">
            <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all shadow-sm" checked />
            <span class="text-sm text-gray-700 group-hover:text-gray-900">Auto-save drafts</span>
          </label>
          <label class="flex items-center gap-2.5 cursor-pointer group">
            <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all shadow-sm" />
            <span class="text-sm text-gray-700 group-hover:text-gray-900">Version control</span>
          </label>
        </div>
      </div>
      
      <div>
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Permissions</h3>
        <div class="space-y-2">
          <label class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 cursor-pointer transition-all hover:border-blue-400 hover:shadow-sm has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/50">
            <div class="flex items-center gap-2.5 min-w-0">
              <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 shadow-sm" checked />
              <div class="min-w-0">
                <div class="text-sm font-medium text-gray-900">Read access</div>
                <div class="text-xs text-gray-600">View all resources</div>
              </div>
            </div>
          </label>
          <label class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 cursor-pointer transition-all hover:border-purple-400 hover:shadow-sm has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50/50">
            <div class="flex items-center gap-2.5 min-w-0">
              <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-0 shadow-sm" checked />
              <div class="min-w-0">
                <div class="text-sm font-medium text-gray-900">Write access</div>
                <div class="text-xs text-gray-600">Create and edit</div>
              </div>
            </div>
          </label>
          <label class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 cursor-pointer transition-all hover:border-rose-400 hover:shadow-sm has-[:checked]:border-rose-500 has-[:checked]:bg-rose-50/50">
            <div class="flex items-center gap-2.5 min-w-0">
              <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-2 focus:ring-rose-500/20 focus:ring-offset-0 shadow-sm" />
              <div class="min-w-0">
                <div class="text-sm font-medium text-gray-900">Admin access</div>
                <div class="text-xs text-gray-600">Full control</div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
