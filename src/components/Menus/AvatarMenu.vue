<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-flex text-left flex justify-end w-full">
  <details class="group relative">
    <summary class="flex items-center gap-2 rounded-full cursor-pointer list-none focus:outline-none">
       <span class="sr-only">Open user menu</span>
       <div class="relative">
          <img class="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white"></span>
       </div>
    </summary>
    
    <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white p-1 shadow-xl ring-1 ring-black/5 focus:outline-none">
        <div class="px-3 py-2 border-b border-gray-100 mb-1">
             <p class="text-sm font-semibold text-gray-900">Tom Cook</p>
             <p class="text-xs text-gray-500">tom@example.com</p>
        </div>
      <a href="#" class="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">Your Profile</a>
      <a href="#" class="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">Settings</a>
      <div class="my-1 h-px bg-gray-100"></div>
      <a href="#" class="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">Sign out</a>
    </div>
  </details>
</div>
`
</script>

<template>
  <PreviewWrapper title="Avatar Menu" description="Profile menu with online indicator and user details." :html-block="htmlBlock">
   
  </PreviewWrapper>
</template>
