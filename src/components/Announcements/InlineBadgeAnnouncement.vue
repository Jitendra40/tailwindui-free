<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative bg-white px-6 py-2.5 sm:px-3.5 border-b border-gray-200">
  <div class="flex items-center justify-between gap-x-6">
    <div class="flex items-center gap-x-3">
        <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">New</span>
        <p class="text-sm leading-6 text-gray-900">
           Welcome to the new dashboard! <a href="javascript:void(0)" class="whitespace-nowrap font-semibold">Take a tour <span aria-hidden="true">&rarr;</span></a>
        </p>
    </div>
    <div class="flex flex-1 justify-end">
        <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span class="sr-only">Dismiss</span>
          <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Inline Badge" description="Announcement with a badge indicator." :html-block="htmlBlock">
     <div class="relative bg-white px-6 py-2.5 sm:px-3.5 border-b border-gray-200">
      <div class="flex items-center justify-between gap-x-6">
        <div class="flex items-center gap-x-3">
            <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">New</span>
            <p class="text-sm leading-6 text-gray-900">
               Welcome to the new dashboard! <a href="javascript:void(0)" class="whitespace-nowrap font-semibold">Take a tour <span aria-hidden="true">&rarr;</span></a>
            </p>
        </div>
        <div class="flex flex-1 justify-end">
            <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
              <span class="sr-only">Dismiss</span>
              <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
