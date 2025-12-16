<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap items-center gap-4">
  <!-- Get Started -->
  <button class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gray-800 hover:shadow-md hover:ring-2 hover:ring-gray-900/20 active:scale-95">
    Get Started
  </button>

  <!-- Learn More -->
  <button class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 active:scale-95">
    Learn More
  </button>

  <!-- View Details -->
  <button class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg text-sm font-semibold text-blue-600 transition-all hover:text-blue-700 hover:bg-blue-50 px-4 py-2">
    View Details
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
    </svg>
  </button>

  <!-- Try Demo -->
  <button class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-500 hover:shadow-md hover:shadow-orange-500/20 active:scale-95">
    Try Demo
  </button>

  <!-- Schedule Demo -->
  <button class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-100 hover:border-blue-300 active:scale-95">
     <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
     </svg>
    Schedule Demo
  </button>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Engagement & CTA"
    description="Buttons designed to encourage user interaction and clicks."
    :html-block="htmlBlock"
  >
  
  </PreviewWrapper>
</template>
