<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-block text-left">
    <details class="group relative">
      <summary class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer list-none">
        Filter
        <svg class="-mr-1 h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </summary>

      <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="px-4 py-3">
          <p class="text-sm">Signed in as</p>
          <p class="truncate text-sm font-medium text-gray-900">tom@example.com</p>
        </div>
        <div class="py-1">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account settings</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">License</a>
        </div>
        <div class="py-1">
          <form method="POST" action="#">
            <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
          </form>
        </div>
      </div>
    </details>
  </div>
`
</script>

<template>
  <PreviewWrapper title="Sectioned Menu" description="Dropdown with header and dividers." :html-block="htmlBlock">
    <div class="relative inline-block text-left h-56">
      <details class="group relative">
        <summary class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer list-none">
          Filter
          <svg class="-mr-1 h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </summary>
  
        <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="px-4 py-3">
            <p class="text-sm">Signed in as</p>
            <p class="truncate text-sm font-medium text-gray-900">tom@example.com</p>
          </div>
          <div class="py-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">License</a>
          </div>
          <div class="py-1">
            <form method="POST" action="#">
              <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
            </form>
          </div>
        </div>
      </details>
    </div>
  </PreviewWrapper>
</template>
