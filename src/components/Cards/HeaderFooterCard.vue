<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="divide-y divide-gray-200 rounded-lg bg-white shadow sm:w-full sm:max-w-md">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-base font-semibold leading-6 text-gray-900">Members</h3>
    <p class="mt-1 text-sm text-gray-500">Check the status of your team members.</p>
  </div>
  <div class="px-4 py-5 sm:p-6">
    <!-- Content goes here -->
    <p class="text-sm text-gray-500">Body content area...</p>
  </div>
  <div class="px-4 py-4 sm:px-6">
    <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">View all members <span aria-hidden="true">&rarr;</span></a>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Header and Footer Card" description="Card with defined header and footer sections." :html-block="htmlBlock">
    <div class="divide-y divide-gray-200 rounded-lg bg-white shadow sm:w-full sm:max-w-md">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-base font-semibold leading-6 text-gray-900">Members</h3>
        <p class="mt-1 text-sm text-gray-500">Check the status of your team members.</p>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <!-- Content goes here -->
        <p class="text-sm text-gray-500">Body content area...</p>
      </div>
      <div class="px-4 py-4 sm:px-6">
        <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">View all members <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </PreviewWrapper>
</template>
