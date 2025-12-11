<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <label for="currency" class="block text-sm font-medium leading-6 text-gray-900">Currency</label>
  <div class="relative mt-2">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
           <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
      </div>
      <select id="currency" name="currency" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none">
        <option>USD - United States Dollar</option>
        <option>CAD - Canadian Dollar</option>
        <option>EUR - Euro</option>
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
  <PreviewWrapper title="With Icon" description="Leading icon to indicate content type." :html-block="htmlBlock">
    <div>
      <label for="currency" class="block text-sm font-medium leading-6 text-gray-900">Currency</label>
      <div class="relative mt-2">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
               <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
            <path d="M2 12h20"/>
          </svg>
          </div>
          <select id="currency" name="currency" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none">
            <option>USD - United States Dollar</option>
            <option>CAD - Canadian Dollar</option>
            <option>EUR - Euro</option>
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
