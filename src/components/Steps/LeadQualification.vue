<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- Lead Qualification Funnel -->
<div class="w-full">
  <nav aria-label="Progress">
    <ol role="list" class="flex flex-col sm:flex-row sm:items-center">
      
      <!-- Step 1: Complete -->
      <li class="relative w-full pb-8 sm:pb-0 sm:pr-8 md:pr-20">
        <div class="hidden sm:block absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-1 w-full bg-indigo-600 rounded-full"></div>
        </div>
        <!-- Mobile Connector -->
        <div class="sm:hidden absolute left-4 top-4 -ml-px h-full w-0.5 bg-indigo-600" aria-hidden="true"></div>
        
        <a href="#" class="relative flex items-center sm:justify-center group">
          <span class="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-colors z-10 ring-8 ring-white sm:ring-0">
            <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          </span>
          <span class="ml-4 min-w-0 flex flex-col sm:absolute sm:-bottom-8 sm:ml-0 sm:w-max sm:items-center">
             <span class="text-sm font-medium text-indigo-600">Lead Captured</span>
          </span>
        </a>
      </li>

      <!-- Step 2: Complete -->
      <li class="relative w-full pb-8 sm:pb-0 sm:pr-8 md:pr-20">
         <div class="hidden sm:block absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-1 w-full bg-indigo-600 rounded-full"></div>
        </div>
        <!-- Mobile Connector -->
        <div class="sm:hidden absolute left-4 top-4 -ml-px h-full w-0.5 bg-indigo-600" aria-hidden="true"></div>

        <a href="#" class="relative flex items-center sm:justify-center group">
          <span class="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-colors z-10 ring-8 ring-white sm:ring-0">
            <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          </span>
           <span class="ml-4 min-w-0 flex flex-col sm:absolute sm:-bottom-8 sm:ml-0 sm:w-max sm:items-center">
             <span class="text-sm font-medium text-indigo-600">Contacted</span>
          </span>
        </a>
      </li>

      <!-- Step 3: Current -->
      <li class="relative w-full pb-8 sm:pb-0 sm:pr-8 md:pr-20">
         <div class="hidden sm:block absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-1 w-full bg-gray-200 rounded-full">
            <div class="h-1 w-1/2 bg-indigo-600 rounded-full"></div>
          </div>
        </div>
         <!-- Mobile Connector -->
        <div class="sm:hidden absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>

        <a href="#" class="relative flex items-center sm:justify-center group">
          <span class="h-8 w-8 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center z-10 ring-8 ring-white sm:ring-0">
            <span class="h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
          </span>
           <span class="ml-4 min-w-0 flex flex-col sm:absolute sm:-bottom-8 sm:ml-0 sm:w-max sm:items-center">
             <span class="text-sm font-bold text-indigo-600">Qualified</span>
          </span>
        </a>
      </li>

      <!-- Step 4: Upcoming -->
      <li class="relative w-full pb-8 sm:pb-0 sm:pr-8 md:pr-20">
         <div class="hidden sm:block absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-1 w-full bg-gray-200 rounded-full"></div>
        </div>
         <!-- Mobile Connector -->
        <div class="sm:hidden absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>

        <a href="#" class="relative flex items-center sm:justify-center group">
          <span class="h-8 w-8 rounded-full bg-white border-2 border-gray-300 hover:border-gray-400 transition-colors flex items-center justify-center z-10 ring-8 ring-white sm:ring-0">
             <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
          </span>
          <span class="ml-4 min-w-0 flex flex-col sm:absolute sm:-bottom-8 sm:ml-0 sm:w-max sm:items-center">
             <span class="text-sm font-medium text-gray-500">Site Visit</span>
          </span>
        </a>
      </li>

      <!-- Step 5: Upcoming -->
      <li class="relative sm:w-auto">
        <a href="#" class="relative flex items-center sm:justify-center group">
          <span class="h-8 w-8 rounded-full bg-white border-2 border-gray-300 hover:border-gray-400 transition-colors flex items-center justify-center z-10 ring-8 ring-white sm:ring-0">
             <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
          </span>
          <span class="ml-4 min-w-0 flex flex-col sm:absolute sm:-bottom-8 sm:ml-0 sm:w-max sm:items-center">
             <span class="text-sm font-medium text-gray-500">Closed</span>
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
    title="Lead Qualification Funnel"
    description="Pipeline style progress bar."
    :html-block="htmlBlock"
  >
   <div v-html="htmlBlock"></div>
  </PreviewWrapper>
</template>
