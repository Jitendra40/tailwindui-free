<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Progress">
  <ol role="list" class="space-y-4 md:flex md:space-x-8 md:space-y-0">
    <li class="md:flex-1">
      <a href="#" class="group relative flex items-start">
        <span class="flex h-9 items-center">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
            <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col">
          <span class="text-sm font-medium">Job Details</span>
          <span class="text-sm text-gray-500">Vitae sed mi luctus laoreet.</span>
        </span>
      </a>
    </li>
    <li class="md:flex-1">
      <a href="#" class="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
        <span class="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">Step 2</span>
        <span class="text-sm font-medium">Application form</span>
      </a>
    </li>
    <li class="md:flex-1">
      <a href="#" class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
        <span class="text-sm font-medium text-gray-500 group-hover:text-gray-700">Step 3</span>
        <span class="text-sm font-medium">Preview</span>
      </a>
    </li>
  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper title="Simple Steps" description="Steps with icons and text description." :html-block="htmlBlock">
    <nav aria-label="Progress">
      <ol role="list" class="space-y-4 md:flex md:space-x-8 md:space-y-0">
        <li class="md:flex-1">
          <a href="#" class="group relative flex items-start">
            <span class="flex h-9 items-center">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium">Job Details</span>
              <span class="text-sm text-gray-500">Vitae sed mi luctus laoreet.</span>
            </span>
          </a>
        </li>
        <li class="md:flex-1">
          <a href="#" class="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
            <span class="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">Step 2</span>
            <span class="text-sm font-medium">Application form</span>
          </a>
        </li>
        <li class="md:flex-1">
          <a href="#" class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
            <span class="text-sm font-medium text-gray-500 group-hover:text-gray-700">Step 3</span>
            <span class="text-sm font-medium">Preview</span>
          </a>
        </li>
      </ol>
    </nav>
  </PreviewWrapper>
</template>
