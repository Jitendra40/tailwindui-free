<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-x-6 gap-y-8">
  <!-- Title -->
  <div>
    <label for="title" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Title</label>
    <div class="relative">
      <input type="text" name="title" id="title" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="Project Title">
    </div>
  </div>

  <!-- Description -->
  <div>
    <label for="description" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Description</label>
    <div class="relative">
      <textarea id="description" name="description" rows="3" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="Brief description of the project..."></textarea>
    </div>
    <p class="mt-2 text-xs text-gray-500">Write a few sentences about the project.</p>
  </div>

  <!-- Comments -->
  <div>
    <label for="comment" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Comments</label>
    <div class="relative">
      <textarea id="comment" name="comment" rows="2" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="Add a comment..."></textarea>
    </div>
  </div>

   <!-- Notes -->
  <div>
    <label for="notes" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Notes</label>
    <div class="relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white transition-all hover:ring-gray-300">
       <div class="absolute top-0 left-0 p-3 text-gray-400">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
       </div>
       <textarea id="notes" name="notes" rows="4" class="block w-full rounded-lg border-0 py-3 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent" placeholder="Internal notes..."></textarea>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Content & Notes"
    description="Textareas and inputs for longer content."
    :html-block="htmlBlock"
  >

  </PreviewWrapper>
</template>
