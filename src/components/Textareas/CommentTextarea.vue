<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
     <div class="flex items-center justify-center">
        <span class="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
          <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
     </div>
  </div>
  <div class="min-w-0 flex-1">
    <form action="#" class="relative">
      <div class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
        <label for="comment-box" class="sr-only">Add your comment</label>
        <textarea rows="3" name="comment-box" id="comment-box" class="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Add your comment..." ></textarea>
        <div class="py-2" aria-hidden="true">
          <div class="py-px">
            <div class="h-9" />
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 flex justify-end py-2 pl-3 pr-2">
          <button type="submit" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Post</button>
      </div>
    </form>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Comment Textarea" description="Avatar integration and cleaner look." :html-block="htmlBlock">
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0">
         <div class="flex items-center justify-center">
            <span class="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
              <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
         </div>
      </div>
      <div class="min-w-0 flex-1">
        <form action="#" class="relative">
          <div class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <label for="comment-box" class="sr-only">Add your comment</label>
            <textarea rows="3" name="comment-box" id="comment-box" class="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Add your comment..." ></textarea>
            <div class="py-2" aria-hidden="true">
              <div class="py-px">
                <div class="h-9" />
              </div>
            </div>
          </div>
          <div class="absolute inset-x-0 bottom-0 flex justify-end py-2 pl-3 pr-2">
              <button type="submit" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Post</button>
          </div>
        </form>
      </div>
    </div>
  </PreviewWrapper>
</template>
