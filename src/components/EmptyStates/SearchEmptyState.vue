<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-col items-center justify-center py-10 text-center">
  <div class="rounded-full bg-gray-50 p-3 ring-1 ring-gray-200">
      <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"/>
  <path d="m21 21-4.3-4.3"/>
</svg>
  </div>
  <h3 class="mt-4 text-sm font-semibold text-gray-900">No results found</h3>
  <p class="mt-1 text-sm text-gray-500 max-w-xs mx-auto">Your search did not match any of our records. Try searching for something else.</p>
  <button class="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
      Clear filters
  </button>
</div>
`
</script>

<template>
  <PreviewWrapper title="Search Results" description="Feedback for empty search queries." :html-block="htmlBlock">
    <div class="flex flex-col items-center justify-center py-10 text-center">
      <div class="rounded-full bg-gray-50 p-3 ring-1 ring-gray-200">
          <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
      </div>
      <h3 class="mt-4 text-sm font-semibold text-gray-900">No results found</h3>
      <p class="mt-1 text-sm text-gray-500 max-w-xs mx-auto">Your search did not match any of our records. Try searching for something else.</p>
      <button class="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
          Clear filters
      </button>
    </div>
  </PreviewWrapper>
</template>
