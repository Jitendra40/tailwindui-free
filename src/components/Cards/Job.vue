<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:bg-gray-50/50 hover:shadow-md hover:border-blue-200">
  <div class="flex items-start justify-between">
    <div class="flex items-center gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 9.75a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" />
          <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v.562a9.01 9.01 0 0 1 5.922 1.948.75.75 0 0 1-1.002 1.118A7.51 7.51 0 0 0 12.75 5.06v.19H12v-.19a7.51 7.51 0 0 0-4.92 1.468.75.75 0 0 1-1.001-1.118A9.01 9.01 0 0 1 11.25 3.562V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <h3 class="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Senior Frontend Engineer</h3>
        <p class="text-sm font-medium text-gray-500">Linear • Remote</p>
      </div>
    </div>
    <button class="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
      </svg>
    </button>
  </div>
  
  <div class="mt-4 flex flex-wrap gap-2">
    <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Full-time</span>
    <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">React</span>
    <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">TypeScript</span>
  </div>

  <div class="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
    <p class="text-sm font-semibold text-gray-900">$120k - $150k <span class="text-gray-500 font-normal">/ year</span></p>
    <button class="text-sm font-semibold text-blue-600 hover:text-blue-500 flex items-center gap-1 group-hover:gap-2 transition-all">
      Apply Now
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
        <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Job Posting"
    description="Card for job listings with tags, salary, and company info."
    :html-block="htmlBlock"
  >
    <div class="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:bg-gray-50/50 hover:shadow-md hover:border-blue-200 max-w-sm mx-auto">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.5 9.75a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" />
              <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v.562a9.01 9.01 0 0 1 5.922 1.948.75.75 0 0 1-1.002 1.118A7.51 7.51 0 0 0 12.75 5.06v.19H12v-.19a7.51 7.51 0 0 0-4.92 1.468.75.75 0 0 1-1.001-1.118A9.01 9.01 0 0 1 11.25 3.562V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Senior Frontend Engineer</h3>
            <p class="text-sm font-medium text-gray-500">Linear • Remote</p>
          </div>
        </div>
        <button class="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>
        </button>
      </div>
      
      <div class="mt-4 flex flex-wrap gap-2">
        <span class="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200">Full-time</span>
        <span class="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200">React</span>
        <span class="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200">TypeScript</span>
      </div>

      <div class="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <p class="text-sm font-semibold text-gray-900">$120k - $150k <span class="text-gray-500 font-normal">/ year</span></p>
        <button class="text-sm font-semibold text-blue-600 hover:text-blue-500 flex items-center gap-1 group-hover:gap-2 transition-all">
          Apply Now
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </PreviewWrapper>
</template>
