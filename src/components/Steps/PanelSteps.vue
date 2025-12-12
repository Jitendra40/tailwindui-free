<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Progress">
  <ol role="list" class="divide-y divide-gray-300 rounded-xl border border-gray-300 md:flex md:divide-y-0 overflow-hidden bg-white shadow-sm">
      <!-- Step 1: Completed -->
    <li class="relative md:flex md:flex-1">
      <a href="#" class="group flex w-full items-center">
        <span class="flex items-center px-6 py-4 text-sm font-medium">
          <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800 transition-colors">
            <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
            </svg>
          </span>
          <span class="ml-4 text-sm font-medium text-gray-900">Job Details</span>
        </span>
      </a>
    </li>

    <!-- Step 2: Current -->
    <li class="relative md:flex md:flex-1">
      <a href="#" class="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
        <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
          <span class="text-indigo-600">02</span>
        </span>
        <span class="ml-4 text-sm font-medium text-indigo-600">Application Form</span>
      </a>
       <!-- Arrow for larger screens -->
       <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
         <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
              <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
          </svg>
      </div>
    </li>

    <!-- Step 3: Upcoming -->
    <li class="relative md:flex md:flex-1">
      <a href="#" class="group flex items-center">
        <span class="flex items-center px-6 py-4 text-sm font-medium">
          <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
            <span class="text-gray-500 group-hover:text-gray-900">03</span>
          </span>
          <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Preview</span>
        </span>
      </a>
      <!-- Separator for previous step visual logic if needed -->
        <div class="absolute left-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
             <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                  <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
            </svg>
      </div>
    </li>
  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper title="Panel Steps" description="Full-width interconnected panels." :html-block="htmlBlock">
    <nav aria-label="Progress">
      <ol role="list" class="divide-y divide-gray-300 rounded-xl border border-gray-300 md:flex md:divide-y-0 overflow-hidden bg-white shadow-sm">
          <!-- Step 1: Completed -->
        <li class="relative md:flex md:flex-1">
          <a href="#" class="group flex w-full items-center">
            <span class="flex items-center px-6 py-4 text-sm font-medium">
              <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800 transition-colors">
                <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                </svg>
              </span>
              <span class="ml-4 text-sm font-medium text-gray-900">Job Details</span>
            </span>
          </a>
          <!-- Arrow visual - we apply to next items usually, or use a background separator strategy. Here, a simple right border logic via divide is cleaner, but SVG arrows look 'premium'. -->
           <div class="absolute right-0 top-0 hidden h-full w-5 md:block z-10" aria-hidden="true">
             <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                  <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
              </svg>
          </div>
        </li>

        <!-- Step 2: Current -->
        <li class="relative md:flex md:flex-1">
          <a href="#" class="flex items-center px-6 py-4 text-sm font-medium transition-colors hover:bg-indigo-50/50" aria-current="step">
            <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
              <span class="text-indigo-600 font-bold">02</span>
            </span>
            <span class="ml-4 text-sm font-medium text-indigo-600">Application Form</span>
          </a>
           <div class="absolute right-0 top-0 hidden h-full w-5 md:block z-10" aria-hidden="true">
             <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                  <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
              </svg>
          </div>
        </li>

        <!-- Step 3: Upcoming -->
        <li class="relative md:flex md:flex-1">
          <a href="#" class="group flex items-center">
            <span class="flex items-center px-6 py-4 text-sm font-medium">
              <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400 transition-colors">
                <span class="text-gray-500 group-hover:text-gray-900">03</span>
              </span>
              <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Preview</span>
            </span>
          </a>
        </li>
      </ol>
    </nav>
  </PreviewWrapper>
</template>
