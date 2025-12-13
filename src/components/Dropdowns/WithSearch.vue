<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-block text-left h-64">
  <details class="group">
    <summary class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none list-none">
      Assign to...
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd" />
      </svg>
    </summary>
    <div class="absolute left-0 top-full mt-1 w-72 origin-top-left rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 flex flex-col p-2">
      <div class="relative mb-2">
        <svg class="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
        </svg>
        <input type="text" class="w-full rounded-md border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Search users...">
      </div>
      <div class="max-h-48 overflow-y-auto">
        <label class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-50">
          <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
          <span class="flex items-center gap-2">
            <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 rounded-full">
            <span class="text-sm font-medium text-gray-900">Wade Cooper</span>
          </span>
        </label>
        <label class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-50">
          <input type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
          <span class="flex items-center gap-2">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 rounded-full">
            <span class="text-sm font-medium text-gray-900">Arlene Mccoy</span>
          </span>
        </label>
         <label class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-50">
          <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
          <span class="flex items-center gap-2">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 rounded-full">
            <span class="text-sm font-medium text-gray-900">Tom Cook</span>
          </span>
        </label>
      </div>
    </div>
  </details>
</div>`
</script>

<template>
  <PreviewWrapper
    title="With Search"
    description="Dropdown with search input and checkbox items."
    :html-block="htmlBlock"
  >
    <div class="relative inline-block text-left h-64">
      <details class="group">
        <summary class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none list-none">
          Assign to...
        </summary>
        <div class="absolute left-0 top-full mt-1 w-72 origin-top-left rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 flex flex-col p-2 transition-all opacity-0 scale-95 group-open:opacity-100 group-open:scale-100 duration-100 ease-out">
          <div class="relative mb-2">
            <svg class="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>
            <input type="text" class="w-full rounded-md border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Search users...">
          </div>
          <div class="max-h-48 overflow-y-auto space-y-1">
            <label class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-50 transition-colors">
              <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
              <span class="flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 rounded-full">
                <span class="text-sm font-medium text-gray-900">Wade Cooper</span>
              </span>
            </label>
            <label class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-50 transition-colors">
              <input type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
              <span class="flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 rounded-full">
                <span class="text-sm font-medium text-gray-900">Arlene Mccoy</span>
              </span>
            </label>
             <label class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-50 transition-colors">
              <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
              <span class="flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 rounded-full">
                <span class="text-sm font-medium text-gray-900">Tom Cook</span>
              </span>
            </label>
          </div>
        </div>
      </details>
    </div>
  </PreviewWrapper>
</template>
