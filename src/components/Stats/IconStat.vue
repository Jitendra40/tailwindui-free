<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="overflow-hidden rounded-lg bg-white shadow">
  <div class="p-5">
    <div class="flex items-center">
      <div class="flex-shrink-0">
          <div class="rounded-md bg-indigo-500 p-3">
            <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
      </div>
      <div class="ml-5 w-0 flex-1">
        <dl>
          <dt class="truncate text-sm font-medium text-gray-500">Active Users</dt>
          <dd>
            <div class="text-lg font-medium text-gray-900">24,561</div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
  <div class="bg-gray-50 px-5 py-3">
    <div class="text-sm">
      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">View all</a>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Stat with Icon" description="Stat card with an iconic representation." :html-block="htmlBlock">
    <div class="overflow-hidden rounded-lg bg-white shadow">
      <div class="p-5">
        <div class="flex items-center">
          <div class="flex-shrink-0">
              <div class="rounded-md bg-indigo-500 p-3">
                <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
          </div>
          <div class="ml-5 w-0 flex-1">
            <dl>
              <dt class="truncate text-sm font-medium text-gray-500">Active Users</dt>
              <dd>
                <div class="text-lg font-medium text-gray-900">24,561</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-5 py-3">
        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">View all</a>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
