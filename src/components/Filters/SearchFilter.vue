<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative rounded-md shadow-sm max-w-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
    </div>
    <input type="text" name="search" id="search-filter" class="block w-full rounded-lg border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm transition-all" placeholder="Filter people..." />
    <div class="absolute inset-y-0 right-0 flex py-2 pr-2">
        <kbd class="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400 bg-gray-50">⌘K</kbd>
    </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Search with Shortcut" description="Input with leading icon and keyboard shortcut hint." :html-block="htmlBlock">
    <div class="relative rounded-md shadow-sm max-w-sm">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
        </div>
        <input type="text" name="search" id="search-filter" class="block w-full rounded-lg border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm transition-all" placeholder="Filter people..." />
        <div class="absolute inset-y-0 right-0 flex py-2 pr-2">
            <kbd class="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400 bg-gray-50">⌘K</kbd>
        </div>
    </div>
  </PreviewWrapper>
</template>
