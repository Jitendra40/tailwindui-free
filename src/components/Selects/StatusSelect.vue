<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <label for="status" class="block text-sm font-medium leading-6 text-gray-900">Project Status</label>
  <div class="relative mt-2">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span class="h-2 w-2 rounded-full bg-green-500"></span>
    </div>
     <select id="status" name="status" class="block w-full rounded-md border-0 py-1.5 pl-8 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none">
        <option>Online</option>
        <option>Offline</option>
        <option>Busy</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
           <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
      </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Status Picker" description="Visual indicator for status selection." :html-block="htmlBlock">
    <div>
      <label for="status" class="block text-sm font-medium leading-6 text-gray-900">Project Status</label>
      <div class="relative mt-2">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="h-2 w-2 rounded-full bg-green-500"></span>
        </div>
         <select id="status" name="status" class="block w-full rounded-md border-0 py-1.5 pl-8 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none">
            <option>Online</option>
            <option>Offline</option>
            <option>Busy</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
               <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
          </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
