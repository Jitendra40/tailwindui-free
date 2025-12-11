<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
  <div class="divide-y divide-gray-100">
    <div class="flex items-center p-4 hover:bg-gray-50 transition-colors group">
      <div class="h-10 w-10 flex-shrink-0 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
      </div>
      <div class="ml-4 flex-1 min-w-0">
        <div class="flex items-center justify-between">
          <p class="text-sm font-semibold text-gray-900 truncate">Production Database</p>
          <div class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="p-1 rounded text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <span class="sr-only">Edit</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </button>
            <button class="p-1 rounded text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors">
              <span class="sr-only">Delete</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          </div>
        </div>
        <p class="text-sm text-gray-500 truncate mt-0.5">PostgreSQL 14.5 • 85% Storage used</p>
      </div>
    </div>

    <div class="flex items-center p-4 hover:bg-gray-50 transition-colors group">
      <div class="h-10 w-10 flex-shrink-0 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
      </div>
      <div class="ml-4 flex-1 min-w-0">
        <div class="flex items-center justify-between">
          <p class="text-sm font-semibold text-gray-900 truncate">Cache Cluster</p>
          <div class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="p-1 rounded text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </button>
            <button class="p-1 rounded text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          </div>
        </div>
        <p class="text-sm text-gray-500 truncate mt-0.5">Redis 6.2 • Healthy</p>
      </div>
    </div>
  </div>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Actionable List"
    description="List items with hover-revealed management actions."
    :html-block="htmlBlock"
  >
    <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div class="divide-y divide-gray-100">
        <div class="flex items-center p-4 hover:bg-gray-50 transition-colors group">
          <div class="h-10 w-10 flex-shrink-0 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </div>
          <div class="ml-4 flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold text-gray-900 truncate">Production Database</p>
              <div class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="p-1 rounded text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <span class="sr-only">Edit</span>
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>
                <button class="p-1 rounded text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                  <span class="sr-only">Delete</span>
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </div>
            <p class="text-sm text-gray-500 truncate mt-0.5">PostgreSQL 14.5 • 85% Storage used</p>
          </div>
        </div>

        <div class="flex items-center p-4 hover:bg-gray-50 transition-colors group">
          <div class="h-10 w-10 flex-shrink-0 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
          </div>
          <div class="ml-4 flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold text-gray-900 truncate">Cache Cluster</p>
              <div class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="p-1 rounded text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>
                <button class="p-1 rounded text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </div>
            <p class="text-sm text-gray-500 truncate mt-0.5">Redis 6.2 • Healthy</p>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
