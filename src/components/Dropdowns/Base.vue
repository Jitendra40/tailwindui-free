<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-block text-left">
  <details class="group">
    <summary class="flex cursor-pointer items-center gap-2 rounded-md border bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
      Actions
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd" />
      </svg>
    </summary>
    <div class="absolute right-0 mt-2 w-40 origin-top-right rounded-md border bg-white py-1 text-sm shadow-lg">
      <a href="#" class="block px-3 py-2 text-gray-800 hover:bg-gray-50">View</a>
      <a href="#" class="block px-3 py-2 text-gray-800 hover:bg-gray-50">Duplicate</a>
      <a href="#" class="block px-3 py-2 text-rose-600 hover:bg-rose-50">Delete</a>
    </div>
  </details>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Dropdowns"
    description="Summary/details based dropdown menu with simple actions."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="relative inline-block text-left">
      <details class="group">
        <summary class="flex cursor-pointer items-center gap-2 rounded-md border bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
          Actions
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd" />
          </svg>
        </summary>
        <div class="absolute right-0 mt-2 w-40 origin-top-right rounded-md border bg-white py-1 text-sm shadow-lg">
          <a href="#" class="block px-3 py-2 text-gray-800 hover:bg-gray-50">View</a>
          <a href="#" class="block px-3 py-2 text-gray-800 hover:bg-gray-50">Duplicate</a>
          <a href="#" class="block px-3 py-2 text-rose-600 hover:bg-rose-50">Delete</a>
        </div>
      </details>
    </div>
  </PreviewWrapper>
</template>
