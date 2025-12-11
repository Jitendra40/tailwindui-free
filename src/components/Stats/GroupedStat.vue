<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <h3 class="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>
  <dl class="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
    <div class="px-4 py-5 sm:p-6">
      <dt class="text-base font-normal text-gray-900">Total Subscribers</dt>
      <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
        <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
          71,897
          <span class="ml-2 text-sm font-medium text-gray-500">from 70,946</span>
        </div>
      </dd>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <dt class="text-base font-normal text-gray-900">Avg. Open Rate</dt>
      <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
        <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
          58.16%
          <span class="ml-2 text-sm font-medium text-gray-500">from 56.14%</span>
        </div>
      </dd>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <dt class="text-base font-normal text-gray-900">Avg. Click Rate</dt>
      <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
        <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
          24.57%
          <span class="ml-2 text-sm font-medium text-gray-500">from 28.62%</span>
        </div>
      </dd>
    </div>
  </dl>
</div>
`
</script>

<template>
  <PreviewWrapper title="Grouped Stats" description="Grid of stats with comparison data." :html-block="htmlBlock">
    <div>
      <h3 class="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>
      <dl class="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
        <div class="px-4 py-5 sm:p-6">
          <dt class="text-base font-normal text-gray-900">Total Subscribers</dt>
          <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
              71,897
              <span class="ml-2 text-sm font-medium text-gray-500">from 70,946</span>
            </div>
          </dd>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <dt class="text-base font-normal text-gray-900">Avg. Open Rate</dt>
          <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
              58.16%
              <span class="ml-2 text-sm font-medium text-gray-500">from 56.14%</span>
            </div>
          </dd>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <dt class="text-base font-normal text-gray-900">Avg. Click Rate</dt>
          <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
              24.57%
              <span class="ml-2 text-sm font-medium text-gray-500">from 28.62%</span>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </PreviewWrapper>
</template>
