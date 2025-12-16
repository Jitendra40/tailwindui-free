<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
  <!-- Status (Custom Select) -->
  <div>
    <label for="status" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Status</label>
    <div class="relative">
      <select id="status" name="status" class="appearance-none block w-full rounded-lg border-0 py-3 pl-4 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-white transition-all hover:ring-gray-300">
        <option>Active</option>
        <option>Inactive</option>
        <option>Pending</option>
        <option>Archived</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>

  <!-- Category (Custom Select) -->
  <div>
    <label for="category" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Category</label>
    <div class="relative">
      <select id="category" name="category" class="appearance-none block w-full rounded-lg border-0 py-3 pl-4 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-white transition-all hover:ring-gray-300">
        <option>Engineering</option>
        <option>Design</option>
        <option>Product</option>
        <option>Marketing</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>

  <!-- Priority (Radio) -->
  <div class="sm:col-span-2">
    <label class="text-base font-semibold text-gray-900">Priority</label>
    <p class="text-sm text-gray-500 mb-4">Select the task priority level.</p>
    <fieldset>
      <legend class="sr-only">Priority</legend>
      <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        <div class="flex items-center">
          <input id="priority-high" name="priority" type="radio" checked class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer">
          <label for="priority-high" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">High</label>
        </div>
        <div class="flex items-center">
          <input id="priority-medium" name="priority" type="radio" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer">
          <label for="priority-medium" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Medium</label>
        </div>
        <div class="flex items-center">
          <input id="priority-low" name="priority" type="radio" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer">
          <label for="priority-low" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Low</label>
        </div>
      </div>
    </fieldset>
  </div>

  <!-- Plan Type (Radio Cards) -->
  <div class="sm:col-span-2">
     <label class="text-base font-semibold text-gray-900">Plan Type</label>
     <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        <!-- Hobby Plan -->
        <label class="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm focus:outline-none hover:border-gray-300 hover:shadow-md transition-all has-[:checked]:ring-2 has-[:checked]:ring-blue-600 has-[:checked]:border-transparent">
          <input type="radio" name="plan-type" value="hobby" class="peer sr-only">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span class="block text-sm font-semibold text-gray-900">Hobby</span>
              <span class="mt-1 flex items-center text-sm text-gray-500">8GB / 4 CPUs</span>
              <span class="mt-6 text-sm font-medium text-gray-900">$40/mo</span>
            </span>
          </span>
          <svg class="h-6 w-6 text-blue-600 absolute top-4 right-4 opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </label>
        
         <!-- Startup Plan -->
         <label class="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm focus:outline-none hover:border-gray-300 hover:shadow-md transition-all has-[:checked]:ring-2 has-[:checked]:ring-blue-600 has-[:checked]:border-transparent">
          <input type="radio" name="plan-type" value="startup" checked class="peer sr-only">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span class="block text-sm font-semibold text-gray-900">Startup</span>
              <span class="mt-1 flex items-center text-sm text-gray-500">12GB / 6 CPUs</span>
              <span class="mt-6 text-sm font-medium text-gray-900">$80/mo</span>
            </span>
          </span>
          <svg class="h-6 w-6 text-blue-600 absolute top-4 right-4 opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </label>
        
         <!-- Business Plan -->
         <label class="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm focus:outline-none hover:border-gray-300 hover:shadow-md transition-all has-[:checked]:ring-2 has-[:checked]:ring-blue-600 has-[:checked]:border-transparent">
          <input type="radio" name="plan-type" value="business" class="peer sr-only">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span class="block text-sm font-semibold text-gray-900">Business</span>
              <span class="mt-1 flex items-center text-sm text-gray-500">32GB / 12 CPUs</span>
              <span class="mt-6 text-sm font-medium text-gray-900">$240/mo</span>
            </span>
          </span>
           <svg class="h-6 w-6 text-blue-600 absolute top-4 right-4 opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </label>
     </div>
  </div>

  <!-- Role (Checkbox) -->
  <div class="sm:col-span-2">
    <fieldset>
      <legend class="text-base font-semibold leading-6 text-gray-900">Role</legend>
      <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
        <div class="relative flex items-start py-4">
          <div class="min-w-0 flex-1 text-sm leading-6">
            <label for="admin" class="select-none font-medium text-gray-900 cursor-pointer">Admin</label>
          </div>
          <div class="ml-3 flex h-6 items-center">
            <input id="admin" name="admin" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer">
          </div>
        </div>
        <div class="relative flex items-start py-4">
          <div class="min-w-0 flex-1 text-sm leading-6">
            <label for="editor" class="select-none font-medium text-gray-900 cursor-pointer">Editor</label>
          </div>
          <div class="ml-3 flex h-6 items-center">
             <input id="editor" name="editor" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer">
          </div>
        </div>
         <div class="relative flex items-start py-4">
          <div class="min-w-0 flex-1 text-sm leading-6">
            <label for="viewer" class="select-none font-medium text-gray-900 cursor-pointer">Viewer</label>
          </div>
          <div class="ml-3 flex h-6 items-center">
             <input id="viewer" name="viewer" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer">
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Selection Inputs"
    description="Dropdowns, radio buttons, and checkboxes."
    :html-block="htmlBlock"
  >
 
  </PreviewWrapper>
</template>
