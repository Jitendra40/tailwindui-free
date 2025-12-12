<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex items-start gap-4 max-w-2xl">
  <div class="flex-shrink-0">
     <div class="relative">
        <img class="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" />
        <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white transform translate-x-1/7 translate-y-1/7"></span>
     </div>
  </div>
  <div class="min-w-0 flex-1">
    <form action="#" class="relative">
      <div class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 hover:border-gray-300">
        <textarea rows="3" name="comment" id="comment" class="block w-full resize-none border-0 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent" placeholder="Join the discussion..." ></textarea>
        
        <!-- Action Footer -->
         <div class="flex items-center justify-between border-t border-gray-100 bg-gray-50/30 px-3 py-2">
             <div class="flex items-center space-x-2">
                 <button type="button" class="rounded-full p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                     <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                 </button>
                 <button type="button" class="rounded-full p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                     <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                     </svg>
                 </button>
             </div>
             <button type="submit" class="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
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
    <div class="flex items-start gap-4 max-w-2xl">
      <div class="flex-shrink-0">
         <div class="relative">
            <img class="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" />
            <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white transform translate-x-1/7 translate-y-1/7"></span>
         </div>
      </div>
      <div class="min-w-0 flex-1">
        <form action="#" class="relative">
          <div class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 hover:border-gray-300">
            <textarea rows="3" name="comment" id="comment" class="block w-full resize-none border-0 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent" placeholder="Join the discussion..." ></textarea>
            
            <!-- Action Footer -->
             <div class="flex items-center justify-between border-t border-gray-100 bg-gray-50/30 px-3 py-2">
                 <div class="flex items-center space-x-2">
                     <button type="button" class="rounded-full p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                         <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                     </button>
                     <button type="button" class="rounded-full p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                         <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                         </svg>
                     </button>
                 </div>
                 <button type="submit" class="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                     Post Comment
                 </button>
             </div>
          </div>
        </form>
      </div>
    </div>
  </PreviewWrapper>
</template>
