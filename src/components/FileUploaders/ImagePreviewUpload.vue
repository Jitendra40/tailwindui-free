<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex items-center gap-x-6">
  <div class="relative">
     <span class="inline-block h-20 w-20 overflow-hidden rounded-full bg-gray-100 items-center justify-center flex ring-4 ring-white shadow-lg">
        <svg class="h-full w-full text-gray-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
     </span>
     <span class="absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-white bg-green-400"></span>
  </div>
 <div>
   <h3 class="text-base font-semibold leading-7 text-gray-900">Profile Photo</h3>
   <div class="mt-1 flex items-center gap-x-3">
      <button type="button" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Change</button>
      <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Delete</button>
   </div>
    <p class="mt-2 text-xs text-gray-500">JPG, GIF or PNG. 1MB max.</p>
 </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Profile Photo" description="Upload with immediate preview." :html-block="htmlBlock">
    <div class="flex items-center gap-x-6">
       <div class="relative">
          <span class="inline-block h-20 w-20 overflow-hidden rounded-full bg-gray-100 items-center justify-center flex ring-4 ring-white shadow-lg">
             <svg class="h-full w-full text-gray-300" viewBox="0 0 24 24" fill="currentColor">
               <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
               <circle cx="12" cy="7" r="4"/>
             </svg>
          </span>
          <span class="absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-white bg-green-400"></span>
       </div>
      <div>
        <h3 class="text-base font-semibold leading-7 text-gray-900">Profile Photo</h3>
        <div class="mt-1 flex items-center gap-x-3">
           <button type="button" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Change</button>
           <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Delete</button>
        </div>
         <p class="mt-2 text-xs text-gray-500">JPG, GIF or PNG. 1MB max.</p>
      </div>
    </div>
  </PreviewWrapper>
</template>
