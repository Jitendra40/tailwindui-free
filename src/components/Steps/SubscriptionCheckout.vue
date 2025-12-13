<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- Subscription Checkout Flow -->
<nav aria-label="Progress">
  <ol role="list" class="space-y-6 md:flex md:space-x-8 md:space-y-0">
    
    <!-- Step 1: Complete -->
    <li class="md:flex-1">
      <a href="#" class="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 transition-all hover:bg-gray-50/50 rounded-r-lg md:rounded-r-none md:rounded-b-lg">
        <span class="text-xs font-semibold uppercase tracking-wide text-indigo-600">Step 1</span>
        <span class="text-sm font-medium text-gray-900 mt-0.5">Plan Selection</span>
      </a>
    </li>

    <!-- Step 2: Current -->
    <li class="md:flex-1">
      <a href="#" class="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 bg-indigo-50/20 rounded-r-lg md:rounded-r-none md:rounded-b-lg" aria-current="step">
        <span class="text-xs font-semibold uppercase tracking-wide text-indigo-600">Step 2</span>
        <span class="text-sm font-bold text-indigo-900 mt-0.5">Account Setup</span>
      </a>
    </li>

    <!-- Step 3: Upcoming -->
    <li class="md:flex-1">
      <a href="#" class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 transition-all hover:bg-gray-50 rounded-r-lg md:rounded-r-none md:rounded-b-lg">
        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 group-hover:text-gray-700">Step 3</span>
        <span class="text-sm font-medium text-gray-500 group-hover:text-gray-900 mt-0.5">Payment</span>
      </a>
    </li>

    <!-- Step 4: Upcoming -->
    <li class="md:flex-1">
      <a href="#" class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 transition-all hover:bg-gray-50 rounded-r-lg md:rounded-r-none md:rounded-b-lg">
        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 group-hover:text-gray-700">Step 4</span>
        <span class="text-sm font-medium text-gray-500 group-hover:text-gray-900 mt-0.5">Review</span>
      </a>
    </li>

    <!-- Step 5: Upcoming -->
    <li class="md:flex-1">
      <a href="#" class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 transition-all hover:bg-gray-50 rounded-r-lg md:rounded-r-none md:rounded-b-lg">
        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 group-hover:text-gray-700">Step 5</span>
        <span class="text-sm font-medium text-gray-500 group-hover:text-gray-900 mt-0.5">Activation</span>
      </a>
    </li>

  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper
    title="Subscription Checkout Flow"
    description="Compact steps with numbers."
    :html-block="htmlBlock"
  >
    <div v-html="htmlBlock"></div>
  </PreviewWrapper>
</template>
