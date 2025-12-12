<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="max-w-sm w-full">
  <label for="currency" class="block text-sm font-medium leading-6 text-gray-900">Currency</label>
  <div class="relative mt-2">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <span class="text-gray-500 font-semibold sm:text-sm">$</span>
      </div>
      <select id="currency" name="currency" class="block w-full rounded-xl border-0 py-3 pl-9 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none shadow-sm font-medium bg-white">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
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
  <PreviewWrapper title="Currency Select" description="Compact select with embedded unit indicator." :html-block="htmlBlock">
    <div class="max-w-sm w-full">
      <label for="currency" class="block text-sm font-medium leading-6 text-gray-900">Currency</label>
      <div class="relative mt-2">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <span class="text-gray-500 font-semibold sm:text-sm">$</span>
          </div>
          <select id="currency" name="currency" class="block w-full rounded-xl border-0 py-3 pl-9 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none shadow-sm font-medium bg-white hover:ring-gray-300 transition-shadow">
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
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
