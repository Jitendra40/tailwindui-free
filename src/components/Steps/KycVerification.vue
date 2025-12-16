<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- KYC Verification Flow -->
<div class="w-full">
  <nav aria-label="Progress">
    <ol role="list" class="overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm md:flex md:divide-y-0 md:divide-x divide-gray-200">
      
      <!-- Step 1: Verified -->
      <li class="relative md:flex md:flex-1">
        <a href="javascript:void(0)" class="group flex items-center w-full px-6 py-4 hover:bg-gray-50 transition-colors border-b md:border-b-0 border-gray-100">
          <div class="flex flex-col w-full">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-green-700">Personal Info</span>
              <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
            </div>
            <span class="text-xs text-gray-500 mt-1">Name, DOB, Gender</span>
          </div>
        </a>
      </li>

      <!-- Step 2: Verified -->
      <li class="relative md:flex md:flex-1">
        <a href="javascript:void(0)" class="group flex items-center w-full px-6 py-4 hover:bg-gray-50 transition-colors border-b md:border-b-0 border-gray-100">
          <div class="flex flex-col w-full">
             <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-green-700">PAN Verification</span>
              <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
            </div>
            <span class="text-xs text-gray-500 mt-1">Linked to Income Tax</span>
          </div>
        </a>
      </li>

      <!-- Step 3: Current -->
      <li class="relative md:flex md:flex-1">
        <a href="javascript:void(0)" class="group flex items-center w-full px-6 py-4 bg-indigo-50/30 border-b md:border-b-0 border-gray-100">
          <div class="flex flex-col w-full">
             <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-indigo-600">Aadhaar / Video KYC</span>
              <span class="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">In Progress</span>
            </div>
            <span class="text-xs text-gray-500 mt-1">Identity Proof</span>
          </div>
        </a>
      </li>

      <!-- Step 4: Pending -->
      <li class="relative md:flex md:flex-1">
        <a href="javascript:void(0)" class="group flex items-center w-full px-6 py-4 hover:bg-gray-50 transition-colors border-b md:border-b-0 border-gray-100">
          <div class="flex flex-col w-full">
             <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-500">Document Upload</span>
              <span class="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-600/10">Pending</span>
            </div>
            <span class="text-xs text-gray-500 mt-1">Signature, Photo</span>
          </div>
        </a>
      </li>

      <!-- Step 5: Pending -->
      <li class="relative md:flex md:flex-1">
        <a href="javascript:void(0)" class="group flex items-center w-full px-6 py-4 hover:bg-gray-50 transition-colors">
           <div class="flex flex-col w-full">
             <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-500">Approval</span>
              <span class="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-600/10">Pending</span>
            </div>
            <span class="text-xs text-gray-500 mt-1">Final check</span>
          </div>
        </a>
      </li>

    </ol>
  </nav>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="KYC Verification Flow"
    description="Linear progress with status badges."
    :html-block="htmlBlock"
  >
   <div v-html="htmlBlock"></div>
  </PreviewWrapper>
</template>
