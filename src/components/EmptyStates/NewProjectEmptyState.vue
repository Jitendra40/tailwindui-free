<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<button
  type="button"
  class="relative block w-full rounded-xl border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 group hover:bg-gray-50"
>
  <div class="mx-auto h-12 w-12 text-gray-400 group-hover:text-indigo-600 transition-colors flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-indigo-50">
      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"/>
        <path d="M12 5v14"/>
      </svg>
  </div>
  <span class="mt-4 block text-sm font-semibold text-gray-900 group-hover:text-indigo-700">Create a new database</span>
</button>
`
</script>

<template>
  <PreviewWrapper title="New Project" description="Encourages content creation." :html-block="htmlBlock">
    <button
      type="button"
      class="relative block w-full rounded-xl border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 group hover:bg-gray-50"
    >
      <div class="mx-auto h-12 w-12 text-gray-400 group-hover:text-indigo-600 transition-colors flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-indigo-50">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/>
            <path d="M12 5v14"/>
          </svg>
      </div>
      <span class="mt-4 block text-sm font-semibold text-gray-900 group-hover:text-indigo-700">Create a new database</span>
    </button>
  </PreviewWrapper>
</template>
