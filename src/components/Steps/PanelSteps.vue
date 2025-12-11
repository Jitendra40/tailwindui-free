<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Progress">
  <ol role="list" class="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
    <li class="relative overflow-hidden lg:flex-1">
      <div class="overflow-hidden border-b border-gray-200 rounded-t-md border-t border-r-0 lg:border-b-0 lg:border-t-0 lg:border-r lg:rounded-none lg:rounded-l-md">
        <a href="#" class="group">
          <div class="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" aria-hidden="true" />
          <span class="flex items-start px-6 py-5 text-sm font-medium">
            <span class="flex-shrink-0">
              <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600">
                <span class="text-indigo-600">01</span>
              </span>
            </span>
            <div class="ml-4 mt-0.5 flex min-w-0 flex-col">
              <span class="text-xs font-semibold uppercase tracking-wide text-indigo-600">Job Details</span>
              <span class="text-sm font-medium text-gray-500">Vitae sed mi luctus laoreet.</span>
            </div>
          </span>
        </a>
      </div>
    </li>
    <li class="relative overflow-hidden lg:flex-1">
      <div class="overflow-hidden border-b border-gray-200 lg:border-b-0 lg:border-r">
        <a href="#" class="group">
          <div class="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" aria-hidden="true" />
           <span class="flex items-start px-6 py-5 text-sm font-medium">
            <span class="flex-shrink-0">
              <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                <span class="text-gray-500">02</span>
              </span>
            </span>
            <div class="ml-4 mt-0.5 flex min-w-0 flex-col">
              <span class="text-xs font-semibold uppercase tracking-wide text-gray-500">Application Form</span>
              <span class="text-sm font-medium text-gray-500">Cursus semper viverra.</span>
            </div>
          </span>
        </a>
      </div>
    </li>
    <li class="relative overflow-hidden lg:flex-1">
      <div class="overflow-hidden border-b border-gray-200 rounded-b-md border-b-0 lg:border-b-0 lg:rounded-none lg:rounded-r-md">
        <a href="#" class="group">
          <div class="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" aria-hidden="true" />
           <span class="flex items-start px-6 py-5 text-sm font-medium">
            <span class="flex-shrink-0">
              <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                <span class="text-gray-500">03</span>
              </span>
            </span>
            <div class="ml-4 mt-0.5 flex min-w-0 flex-col">
              <span class="text-xs font-semibold uppercase tracking-wide text-gray-500">Preview</span>
               <span class="text-sm font-medium text-gray-500">Penatibus eu quis ante.</span>
            </div>
          </span>
        </a>
      </div>
    </li>
  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper title="Panel Steps" description="Full width step panels." :html-block="htmlBlock">
    <nav aria-label="Progress">
      <ol role="list" class="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
        <li class="relative overflow-hidden lg:flex-1">
          <div class="overflow-hidden border-b border-gray-200 rounded-t-md border-t border-r-0 lg:border-b-0 lg:border-t-0 lg:border-r lg:rounded-none lg:rounded-l-md">
            <a href="#" class="group">
              <div class="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" aria-hidden="true" />
              <span class="flex items-start px-6 py-5 text-sm font-medium">
                <span class="flex-shrink-0">
                  <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600">
                    <span class="text-indigo-600">01</span>
                  </span>
                </span>
                <div class="ml-4 mt-0.5 flex min-w-0 flex-col">
                  <span class="text-xs font-semibold uppercase tracking-wide text-indigo-600">Job Details</span>
                  <span class="text-sm font-medium text-gray-500">Vitae sed mi luctus laoreet.</span>
                </div>
              </span>
            </a>
          </div>
        </li>
        <li class="relative overflow-hidden lg:flex-1">
          <div class="overflow-hidden border-b border-gray-200 lg:border-b-0 lg:border-r">
            <a href="#" class="group">
              <div class="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" aria-hidden="true" />
               <span class="flex items-start px-6 py-5 text-sm font-medium">
                <span class="flex-shrink-0">
                  <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                    <span class="text-gray-500">02</span>
                  </span>
                </span>
                <div class="ml-4 mt-0.5 flex min-w-0 flex-col">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-500">Application Form</span>
                  <span class="text-sm font-medium text-gray-500">Cursus semper viverra.</span>
                </div>
              </span>
            </a>
          </div>
        </li>
        <li class="relative overflow-hidden lg:flex-1">
          <div class="overflow-hidden border-b border-gray-200 rounded-b-md border-b-0 lg:border-b-0 lg:rounded-none lg:rounded-r-md">
            <a href="#" class="group">
              <div class="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" aria-hidden="true" />
               <span class="flex items-start px-6 py-5 text-sm font-medium">
                <span class="flex-shrink-0">
                  <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                    <span class="text-gray-500">03</span>
                  </span>
                </span>
                <div class="ml-4 mt-0.5 flex min-w-0 flex-col">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-500">Preview</span>
                   <span class="text-sm font-medium text-gray-500">Penatibus eu quis ante.</span>
                </div>
              </span>
            </a>
          </div>
        </li>
      </ol>
    </nav>
  </PreviewWrapper>
</template>
