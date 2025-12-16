<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- Course Enrollment (EdTech) -->
<div class="w-full">
  <nav aria-label="Progress">
    <ol role="list" class="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white md:flex md:divide-y-0 shadow-sm">
      
      <!-- Step 1: Complete -->
      <li class="relative md:flex md:flex-1">
        <a href="javascript:void(0)" class="group flex w-full items-center">
          <span class="flex items-center px-6 py-4 text-sm font-medium">
            <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </span>
            <span class="ml-4 text-sm font-medium text-gray-900">Course Overview</span>
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
        <a href="javascript:void(0)" class="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
          <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600 bg-indigo-50">
            <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </span>
          <span class="ml-4 text-sm font-medium text-indigo-600">Choose Batch</span>
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
          <span class="flex items-center px-6 py-4 text-sm font-medium">
            <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-200 group-hover:border-gray-300 transition-colors">
              <svg class="h-6 w-6 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </span>
            <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Personal Info</span>
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
          <span class="flex items-center px-6 py-4 text-sm font-medium">
            <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-200 group-hover:border-gray-300 transition-colors">
              <svg class="h-6 w-6 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
            </span>
            <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Payment</span>
          </span>
        </a>
      </li>

      <!-- Step 5: Upcoming -->
      <li class="relative md:flex md:flex-1">
        <a href="javascript:void(0)" class="group flex items-center">
          <span class="flex items-center px-6 py-4 text-sm font-medium">
            <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-200 group-hover:border-gray-300 transition-colors">
              <svg class="h-6 w-6 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Access</span>
          </span>
        </a>
      </li>

    </ol>
  </nav>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Course Enrollment (EdTech)"
    description="Icon-based steps for friendly onboarding."
    :html-block="htmlBlock"
  >
    <div v-html="htmlBlock"></div>
  </PreviewWrapper>
</template>
