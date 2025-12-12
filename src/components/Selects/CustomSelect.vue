<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative mt-2 max-w-sm w-full">
  <label class="block text-sm font-medium leading-6 text-gray-900 mb-2">Assigned to</label>
  <button type="button" class="relative w-full cursor-pointer rounded-xl bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 hover:ring-gray-300 transition-all">
    <span class="flex items-center">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-shrink-0 rounded-full object-cover ring-2 ring-white" />
      <span class="ml-3 block truncate font-medium">Tom Cook</span>
    </span>
    <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
      <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
      </svg>
    </span>
  </button>

  <!-- Open Dropdown State (Visual Mockup) -->
  <div class="absolute z-10 mt-2 w-full overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all">
    <ul class="max-h-60 overflow-auto py-1 text-base sm:text-sm">
      <!-- Selected -->
      <li class="relative cursor-pointer select-none py-3 pl-3 pr-9 bg-gray-50 text-gray-900 font-medium">
        <div class="flex items-center">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
          <span class="ml-3 block truncate">Tom Cook</span>
        </div>
        <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
           <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
           </svg>
        </span>
      </li>
      <!-- Option -->
      <li class="relative cursor-pointer select-none py-3 pl-3 pr-9 text-gray-900 hover:bg-gray-50 transition-colors">
        <div class="flex items-center">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
          <span class="ml-3 block truncate">Wade Cooper</span>
        </div>
      </li>
       <!-- Option -->
      <li class="relative cursor-pointer select-none py-3 pl-3 pr-9 text-gray-900 hover:bg-gray-50 transition-colors">
        <div class="flex items-center">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
          <span class="ml-3 block truncate">Arlene Mccoy</span>
        </div>
      </li>
    </ul>
    <div class="border-t border-gray-100 bg-gray-50 px-3 py-2">
        <button class="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
            View all profiles
        </button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Custom Dropdown" description="Rich dropdown with user avatars and secondary actions." :html-block="htmlBlock">
    <div class="relative mt-2 max-w-sm w-full h-[320px]">
      <label class="block text-sm font-medium leading-6 text-gray-900 mb-2">Assigned to</label>
      <div class="relative">
          <button type="button" class="relative w-full cursor-pointer rounded-xl bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 hover:ring-gray-300 transition-all">
            <span class="flex items-center">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-shrink-0 rounded-full object-cover ring-2 ring-white" />
              <span class="ml-3 block truncate font-medium">Tom Cook</span>
            </span>
            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
              </svg>
            </span>
          </button>

          <!-- Open Dropdown State -->
          <div class="absolute z-10 mt-2 w-full overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all">
            <ul class="max-h-60 overflow-auto py-1 text-base sm:text-sm">
              <li class="relative cursor-pointer select-none py-3 pl-3 pr-9 bg-gray-50 text-gray-900 font-medium border-l-4 border-indigo-600">
                <div class="flex items-center">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
                  <span class="ml-3 block truncate">Tom Cook</span>
                </div>
                <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                   <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                   </svg>
                </span>
              </li>
              <li class="relative cursor-pointer select-none py-3 pl-3 pr-9 text-gray-900 hover:bg-gray-50 transition-colors">
                <div class="flex items-center">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
                  <span class="ml-3 block truncate">Wade Cooper</span>
                </div>
              </li>
              <li class="relative cursor-pointer select-none py-3 pl-3 pr-9 text-gray-900 hover:bg-gray-50 transition-colors">
                <div class="flex items-center">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
                  <span class="ml-3 block truncate">Arlene Mccoy</span>
                </div>
              </li>
            </ul>
             <div class="border-t border-gray-100 bg-gray-50 px-3 py-2">
                <button class="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                    View all profiles
                </button>
            </div>
          </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
