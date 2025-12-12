<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<form action="#" class="relative max-w-lg w-full">
  <div class="overflow-hidden rounded-xl border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition-all bg-white">
    <label for="description" class="sr-only">Description</label>
    <textarea rows="3" name="description" id="description" class="block w-full resize-none border-0 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Write a description..." ></textarea>

    <!-- Toolbar -->
    <div class="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-2 py-2">
       <div class="flex items-center gap-1">
          <button type="button" class="group inline-flex items-center justify-center rounded-lg p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
            <span class="sr-only">Attach a file</span>
          </button>
           <button type="button" class="group inline-flex items-center justify-center rounded-lg p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><text transform="matrix(1 0 0 1 7.5 16)" font-family="Arial" font-size="12">@</text>
              </svg>
             <span class="sr-only">Mention someone</span>
           </button>
       </div>
       <button type="submit" class="inline-flex items-center rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
         Post Update
       </button>
    </div>
  </div>
</form>
`
</script>

<template>
  <PreviewWrapper title="Action Textarea" description="Textarea with integrated bottom toolbar." :html-block="htmlBlock">
    <form action="#" class="relative max-w-lg w-full">
      <div class="overflow-hidden rounded-xl border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition-all bg-white">
        <label for="description" class="sr-only">Description</label>
        <textarea rows="3" name="description" id="description" class="block w-full resize-none border-0 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Write a description..." ></textarea>

        <!-- Toolbar -->
        <div class="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-2 py-2">
           <div class="flex items-center gap-1">
              <button type="button" class="group inline-flex items-center justify-center rounded-lg p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
                <span class="sr-only">Attach a file</span>
              </button>
               <button type="button" class="group inline-flex items-center justify-center rounded-lg p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <circle cx="12" cy="12" r="10"></circle>
                     <path d="M8 12h8"></path>
                     <path d="M12 8v8"></path>
                  </svg>
                 <span class="sr-only">Add tag</span>
               </button>
           </div>
           <div class="flex items-start">
             <button type="submit" class="inline-flex items-center rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
               Post
             </button>
           </div>
        </div>
      </div>
    </form>
  </PreviewWrapper>
</template>
