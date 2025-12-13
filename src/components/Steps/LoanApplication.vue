<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- Loan Application Flow -->
<div class="w-full">
  <div class="mb-4 flex items-center justify-between">
    <div>
      <h3 class="text-lg font-medium leading-6 text-gray-900">Loan Application &bull; Income Details</h3>
      <p class="text-sm text-gray-500 mt-1">Please provide your employment and income information.</p>
    </div>
    <div class="text-right">
         <span class="text-2xl font-bold text-indigo-600">60%</span>
         <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">Completed</p>
    </div>
  </div>
  
  <!-- Progress Bar -->
  <div class="relative h-2 rounded-full bg-gray-100 mb-8 overflow-hidden">
    <div class="absolute left-0 top-0 h-full rounded-full bg-indigo-600 w-[60%] shadow-[0_0_10px_rgba(79,70,229,0.3)]"></div>
  </div>

  <!-- Steps Indicator -->
  <div class="w-full">
     <ol role="list" class="flex flex-col sm:flex-row sm:justify-between w-full gap-4 sm:gap-0">
      
      <!-- Step 1: Complete -->
      <li class="flex items-center sm:flex-col sm:items-center sm:text-center w-full">
         <div class="flex-shrink-0 mb-0 sm:mb-2 h-4 w-4 sm:h-3 sm:w-3 rounded-full bg-indigo-600 shadow-sm ring-4 ring-white mr-3 sm:mr-0"></div>
         <span class="text-sm sm:text-xs font-bold uppercase tracking-wide text-indigo-600">Eligibility Check</span>
      </li>

      <!-- Step 2: Complete -->
      <li class="flex items-center sm:flex-col sm:items-center sm:text-center w-full">
         <div class="flex-shrink-0 mb-0 sm:mb-2 h-4 w-4 sm:h-3 sm:w-3 rounded-full bg-indigo-600 shadow-sm ring-4 ring-white mr-3 sm:mr-0"></div>
         <span class="text-sm sm:text-xs font-bold uppercase tracking-wide text-indigo-600">Personal Details</span>
      </li>

      <!-- Step 3: Current -->
      <li class="flex items-center sm:flex-col sm:items-center sm:text-center w-full">
         <div class="flex-shrink-0 mb-0 sm:mb-2 h-4 w-4 sm:h-3 sm:w-3 rounded-full bg-indigo-600 shadow-sm ring-4 ring-indigo-50 mr-3 sm:mr-0"></div>
         <span class="text-sm sm:text-xs font-bold uppercase tracking-wide text-indigo-600">Income Details</span>
      </li>

      <!-- Step 4: Upcoming -->
      <li class="flex items-center sm:flex-col sm:items-center sm:text-center w-full opacity-50 sm:opacity-100">
         <div class="flex-shrink-0 mb-0 sm:mb-2 h-4 w-4 sm:h-3 sm:w-3 rounded-full bg-gray-200 shadow-sm ring-4 ring-white mr-3 sm:mr-0"></div>
         <span class="text-sm sm:text-xs font-semibold uppercase tracking-wide text-gray-400">Offer Selection</span>
      </li>

      <!-- Step 5: Upcoming -->
      <li class="flex items-center sm:flex-col sm:items-center sm:text-center w-full opacity-50 sm:opacity-100">
         <div class="flex-shrink-0 mb-0 sm:mb-2 h-4 w-4 sm:h-3 sm:w-3 rounded-full bg-gray-200 shadow-sm ring-4 ring-white mr-3 sm:mr-0"></div>
         <span class="text-sm sm:text-xs font-semibold uppercase tracking-wide text-gray-400">Disbursal</span>
      </li>

     </ol>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Loan Application Flow"
    description="Step + progress percentage."
    :html-block="htmlBlock"
  >
   <div v-html="htmlBlock"></div>
  </PreviewWrapper>
</template>
