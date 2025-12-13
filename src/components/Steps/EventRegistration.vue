<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- Event Registration & Ticketing -->
<div class="w-full">
  <div class="flex items-center justify-between mb-2">
    <h4 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Registration Progress</h4>
    <span class="text-sm font-medium text-indigo-600">Step 3 of 5</span>
  </div>
  
  <div aria-hidden="true">
    <div class="overflow-hidden rounded-full bg-gray-100 h-2">
      <div class="h-2 rounded-full bg-indigo-600 w-3/5 transition-all duration-300"></div>
    </div>
    
    <div class="mt-6 grid grid-cols-5 text-sm font-medium text-gray-500">
      
      <!-- Step 1 Complete -->
      <div class="text-center group cursor-default">
        <span class="text-indigo-600 font-bold block mb-1">✓</span>
        <span class="hidden sm:inline text-indigo-900 font-medium">Ticket Type</span>
        <span class="sm:hidden text-indigo-900 font-medium">Step 1</span>
      </div>
      
      <!-- Step 2 Complete -->
      <div class="text-center group cursor-default">
        <span class="text-indigo-600 font-bold block mb-1">✓</span>
        <span class="hidden sm:inline text-indigo-900 font-medium">Attendee</span>
        <span class="sm:hidden text-indigo-900 font-medium">Step 2</span>
      </div>
      
      <!-- Step 3 Current -->
      <div class="text-center relative">
        <span class="absolute -top-[34px] left-1/2 -ml-2 h-4 w-4 rounded-full border-2 border-white bg-indigo-600 shadow-sm z-10"></span>
        <span class="text-indigo-600 font-bold block mb-1">•</span>
        <span class="hidden sm:inline text-indigo-600 font-bold">Add-ons</span>
        <span class="sm:hidden text-indigo-600 font-bold">Step 3</span>
      </div>
      
      <!-- Step 4 Upcoming -->
      <div class="text-center">
        <span class="text-gray-300 font-bold block mb-1">•</span>
        <span class="hidden sm:inline">Payment</span>
        <span class="sm:hidden">Step 4</span>
      </div>
      
      <!-- Step 5 Upcoming -->
      <div class="text-center">
        <span class="text-gray-300 font-bold block mb-1">•</span>
        <span class="hidden sm:inline">Confirmation</span>
        <span class="sm:hidden">Step 5</span>
      </div>
      
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
