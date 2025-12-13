<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-block text-left h-48">
  <details class="group">
    <summary class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none list-none">
      Sort by
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd" />
      </svg>
    </summary>
    <div class="absolute left-0 top-full mt-1 w-56 origin-top-left rounded-xl border border-gray-100 bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
      <div class="p-1 space-y-1">
        <label class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50">
           <span class="text-sm font-medium text-gray-900">Most Popular</span>
           <input type="radio" name="sort-by" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500">
        </label>
        <label class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50">
           <span class="text-sm font-medium text-gray-900">Best Rating</span>
           <input type="radio" name="sort-by" checked class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500">
        </label>
        <label class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50">
           <span class="text-sm font-medium text-gray-900">Newest</span>
           <input type="radio" name="sort-by" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500">
        </label>
        <label class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50">
           <span class="text-sm font-medium text-gray-900">Price: Low to High</span>
           <input type="radio" name="sort-by" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500">
        </label>
      </div>
    </div>
  </details>
</div>`
</script>

<template>
  <PreviewWrapper
    title="With Radio Selection"
    description="Dropdown for single selection like sorting."
    :html-block="htmlBlock"
  >
    <div class="relative inline-block text-left h-48">
      <details class="group">
        <summary class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none list-none">
          Sort by
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd" />
          </svg>
        </summary>
        <div class="absolute left-0 top-full mt-1 w-56 origin-top-left rounded-xl border border-gray-100 bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-all opacity-0 scale-95 group-open:opacity-100 group-open:scale-100 duration-100 ease-out">
          <div class="p-1 space-y-1">
            <label class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50 transition-colors">
               <span class="text-sm font-medium text-gray-900">Most Popular</span>
               <input type="radio" name="sort-by" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500">
            </label>
            <label class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50 transition-colors">
               <span class="text-sm font-medium text-gray-900">Best Rating</span>
               <input type="radio" name="sort-by" checked class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500">
            </label>
            <label class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50 transition-colors">
               <span class="text-sm font-medium text-gray-900">Newest</span>
               <input type="radio" name="sort-by" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500">
            </label>
            <label class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50 transition-colors">
               <span class="text-sm font-medium text-gray-900">Price: Low to High</span>
               <input type="radio" name="sort-by" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500">
            </label>
          </div>
        </div>
      </details>
    </div>
  </PreviewWrapper>
</template>
