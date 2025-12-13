<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- Real Estate Site Visit Scheduling -->
<div class="flow-root max-w-xl mx-auto w-full">
  <ul role="list" class="-mb-8">
    
    <!-- Step 1: Complete -->
    <li>
      <div class="relative pb-8">
        <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white shadow-sm">
              <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 align-middle">
            <div>
              <p class="text-sm font-semibold text-gray-900">Select Property</p>
            </div>
            <div class="whitespace-nowrap text-right text-sm text-gray-500">
              <span class="text-green-600 font-medium">Oct 20, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </li>

    <!-- Step 2: Complete -->
    <li>
      <div class="relative pb-8">
        <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white shadow-sm">
              <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 align-middle">
            <div>
              <p class="text-sm font-semibold text-gray-900">Choose Date</p>
            </div>
            <div class="whitespace-nowrap text-right text-sm text-gray-500">
              <span class="text-green-600 font-medium">Oct 21, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </li>

    <!-- Step 3: Current -->
    <li>
      <div class="relative pb-8">
        <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white shadow-[0_0_0_4px_rgba(59,130,246,0.3)]">
               <div class="h-2 w-2 rounded-full bg-white animate-pulse" aria-hidden="true"></div>
            </span>
          </div>
          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 align-middle">
            <div>
              <p class="text-sm font-bold text-gray-900">Assign Agent</p>
            </div>
            <div class="whitespace-nowrap text-right text-sm text-gray-500">
              <span class="text-blue-600 font-medium">In Progress</span>
            </div>
          </div>
        </div>
      </div>
    </li>

    <!-- Step 4: Pending -->
    <li>
      <div class="relative pb-8">
        <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-white border border-gray-200">
               <span class="h-2.5 w-2.5 rounded-full bg-gray-400" aria-hidden="true"></span>
            </span>
          </div>
          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 align-middle">
            <div>
              <p class="text-sm font-medium text-gray-500">Confirm Visit</p>
            </div>
            <div class="whitespace-nowrap text-right text-sm text-gray-500">
              <span class="text-gray-400">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </li>

    <!-- Step 5: Pending -->
    <li>
      <div class="relative">
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-white border border-gray-200">
               <span class="h-2.5 w-2.5 rounded-full bg-gray-400" aria-hidden="true"></span>
            </span>
          </div>
          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 align-middle">
            <div>
              <p class="text-sm font-medium text-gray-500">Visit Completed</p>
            </div>
            <div class="whitespace-nowrap text-right text-sm text-gray-500">
              <span class="text-gray-400">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </li>

  </ul>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Real Estate Site Visit Scheduling"
    description="Timeline stepper with dates and color coded status."
    :html-block="htmlBlock"
  >
    <div v-html="htmlBlock"></div>
  </PreviewWrapper>
</template>
