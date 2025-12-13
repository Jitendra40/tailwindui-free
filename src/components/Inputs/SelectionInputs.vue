<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
  <!-- Status (Select) -->
  <div>
    <label for="status" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Status</label>
    <div class="relative">
      <select id="status" name="status" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white transition-all hover:ring-gray-300">
        <option>Active</option>
        <option>Inactive</option>
        <option>Pending</option>
        <option>Archived</option>
      </select>
    </div>
  </div>

  <!-- Category (Select) -->
  <div>
    <label for="category" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Category</label>
    <div class="relative">
      <select id="category" name="category" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white transition-all hover:ring-gray-300">
        <option>Engineering</option>
        <option>Design</option>
        <option>Product</option>
        <option>Marketing</option>
      </select>
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
          <input id="priority-high" name="priority" type="radio" checked class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
          <label for="priority-high" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">High</label>
        </div>
        <div class="flex items-center">
          <input id="priority-medium" name="priority" type="radio" class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
          <label for="priority-medium" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Medium</label>
        </div>
        <div class="flex items-center">
          <input id="priority-low" name="priority" type="radio" class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
          <label for="priority-low" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Low</label>
        </div>
      </div>
    </fieldset>
  </div>

  <!-- Plan Type (Radio Cards) -->
  <div class="sm:col-span-2">
     <label class="text-base font-semibold text-gray-900">Plan Type</label>
     <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        <label class="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm focus:outline-none hover:border-gray-300 hover:shadow-md transition-all">
          <input type="radio" name="plan-type" value="hobby" class="sr-only" aria-labelledby="plan-type-0-label" aria-describedby="plan-type-0-description-0 plan-type-0-description-1">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span id="plan-type-0-label" class="block text-sm font-semibold text-gray-900">Hobby</span>
              <span id="plan-type-0-description-0" class="mt-1 flex items-center text-sm text-gray-500">8GB / 4 CPUs</span>
              <span id="plan-type-0-description-1" class="mt-6 text-sm font-medium text-gray-900">$40/mo</span>
            </span>
          </span>
          <span class="pointer-events-none absolute -inset-px rounded-xl border-2 border-transparent peer-checked:border-indigo-600" aria-hidden="true"></span>
        </label>
         <label class="relative flex cursor-pointer rounded-xl border bg-white p-6 shadow-sm focus:outline-none ring-2 ring-indigo-600 border-transparent hover:shadow-md transition-all">
          <input type="radio" name="plan-type" value="startup" checked class="sr-only" aria-labelledby="plan-type-1-label" aria-describedby="plan-type-1-description-0 plan-type-1-description-1">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span id="plan-type-1-label" class="block text-sm font-semibold text-gray-900">Startup</span>
              <span id="plan-type-1-description-0" class="mt-1 flex items-center text-sm text-gray-500">12GB / 6 CPUs</span>
              <span id="plan-type-1-description-1" class="mt-6 text-sm font-medium text-gray-900">$80/mo</span>
            </span>
          </span>
          <svg class="h-6 w-6 text-indigo-600 absolute top-4 right-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </label>
         <label class="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm focus:outline-none hover:border-gray-300 hover:shadow-md transition-all">
          <input type="radio" name="plan-type" value="business" class="sr-only" aria-labelledby="plan-type-2-label" aria-describedby="plan-type-2-description-0 plan-type-2-description-1">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span id="plan-type-2-label" class="block text-sm font-semibold text-gray-900">Business</span>
              <span id="plan-type-2-description-0" class="mt-1 flex items-center text-sm text-gray-500">32GB / 12 CPUs</span>
              <span id="plan-type-2-description-1" class="mt-6 text-sm font-medium text-gray-900">$240/mo</span>
            </span>
          </span>
           <span class="pointer-events-none absolute -inset-px rounded-xl border-2 border-transparent peer-checked:border-indigo-600" aria-hidden="true"></span>
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
            <input id="admin" name="admin" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
          </div>
        </div>
        <div class="relative flex items-start py-4">
          <div class="min-w-0 flex-1 text-sm leading-6">
            <label for="editor" class="select-none font-medium text-gray-900 cursor-pointer">Editor</label>
          </div>
          <div class="ml-3 flex h-6 items-center">
             <input id="editor" name="editor" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
          </div>
        </div>
         <div class="relative flex items-start py-4">
          <div class="min-w-0 flex-1 text-sm leading-6">
            <label for="viewer" class="select-none font-medium text-gray-900 cursor-pointer">Viewer</label>
          </div>
          <div class="ml-3 flex h-6 items-center">
             <input id="viewer" name="viewer" type="checkbox" checked class="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
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
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
      <!-- Status (Select) -->
      <div>
        <label for="status" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Status</label>
        <div class="relative">
          <select id="status" name="status" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white transition-all hover:ring-gray-300">
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
            <option>Archived</option>
          </select>
        </div>
      </div>

      <!-- Category (Select) -->
      <div>
        <label for="category" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Category</label>
        <div class="relative">
          <select id="category" name="category" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white transition-all hover:ring-gray-300">
            <option>Engineering</option>
            <option>Design</option>
            <option>Product</option>
            <option>Marketing</option>
          </select>
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
              <input id="priority-high" name="priority" type="radio" checked class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
              <label for="priority-high" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">High</label>
            </div>
            <div class="flex items-center">
              <input id="priority-medium" name="priority" type="radio" class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
              <label for="priority-medium" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Medium</label>
            </div>
            <div class="flex items-center">
              <input id="priority-low" name="priority" type="radio" class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
              <label for="priority-low" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Low</label>
            </div>
          </div>
        </fieldset>
      </div>

      <!-- Plan Type (Radio Cards) -->
      <div class="sm:col-span-2">
         <label class="text-base font-semibold text-gray-900">Plan Type</label>
         <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
            <label class="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm focus:outline-none hover:border-gray-300 hover:shadow-md transition-all">
              <input type="radio" name="plan-type" value="hobby" class="sr-only" aria-labelledby="plan-type-0-label" aria-describedby="plan-type-0-description-0 plan-type-0-description-1">
              <span class="flex flex-1">
                <span class="flex flex-col">
                  <span id="plan-type-0-label" class="block text-sm font-semibold text-gray-900">Hobby</span>
                  <span id="plan-type-0-description-0" class="mt-1 flex items-center text-sm text-gray-500">8GB / 4 CPUs</span>
                  <span id="plan-type-0-description-1" class="mt-6 text-sm font-medium text-gray-900">$40/mo</span>
                </span>
              </span>
              <span class="pointer-events-none absolute -inset-px rounded-xl border-2 border-transparent peer-checked:border-indigo-600" aria-hidden="true"></span>
            </label>
             <label class="relative flex cursor-pointer rounded-xl border bg-white p-6 shadow-sm focus:outline-none ring-2 ring-indigo-600 border-transparent hover:shadow-md transition-all">
              <input type="radio" name="plan-type" value="startup" checked class="sr-only" aria-labelledby="plan-type-1-label" aria-describedby="plan-type-1-description-0 plan-type-1-description-1">
              <span class="flex flex-1">
                <span class="flex flex-col">
                  <span id="plan-type-1-label" class="block text-sm font-semibold text-gray-900">Startup</span>
                  <span id="plan-type-1-description-0" class="mt-1 flex items-center text-sm text-gray-500">12GB / 6 CPUs</span>
                  <span id="plan-type-1-description-1" class="mt-6 text-sm font-medium text-gray-900">$80/mo</span>
                </span>
              </span>
              <svg class="h-6 w-6 text-indigo-600 absolute top-4 right-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
            </label>
             <label class="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm focus:outline-none hover:border-gray-300 hover:shadow-md transition-all">
              <input type="radio" name="plan-type" value="business" class="sr-only" aria-labelledby="plan-type-2-label" aria-describedby="plan-type-2-description-0 plan-type-2-description-1">
              <span class="flex flex-1">
                <span class="flex flex-col">
                  <span id="plan-type-2-label" class="block text-sm font-semibold text-gray-900">Business</span>
                  <span id="plan-type-2-description-0" class="mt-1 flex items-center text-sm text-gray-500">32GB / 12 CPUs</span>
                  <span id="plan-type-2-description-1" class="mt-6 text-sm font-medium text-gray-900">$240/mo</span>
                </span>
              </span>
               <span class="pointer-events-none absolute -inset-px rounded-xl border-2 border-transparent peer-checked:border-indigo-600" aria-hidden="true"></span>
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
                <input id="admin" name="admin" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
              </div>
            </div>
            <div class="relative flex items-start py-4">
              <div class="min-w-0 flex-1 text-sm leading-6">
                <label for="editor" class="select-none font-medium text-gray-900 cursor-pointer">Editor</label>
              </div>
              <div class="ml-3 flex h-6 items-center">
                 <input id="editor" name="editor" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
              </div>
            </div>
             <div class="relative flex items-start py-4">
              <div class="min-w-0 flex-1 text-sm leading-6">
                <label for="viewer" class="select-none font-medium text-gray-900 cursor-pointer">Viewer</label>
              </div>
              <div class="ml-3 flex h-6 items-center">
                 <input id="viewer" name="viewer" type="checkbox" checked class="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer">
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </PreviewWrapper>
</template>
