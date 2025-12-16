<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- Job Application Process -->
<nav aria-label="Progress">
  <ol role="list" class="overflow-hidden">
    
    <!-- Step 1: Complete -->
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-indigo-600" aria-hidden="true"></div>
      <a href="javascript:void(0)" class="group relative flex items-start">
        <span class="flex h-9 items-center">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-700 transition-colors shadow-sm">
            <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col pt-1">
          <span class="text-sm font-bold text-gray-900">Profile Info</span>
          <span class="text-sm text-gray-500 mt-1">Personal details and contact info</span>
        </span>
      </a>
    </li>

    <!-- Step 2: Complete -->
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
      <a href="javascript:void(0)" class="group relative flex items-start">
        <span class="flex h-9 items-center">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-700 transition-colors shadow-sm">
            <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col pt-1">
          <span class="text-sm font-bold text-gray-900">Resume Upload</span>
          <span class="text-sm text-gray-500 mt-1">Upload CV and Cover Letter</span>
        </span>
      </a>
    </li>

    <!-- Step 3: Current -->
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
      <a href="javascript:void(0)" class="group relative flex items-start" aria-current="step">
        <span class="flex h-9 items-center" aria-hidden="true">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white ring-4 ring-indigo-50">
            <span class="h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col pt-1">
          <span class="text-sm font-bold text-indigo-600">Screening Questions</span>
          <span class="text-sm text-gray-500 mt-1">Answer role-specific questions</span>
        </span>
      </a>
    </li>

    <!-- Step 4: Upcoming -->
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
      <a href="javascript:void(0)" class="group relative flex items-start">
        <span class="flex h-9 items-center" aria-hidden="true">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-white group-hover:border-gray-300 transition-colors">
            <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-200"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col pt-1">
          <span class="text-sm font-medium text-gray-500">Review</span>
          <span class="text-sm text-gray-500 mt-1">Review your application</span>
        </span>
      </a>
    </li>

    <!-- Step 5: Upcoming -->
    <li class="relative">
      <a href="javascript:void(0)" class="group relative flex items-start">
        <span class="flex h-9 items-center" aria-hidden="true">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-white group-hover:border-gray-300 transition-colors">
            <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-200"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col pt-1">
          <span class="text-sm font-medium text-gray-500">Submit</span>
          <span class="text-sm text-gray-500 mt-1">Final submission</span>
        </span>
      </a>
    </li>

  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper
    title="Job Application Process"
    description="Vertical stepper for long forms."
    :html-block="htmlBlock"
  >
     <div v-html="htmlBlock"></div>
  </PreviewWrapper>
</template>
