<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
  <dt class="truncate text-sm font-medium text-gray-500">Avg. Open Rate</dt>
  <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
    <div class="flex items-baseline text-3xl font-semibold text-gray-900">
      58.16%
      <span class="ml-2 text-sm font-medium text-gray-500">from 56.14%</span>
    </div>

    <div class="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
          <svg class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 7h10v10"/>
              <path d="M7 17 17 7"/>
          </svg>
      <span class="sr-only">Increased by</span>
      2.02%
    </div>
  </dd>
</div>
`
</script>

<template>
  <PreviewWrapper title="Stat with Trend" description="Stat card showing trend direction." :html-block="htmlBlock">
    <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <dt class="truncate text-sm font-medium text-gray-500">Avg. Open Rate</dt>
      <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
        <div class="flex items-baseline text-3xl font-semibold text-gray-900">
          58.16%
          <span class="ml-2 text-sm font-medium text-gray-500">from 56.14%</span>
        </div>

        <div class="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
              <svg class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 7h10v10"/>
                  <path d="M7 17 17 7"/>
              </svg>
          <span class="sr-only">Increased by</span>
          2.02%
        </div>
      </dd>
    </div>
  </PreviewWrapper>
</template>
