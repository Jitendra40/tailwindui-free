<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full max-w-lg">
  <label for="comment" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Add your comment</label>
  <div class="relative rounded-xl border border-gray-200 shadow-sm transition-all focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
    <textarea rows="4" name="comment" id="comment" class="block w-full rounded-xl border-0 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 resize-none" placeholder="What are your thoughts?" />
    <!-- Helper Text / Counter -->
    <div class="flex justify-end border-t border-gray-100 bg-gray-50/50 px-3 py-2 rounded-b-xl">
       <span class="text-xs text-gray-500">0/500 characters</span>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Textarea" description="Clean rounded textarea with character count footer." :html-block="htmlBlock">
    <div class="w-full max-w-lg">
      <label for="comment" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Add your comment</label>
      <div class="relative rounded-xl border border-gray-200 shadow-sm transition-all focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
        <textarea rows="4" name="comment" id="comment" class="block w-full rounded-xl border-0 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 resize-none" placeholder="What are your thoughts?" />
        <div class="flex justify-end border-t border-gray-100 bg-gray-50/50 px-3 py-2 rounded-b-xl">
           <span class="text-xs text-gray-500">0/500 characters</span>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
