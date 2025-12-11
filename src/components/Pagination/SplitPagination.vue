<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav class="flex items-center justify-between bg-white px-4 py-3 sm:px-6 border border-gray-200 rounded-lg shadow-sm" aria-label="Pagination">
  <div class="hidden sm:block">
    <p class="text-sm text-gray-700">
      Showing
      <span class="font-medium">1</span>
      to
      <span class="font-medium">10</span>
      of
      <span class="font-medium">20</span>
      results
    </p>
  </div>
  <div class="flex flex-1 justify-between sm:justify-end">
    <a href="#" class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Previous</a>
    <a href="#" class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Next</a>
  </div>
</nav>
`
</script>

<template>
  <PreviewWrapper title="Split Pagination" description="Pagination with Previous/Next buttons." :html-block="htmlBlock">
    <nav class="flex items-center justify-between bg-white px-4 py-3 sm:px-6 border border-gray-200 rounded-lg shadow-sm" aria-label="Pagination">
      <div class="hidden sm:block">
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">1</span>
          to
          <span class="font-medium">10</span>
          of
          <span class="font-medium">20</span>
          results
        </p>
      </div>
      <div class="flex flex-1 justify-between sm:justify-end">
        <a href="#" class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Previous</a>
        <a href="#" class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Next</a>
      </div>
    </nav>
  </PreviewWrapper>
</template>
