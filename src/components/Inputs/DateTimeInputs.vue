<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
  <!-- Date of Birth -->
  <div>
    <label for="dob" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Date of Birth</label>
    <div class="relative">
      <input type="date" name="dob" id="dob" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>

  <!-- Empty column for layout -->
  <div class="hidden sm:block"></div>

  <!-- Start Date -->
  <div>
    <label for="start-date" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Start Date</label>
    <div class="relative">
      <input type="date" name="start-date" id="start-date" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>

  <!-- End Date -->
  <div>
    <label for="end-date" class="block text-sm font-medium leading-6 text-gray-900 mb-2">End Date</label>
    <div class="relative">
      <input type="date" name="end-date" id="end-date" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>

  <!-- Schedule Date -->
  <div>
    <label for="schedule-date" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Schedule Date</label>
    <div class="relative">
      <input type="datetime-local" name="schedule-date" id="schedule-date" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>

  <!-- Time Slot -->
  <div>
    <label for="time-slot" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Time Slot</label>
    <div class="relative">
      <input type="time" name="time-slot" id="time-slot" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Dates & Time"
    description="Pickers for dates, times, and scheduling."
    :html-block="htmlBlock"
  >

  </PreviewWrapper>
</template>
