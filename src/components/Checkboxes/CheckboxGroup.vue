<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-6">
  <div class="bg-gray-50/50 p-4 rounded-xl border border-gray-100">
    <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Features</h3>
    <div class="space-y-1">
      <label class="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors hover:bg-white hover:shadow-sm group">
        <div class="relative flex items-center">
          <input type="checkbox" class="peer sr-only" checked />
          <div class="h-4 w-4 rounded border border-gray-300 bg-white transition-all peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:[&_svg]:opacity-100">
             <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 transition-opacity" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
        <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Real-time collaboration</span>
      </label>
      <label class="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors hover:bg-white hover:shadow-sm group">
        <div class="relative flex items-center">
          <input type="checkbox" class="peer sr-only" checked />
          <div class="h-4 w-4 rounded border border-gray-300 bg-white transition-all peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:[&_svg]:opacity-100">
             <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 transition-opacity" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
        <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Auto-save drafts</span>
      </label>
      <label class="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors hover:bg-white hover:shadow-sm group">
        <div class="relative flex items-center">
          <input type="checkbox" class="peer sr-only" />
          <div class="h-4 w-4 rounded border border-gray-300 bg-white transition-all peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:[&_svg]:opacity-100">
             <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 transition-opacity" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
        <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Version control</span>
      </label>
    </div>
  </div>
  
  <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
    <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Permissions</h3>
    <div class="space-y-2">
      <label class="flex items-center justify-between p-3 rounded-lg border border-gray-200 cursor-pointer transition-all hover:border-blue-400 hover:shadow-md has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/30 has-[:checked]:shadow-sm">
        <div class="flex items-center gap-3">
          <div class="relative flex items-center">
            <input type="checkbox" class="peer sr-only" checked />
            <div class="h-5 w-5 rounded border-gray-300 bg-white border transition-all peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:[&_svg]:opacity-100">
                 <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 transition-opacity" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <div>
            <div class="text-sm font-semibold text-gray-900">Read access</div>
            <div class="text-xs text-gray-500">View all resources</div>
          </div>
        </div>
      </label>

      <label class="flex items-center justify-between p-3 rounded-lg border border-gray-200 cursor-pointer transition-all hover:border-purple-400 hover:shadow-md has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50/30 has-[:checked]:shadow-sm">
        <div class="flex items-center gap-3">
          <div class="relative flex items-center">
            <input type="checkbox" class="peer sr-only" checked />
            <div class="h-5 w-5 rounded border-gray-300 bg-white border transition-all peer-checked:bg-purple-600 peer-checked:border-purple-600 peer-checked:[&_svg]:opacity-100">
                 <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 transition-opacity" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <div>
            <div class="text-sm font-semibold text-gray-900">Write access</div>
            <div class="text-xs text-gray-500">Create and edit</div>
          </div>
        </div>
      </label>
      
      <label class="flex items-center justify-between p-3 rounded-lg border border-gray-200 cursor-pointer transition-all hover:border-rose-400 hover:shadow-md has-[:checked]:border-rose-500 has-[:checked]:bg-rose-50/30 has-[:checked]:shadow-sm">
        <div class="flex items-center gap-3">
          <div class="relative flex items-center">
            <input type="checkbox" class="peer sr-only" />
            <div class="h-5 w-5 rounded border-gray-300 bg-white border transition-all peer-checked:bg-rose-600 peer-checked:border-rose-600 peer-checked:[&_svg]:opacity-100">
                 <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 transition-opacity" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <div>
            <div class="text-sm font-semibold text-gray-900">Admin access</div>
            <div class="text-xs text-gray-500">Full control</div>
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
    description="Organized sections with distinct visual hierarchies."
    :html-block="htmlBlock"
  >

  </PreviewWrapper>
</template>
