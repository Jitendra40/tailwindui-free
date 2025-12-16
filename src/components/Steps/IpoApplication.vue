<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- IPO Application Flow -->
<nav aria-label="Progress" class="w-full">
  <ol role="list" class="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white md:flex md:divide-y-0 shadow-sm">
    
    <!-- Step 1: Complete -->
    <li class="relative md:flex md:flex-1">
      <a href="javascript:void(0)" class="group flex w-full items-center">
        <span class="flex items-center px-4 py-3 sm:px-6 sm:py-4 text-sm font-medium">
          <span class="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
            <svg class="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
          <span class="ml-3 sm:ml-4 text-sm font-medium text-gray-900">Investor Details</span>
        </span>
      </a>
      <!-- Arrow Separator -->
      <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
        <svg class="h-full w-full text-gray-200" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>
      </div>
    </li>

    <!-- Step 2: Current -->
    <li class="relative md:flex md:flex-1">
      <a href="javascript:void(0)" class="flex items-center px-4 py-3 sm:px-6 sm:py-4 text-sm font-medium" aria-current="step">
        <span class="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
          <span class="text-indigo-600 font-bold">02</span>
        </span>
        <span class="ml-3 sm:ml-4 text-sm font-medium text-indigo-600">Demat & Bank</span>
      </a>
      <!-- Arrow Separator -->
      <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
        <svg class="h-full w-full text-gray-200" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>
      </div>
    </li>

    <!-- Step 3: Upcoming -->
    <li class="relative md:flex md:flex-1">
      <a href="javascript:void(0)" class="group flex items-center">
        <span class="flex items-center px-4 py-3 sm:px-6 sm:py-4 text-sm font-medium">
          <span class="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-200 group-hover:border-gray-300 transition-colors">
            <span class="text-gray-500 group-hover:text-gray-700">03</span>
          </span>
          <span class="ml-3 sm:ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-700">Bid Details</span>
        </span>
      </a>
      <!-- Arrow Separator -->
      <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
        <svg class="h-full w-full text-gray-200" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>
      </div>
    </li>

    <!-- Step 4: Upcoming -->
    <li class="relative md:flex md:flex-1">
      <a href="javascript:void(0)" class="group flex items-center">
        <span class="flex items-center px-4 py-3 sm:px-6 sm:py-4 text-sm font-medium">
          <span class="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-200 group-hover:border-gray-300 transition-colors">
            <span class="text-gray-500 group-hover:text-gray-700">04</span>
          </span>
          <span class="ml-3 sm:ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-700">Review</span>
        </span>
      </a>
      <!-- Arrow Separator -->
      <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
        <svg class="h-full w-full text-gray-200" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>
      </div>
    </li>

    <!-- Step 5: Upcoming -->
    <li class="relative md:flex md:flex-1">
      <a href="javascript:void(0)" class="group flex items-center">
        <span class="flex items-center px-4 py-3 sm:px-6 sm:py-4 text-sm font-medium">
          <span class="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-200 group-hover:border-gray-300 transition-colors">
            <span class="text-gray-500 group-hover:text-gray-700">05</span>
          </span>
          <span class="ml-3 sm:ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-700">Confirm</span>
        </span>
      </a>
    </li>

  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper
    title="IPO Application Flow"
    description="Horizontal steps with checkmarks for completion."
    :html-block="htmlBlock"
  >
    <div v-html="htmlBlock"></div>
  </PreviewWrapper>
</template>
