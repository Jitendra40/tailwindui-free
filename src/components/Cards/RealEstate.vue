<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md">
  <div class="relative">
    <img src="https://images.unsplash.com/photo-1600596542815-22506fcdb2ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern home" class="h-48 w-full object-cover">
    <div class="absolute bottom-3 left-3">
      <span class="rounded-lg bg-white/90 px-2 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
        For Sale
      </span>
    </div>
    <button class="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-gray-500 hover:text-red-500 backdrop-blur-sm transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
        <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.16-1.1c-1.059-1.06-3.85-4.133-3.85-6.327 0-2.417 1.954-4.5 4.381-4.5 1.776 0 2.871.936 3.4 1.57.53-.635 1.625-1.571 3.401-1.571 2.427 0 4.381 2.083 4.381 4.5 0 2.194-2.791 5.267-3.85 6.326a20.771 20.771 0 01-1.16 1.1l-.019.01-.005.003h-.002a.739.739 0 01-.69.51.739.739 0 01-.69-.51z" />
      </svg>
    </button>
  </div>
  <div class="p-5">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-2xl font-bold text-gray-900">$1,250,000</p>
        <p class="text-sm font-medium text-gray-500">123 Beverly Drive, Los Angeles</p>
      </div>
    </div>
    <div class="mt-4 flex items-center gap-4 text-sm text-gray-600">
      <div class="flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-400">
          <path d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zM14 6a1 1 0 10-2 0 1 1 0 002 0zm-5 0a1 1 0 10-2 0 1 1 0 002 0z" />
        </svg>
        <span>4 Beds</span>
      </div>
      <div class="flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-400">
          <path fill-rule="evenodd" d="M2.576 4.965a.75.75 0 01.385.955c-.201.448-.601 1.25-.861 2.83h15.8c-.26-1.58-.66-2.382-.861-2.83a.75.75 0 111.372-.614c.264.59.731 1.579 1.05 3.553A1.493 1.493 0 0118.067 10h-2.022a1.503 1.503 0 01-1.397.94 1.501 1.501 0 01-1.397-.94H6.75a1.503 1.503 0 01-1.397.94 1.501 1.501 0 01-1.397-.94H1.933A1.493 1.493 0 01.44 7.854c.319-1.974.786-2.963 1.05-3.554a.75.75 0 01.956-.385l.13.05z" clip-rule="evenodd" />
        </svg>
        <span>3 Baths</span>
      </div>
       <div class="flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-400">
          <path fill-rule="evenodd" d="M2 3a1 1 0 00-1 1v1h18V4a1 1 0 00-1-1H2zm0 3.5V16a1 1 0 001 1h14a1 1 0 001-1V6.5H2z" clip-rule="evenodd" />
        </svg>
        <span>2,400 sqft</span>
      </div>
    </div>
    <div class="mt-5 border-t border-gray-100 pt-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-8 w-8 rounded-full border border-gray-200">
        <span class="text-sm font-medium text-gray-700">Sarah Cole</span>
      </div>
       <button class="rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
        Contact
      </button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Real Estate Listing"
    description="Property card with image, price, specs, and agent info."
    :html-block="htmlBlock"
  >
    <div class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md max-w-sm mx-auto">
      <div class="relative">
        <img src="https://images.unsplash.com/photo-1600596542815-22506fcdb2ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern home" class="h-48 w-full object-cover">
        <div class="absolute bottom-3 left-3">
          <span class="rounded-lg bg-white/90 px-2 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
            For Sale
          </span>
        </div>
        <button class="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-gray-500 hover:text-red-500 backdrop-blur-sm transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.16-1.1c-1.059-1.06-3.85-4.133-3.85-6.327 0-2.417 1.954-4.5 4.381-4.5 1.776 0 2.871.936 3.4 1.57.53-.635 1.625-1.571 3.401-1.571 2.427 0 4.381 2.083 4.381 4.5 0 2.194-2.791 5.267-3.85 6.326a20.771 20.771 0 01-1.16 1.1l-.019.01-.005.003h-.002a.739.739 0 01-.69.51.739.739 0 01-.69-.51z" />
          </svg>
        </button>
      </div>
      <div class="p-5">
        <div class="flex items-start justify-between">
          <div>
            <p class="text-xl font-bold text-gray-900">$1,250,000</p>
            <p class="text-sm font-medium text-gray-500">123 Beverly Drive, Los Angeles</p>
          </div>
        </div>
        <div class="mt-4 flex items-center gap-4 text-sm text-gray-600">
          <div class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-400">
              <path d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zM14 6a1 1 0 10-2 0 1 1 0 002 0zm-5 0a1 1 0 10-2 0 1 1 0 002 0z" />
            </svg>
            <span>4 Beds</span>
          </div>
          <div class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-400">
              <path fill-rule="evenodd" d="M2.576 4.965a.75.75 0 01.385.955c-.201.448-.601 1.25-.861 2.83h15.8c-.26-1.58-.66-2.382-.861-2.83a.75.75 0 111.372-.614c.264.59.731 1.579 1.05 3.553A1.493 1.493 0 0118.067 10h-2.022a1.503 1.503 0 01-1.397.94 1.501 1.501 0 01-1.397-.94H6.75a1.503 1.503 0 01-1.397.94 1.501 1.501 0 01-1.397-.94H1.933A1.493 1.493 0 01.44 7.854c.319-1.974.786-2.963 1.05-3.554a.75.75 0 01.956-.385l.13.05z" clip-rule="evenodd" />
            </svg>
            <span>3 Baths</span>
          </div>
           <div class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-400">
              <path fill-rule="evenodd" d="M2 3a1 1 0 00-1 1v1h18V4a1 1 0 00-1-1H2zm0 3.5V16a1 1 0 001 1h14a1 1 0 001-1V6.5H2z" clip-rule="evenodd" />
            </svg>
            <span>2,400 sqft</span>
          </div>
        </div>
        <div class="mt-5 border-t border-gray-100 pt-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-8 w-8 rounded-full border border-gray-200">
            <span class="text-sm font-medium text-gray-700">Sarah Cole</span>
          </div>
           <button class="rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
