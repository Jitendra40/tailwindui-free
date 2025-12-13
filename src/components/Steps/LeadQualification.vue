<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- Lead Qualification Funnel -->
<div class="w-full overflow-x-auto py-8 px-4">
  <nav aria-label="Progress" class="min-w-[640px] xl:min-w-0">
    <ol role="list" class="flex items-center">
      
      <!-- Step 1: Complete -->
      <li class="relative w-full pr-8 sm:pr-20">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-1 w-full bg-indigo-600 rounded-full"></div>
        </div>
        <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors">
          <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          <span class="absolute -bottom-8 w-max text-sm font-medium text-indigo-600">Lead Captured</span>
        </a>
      </li>

      <!-- Step 2: Complete -->
      <li class="relative w-full pr-8 sm:pr-20">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-1 w-full bg-indigo-600 rounded-full"></div>
        </div>
        <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors">
          <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          <span class="absolute -bottom-8 w-max text-sm font-medium text-indigo-600">Contacted</span>
        </a>
      </li>

      <!-- Step 3: Current -->
      <li class="relative w-full pr-8 sm:pr-20">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-1 w-full bg-gray-200 rounded-full">
            <div class="h-1 w-1/2 bg-indigo-600 rounded-full"></div>
          </div>
        </div>
        <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-indigo-600">
          <span class="h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
          <span class="absolute -bottom-8 w-max text-sm font-bold text-indigo-600">Qualified</span>
        </a>
      </li>

      <!-- Step 4: Upcoming -->
      <li class="relative w-full pr-8 sm:pr-20">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-1 w-full bg-gray-200 rounded-full"></div>
        </div>
        <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-gray-300 hover:border-gray-400 transition-colors">
          <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
          <span class="absolute -bottom-8 w-max text-sm font-medium text-gray-500">Site Visit</span>
        </a>
      </li>

      <!-- Step 5: Upcoming -->
      <li class="relative">
        <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-gray-300 hover:border-gray-400 transition-colors">
          <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
          <span class="absolute -bottom-8 w-max text-sm font-medium text-gray-500">Closed</span>
        </a>
      </li>

    </ol>
  </nav>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Lead Qualification Funnel"
    description="Pipeline style progress bar."
    :html-block="htmlBlock"
  >
   <div v-html="htmlBlock"></div>
  </PreviewWrapper>
</template>
