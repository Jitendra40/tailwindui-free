<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- Event Registration & Ticketing -->
<div class="w-full">
  <div class="flex items-center justify-between mb-2">
    <h4 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Registration Progress</h4>
    <span class="text-sm font-medium text-indigo-600">Step 3 of 5</span>
  </div>
  
  <div aria-hidden="true" class="mb-6">
    <div class="overflow-hidden rounded-full bg-gray-100 h-2">
      <div class="h-2 rounded-full bg-indigo-600 w-3/5 transition-all duration-300"></div>
    </div>
  </div>
  
  <div class="grid grid-cols-1 sm:grid-cols-5 text-sm font-medium text-gray-500 gap-4 sm:gap-0">
    
    <!-- Step 1 Complete -->
    <div class="flex items-center sm:block sm:text-center group cursor-default">
      <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mb-0 sm:mb-1 mr-3 sm:mr-0 sm:mx-auto">✓</span>
      <div class="text-left sm:text-center">
         <span class="block text-indigo-900 font-bold sm:font-medium">Ticket Type</span>
         <span class="text-xs text-gray-400 sm:hidden">Completed</span>
      </div>
    </div>
    
    <!-- Step 2 Complete -->
    <div class="flex items-center sm:block sm:text-center group cursor-default">
      <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mb-0 sm:mb-1 mr-3 sm:mr-0 sm:mx-auto">✓</span>
      <div class="text-left sm:text-center">
        <span class="block text-indigo-900 font-bold sm:font-medium">Attendee</span>
        <span class="text-xs text-gray-400 sm:hidden">Completed</span>
      </div>
    </div>
    
    <!-- Step 3 Current -->
    <div class="flex items-center sm:block sm:text-center relative">
       <span class="hidden sm:block absolute -top-[34px] left-1/2 -ml-2 h-4 w-4 rounded-full border-2 border-white bg-indigo-600 shadow-sm z-10"></span>
      <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold mb-0 sm:mb-1 mr-3 sm:mr-0 sm:mx-auto shadow-sm sm:shadow-none sm:bg-transparent sm:text-indigo-600 sm:h-auto sm:w-auto sm:block sm:static">•</span>
      <div class="text-left sm:text-center">
        <span class="block text-indigo-600 font-bold">Add-ons</span>
        <span class="text-xs text-indigo-500 sm:hidden">In Progress</span>
      </div>
    </div>
    
    <!-- Step 4 Upcoming -->
    <div class="flex items-center sm:block sm:text-center opacity-50 sm:opacity-100">
      <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-300 font-bold mb-0 sm:mb-1 mr-3 sm:mr-0 sm:mx-auto sm:border-0 sm:h-auto sm:w-auto sm:block">•</span>
      <span class="block sm:inline">Payment</span>
    </div>
    
    <!-- Step 5 Upcoming -->
    <div class="flex items-center sm:block sm:text-center opacity-50 sm:opacity-100">
      <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-300 font-bold mb-0 sm:mb-1 mr-3 sm:mr-0 sm:mx-auto sm:border-0 sm:h-auto sm:w-auto sm:block">•</span>
      <span class="block sm:inline">Confirmation</span>
    </div>
    
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Event Registration & Ticketing"
    description="Minimal progress bar focusing on payment flow."
    :html-block="htmlBlock"
  >
    <div v-html="htmlBlock"></div>
  </PreviewWrapper>
</template>
