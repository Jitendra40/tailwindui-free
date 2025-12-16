<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
  <!-- Company Name -->
  <div class="sm:col-span-2">
    <label for="company-name" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Company Name</label>
    <div class="relative">
      <input type="text" name="company-name" id="company-name" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="Acme Inc.">
    </div>
  </div>

  <!-- Designation -->
  <div>
    <label for="designation" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Designation</label>
    <div class="relative">
      <input type="text" name="designation" id="designation" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="Software Engineer">
    </div>
  </div>

  <!-- Industry -->
   <div>
    <label for="industry" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Industry</label>
    <div class="relative">
      <select id="industry" name="industry" class="appearance-none block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-600  sm:text-sm sm:leading-6 bg-white transition-all hover:ring-gray-300">
        <option>Technology</option>
        <option>Finance</option>
        <option>Healthcare</option>
        <option>Education</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 top-0 bottom-0 flex items-center px-4 text-gray-500  justify-end w-full">
         <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>

  <!-- Lead Source -->
  <div>
    <label for="lead-source" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Lead Source</label>
    <div class="relative">
      <select id="lead-source" name="lead-source" class="appearance-none block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-600  sm:text-sm sm:leading-6 bg-white transition-all hover:ring-gray-300">
        <option>Website</option>
        <option>Referral</option>
        <option>Social Media</option>
        <option>Advertisement</option>
      </select>
       <div class="pointer-events-none absolute inset-y-0 right-0 top-0 bottom-0 flex items-center px-4 text-gray-500 sm:max-w-xs justify-end w-full">
         <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>

  <!-- Budget -->
  <div>
     <label for="budget" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Budget</label>
    <div class="relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 bg-white transition-all hover:ring-gray-300">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <span class="text-gray-500 sm:text-sm">$</span>
      </div>
      <input type="text" name="budget" id="budget" class="block w-full rounded-lg border-0 py-3 pl-8 pr-14 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="0.00">
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
        <span class="text-gray-500 sm:text-sm">USD</span>
      </div>
    </div>
  </div>

  <!-- Expected Close Date -->
  <div>
    <label for="close-date" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Expected Close Date</label>
    <div class="relative">
      <input type="date" name="close-date" id="close-date" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Business & Lead Management"
    description="CRM and B2B specific input fields."
    :html-block="htmlBlock"
  >

  </PreviewWrapper>
</template>
