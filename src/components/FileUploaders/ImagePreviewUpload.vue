<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex items-start gap-6">
  <div class="relative group">
     <div class="h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 ring-4 ring-white shadow-lg transition-transform group-hover:scale-105">
        <svg class="h-full w-full text-gray-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <!-- Overlay on hover if needed for 'edit' icon -->
        <div class="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer">
            <svg class="h-6 w-6 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
     </div>
     <span class="absolute -bottom-1 -right-1 block h-6 w-6 rounded-full border-4 border-white bg-green-500 shadow-sm"></span>
  </div>
 <div class="flex flex-col pt-1">
   <h3 class="text-base font-bold text-gray-900">Profile Photo</h3>
   <p class="text-xs text-gray-500 mb-3">Update your avatar.</p>
   <div class="flex items-center gap-3">
      <button type="button" class="inline-flex justify-center rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-indigo-500 transition-colors">Change</button>
      <button type="button" class="inline-flex justify-center rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">Remove</button>
   </div>
 </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Profile Photo" description="Avatar upload with hover overlay and clearer actions." :html-block="htmlBlock">
    <div class="flex items-start gap-6">
      <div class="relative group">
         <div class="h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 ring-4 ring-white shadow-lg transition-transform group-hover:scale-105">
            <svg class="h-full w-full text-gray-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer">
                <svg class="h-6 w-6 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
         </div>
         <span class="absolute -bottom-1 -right-1 block h-6 w-6 rounded-full border-4 border-white bg-green-500 shadow-sm"></span>
      </div>
     <div class="flex flex-col pt-1">
       <h3 class="text-base font-bold text-gray-900">Profile Photo</h3>
       <p class="text-xs text-gray-500 mb-3">Update your avatar.</p>
       <div class="flex items-center gap-3">
          <button type="button" class="inline-flex justify-center rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-indigo-500 transition-colors">Change</button>
          <button type="button" class="inline-flex justify-center rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">Remove</button>
       </div>
     </div>
    </div>
  </PreviewWrapper>
</template>
