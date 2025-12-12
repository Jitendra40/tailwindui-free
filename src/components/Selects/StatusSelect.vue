<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="max-w-sm w-full">
  <label for="status" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Project Status</label>
  <div class="relative">
      <!-- Status Dot -->
     <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
     </div>
     <select id="status" name="status" class="block w-full rounded-xl border-0 py-3 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none shadow-sm font-medium bg-white hover:ring-gray-300 transition-all">
        <option>Online</option>
        <option>Away</option>
        <option>Busy</option>
        <option>Offline</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
           <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
          </svg>
      </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Live Status" description="Select with an animated status indicator." :html-block="htmlBlock">
    <div class="max-w-sm w-full">
      <label for="status" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Project Status</label>
      <div class="relative">
          <!-- Status Dot -->
         <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
         </div>
         <select id="status" name="status" class="block w-full rounded-xl border-0 py-3 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none shadow-sm font-medium bg-white hover:ring-gray-300 transition-all">
            <option>Online</option>
            <option>Away</option>
            <option>Busy</option>
            <option>Offline</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
               <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
              </svg>
          </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
