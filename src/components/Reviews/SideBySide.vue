<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-4">
  <!-- Review 1 -->
  <div class="flex gap-4 rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100">
     <div class="flex-none">
        <img class="h-10 w-10 rounded-full bg-gray-100 object-cover" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
     </div>
     <div class="flex-1">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold text-gray-900">Mark Edwards</h4>
            <div class="flex items-center gap-1">
               <span class="inline-flex items-center rounded-sm bg-green-50 px-1 py-0.5 text-[0.6rem] font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
            </div>
        </div>
        <div class="mt-1 flex items-center text-[0.65rem] text-gray-500">
           <span>Product:</span>
           <span class="ml-1 font-medium text-gray-700">Enterprise License</span>
        </div>
        <p class="mt-2 text-xs leading-snug text-gray-600">"The scalability of this platform is unmatched. We migrated our entire database over the weekend without a hitch."</p>
     </div>
  </div>

  <!-- Review 2 -->
    <div class="flex gap-4 rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100">
     <div class="flex-none">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">JL</div>
     </div>
     <div class="flex-1">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold text-gray-900">Jessica Lee</h4>
             <span class="text-[0.65rem] text-gray-400">Mar 12</span>
        </div>
         <div class="mt-1 flex items-center text-[0.65rem] text-gray-500">
           <span>Product:</span>
           <span class="ml-1 font-medium text-gray-700">Team Plan</span>
        </div>
        <p class="mt-2 text-xs leading-snug text-gray-600">"Simple, effective, and beautifully designed. It just works."</p>
     </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper 
    title="Compact List Reviews" 
    description="Minimalist list-style reviews great for comment sections or activity feeds." 
    :html-block="htmlBlock" 
    default-viewport="full"
  />
</template>
