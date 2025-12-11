<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative mt-2">
  <label class="block text-sm font-medium leading-6 text-gray-900 mb-2">Assigned to</label>
  <button type="button" class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
    <span class="flex items-center">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
      <span class="ml-3 block truncate">Tom Cook</span>
    </span>
    <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
      <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m6 9 6 6 6-6"/>
    </svg>
    </span>
  </button>

  <!-- Dropdown (Visual only for preview) -->
  <ul class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 bg-indigo-600 text-white">
      <div class="flex items-center">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
        <span class="ml-3 block truncate font-semibold">Tom Cook</span>
      </div>
       <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 6 9 17l-5-5"/>
        </svg>
      </span>
    </li>
    <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-50">
      <div class="flex items-center">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
        <span class="ml-3 block truncate">Wade Cooper</span>
      </div>
    </li>
  </ul>
</div>
`
</script>

<template>
  <PreviewWrapper title="Custom Select" description="Custom styled toggle with consistent cross-browser look." :html-block="htmlBlock">
    <div class="relative mt-2">
       <label class="block text-sm font-medium leading-6 text-gray-900 mb-2">Assigned to</label>
       <button type="button" class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
         <span class="flex items-center">
           <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
           <span class="ml-3 block truncate">Tom Cook</span>
         </span>
         <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
           <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <path d="m6 9 6 6 6-6"/>
         </svg>
         </span>
       </button>

       <!-- Dropdown (Visual only for preview) -->
       <ul class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
         <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 bg-indigo-600 text-white">
           <div class="flex items-center">
             <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
             <span class="ml-3 block truncate font-semibold">Tom Cook</span>
           </div>
            <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
             <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                 <path d="M20 6 9 17l-5-5"/>
             </svg>
           </span>
         </li>
         <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-50">
           <div class="flex items-center">
             <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
             <span class="ml-3 block truncate">Wade Cooper</span>
           </div>
         </li>
       </ul>
     </div>
  </PreviewWrapper>
</template>
