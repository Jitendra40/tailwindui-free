<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full">
  <label for="comment" class="block text-sm font-medium leading-6 text-gray-700 mb-2">Add your comment</label>
  <div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
    <textarea rows="4" name="comment" id="comment" class="block w-full border-0 p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 resize-none" placeholder="What are your thoughts..."></textarea>
    
    <!-- Toolbar / Footer -->
    <div class="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-2 py-2">
      <div class="flex items-center gap-1">
        <label class="group rounded p-1.5 text-gray-400 hover:bg-white hover:text-gray-700 hover:shadow-sm transition-all cursor-pointer" title="Attach file">
            <input type="file" class="sr-only" />
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
        </label>
        <label class="group rounded p-1.5 text-gray-400 hover:bg-white hover:text-gray-700 hover:shadow-sm transition-all cursor-pointer" title="Add image">
            <input type="file" accept="image/*" class="sr-only" />
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        </label>
      </div>
      <div class="flex items-center gap-3">
         <span class="text-xs font-medium text-gray-400">0/500</span>
         <button type="button" class="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all cursor-pointer">
            Post
         </button>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Textarea" description="Clean rounded textarea with character count footer." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
