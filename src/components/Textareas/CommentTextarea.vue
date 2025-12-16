<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex items-start gap-4 max-w-2xl">
  <div class="flex-shrink-0">
     <div class="relative">
        <img class="h-10 w-10 rounded-full object-cover ring-2 ring-white " src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" />
        <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white transform translate-x-1/7 translate-y-1/7"></span>
     </div>
  </div>
  <div class="min-w-0 flex-1">
    <form action="#" class="relative">
      <div class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white  transition-all focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 hover:border-gray-300">
        <textarea rows="3" name="comment" id="comment" class="block w-full resize-none border-0 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent" placeholder="Join the discussion..." ></textarea>
        
        <!-- Action Footer -->
         <div class="flex items-center justify-between border-t border-gray-100 bg-gray-50/30 px-3 py-2">
             <div class="flex items-center space-x-2">
                 <label class="p-2 mr-2 text-gray-400 transition-colors rounded-full cursor-pointer hover:bg-gray-100 hover:text-gray-600" title="Attach file">
      <input type="file" class="sr-only" />
      <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
      </svg>
      <span class="sr-only">Attach file</span>
    </label>
          
             </div>
             <button type="submit" class="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                 Post Comment
             </button>
         </div>
      </div>
    </form>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Comment Box" description="Chat-like comment input with an avatar." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
