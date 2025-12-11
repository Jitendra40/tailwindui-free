<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="text-center py-10 px-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
  <div class="relative w-32 h-32 mx-auto opacity-75">
      <div class="absolute inset-0 bg-indigo-100 rounded-full animate-pulse"></div>
      <div class="absolute inset-2 bg-indigo-50 rounded-full flex items-center justify-center">
           <svg class="h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
      <circle cx="9" cy="9" r="2"/>
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
      </div>
  </div>
  <h3 class="mt-6 text-base font-semibold text-gray-900">Start your collection</h3>
  <p class="mt-2 text-sm text-gray-500 max-w-sm mx-auto">It looks like you haven't added any items to this collection yet.</p>
  <div class="mt-6">
    <button type="button" class="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all">
      Create Item
    </button>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Illustrated" description="Uses a larger visual or illustration area." :html-block="htmlBlock">
    <div class="text-center py-10 px-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
      <div class="relative w-32 h-32 mx-auto opacity-75">
          <div class="absolute inset-0 bg-indigo-100 rounded-full animate-pulse"></div>
          <div class="absolute inset-2 bg-indigo-50 rounded-full flex items-center justify-center">
               <svg class="h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
          </div>
      </div>
      <h3 class="mt-6 text-base font-semibold text-gray-900">Start your collection</h3>
      <p class="mt-2 text-sm text-gray-500 max-w-sm mx-auto">It looks like you haven't added any items to this collection yet.</p>
      <div class="mt-6">
        <button type="button" class="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all">
          Create Item
        </button>
      </div>
    </div>
  </PreviewWrapper>
</template>
