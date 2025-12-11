<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class=" max-w-2xl mx-auto space-y-2">
      <details class="group rounded-lg border bg-gray-50 p-4  open:bg-white">
        <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-gray-900">
          What is Tailwind UI Free?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 text-gray-500 transition-transform duration-200 ease-in-out group-open:rotate-180" aria-hidden="true">
            <path fill="currentColor" d="m5.84 9.41l.71-.7L12 14.17l5.45-5.46l.71.7L12 15.59z" />
          </svg>
        </summary>
        <p class="mt-2 text-sm text-gray-600">A small set of ready-to-use Tailwind-styled components to kickstart layouts and examples.</p>
      </details>
      <details class="group rounded-lg border bg-gray-50 p-4  open:bg-white" open>
        <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-gray-900">
          Does it support Vue?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 text-gray-500 transition-transform duration-200 ease-in-out group-open:rotate-180" aria-hidden="true">
            <path fill="currentColor" d="m5.84 9.41l.71-.7L12 14.17l5.45-5.46l.71.7L12 15.59z" />
          </svg>
        </summary>
        <p class="mt-2 text-sm text-gray-600">Yes. These examples use Vue 3 single-file components plus utility classes.</p>
      </details>
    </div>`
</script>

<template>
  <PreviewWrapper
    title="Accordion"
    description="Simple native details/summary accordion with Tailwind borders and spacing."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="w-full max-w-2xl  mx-auto space-y-2">
      <details class="group rounded-lg border bg-gray-50 p-4  open:bg-white">
        <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-gray-900">
          What is Tailwind UI Free?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 text-gray-500 transition-transform duration-200 ease-in-out group-open:rotate-180" aria-hidden="true">
            <path fill="currentColor" d="m5.84 9.41l.71-.7L12 14.17l5.45-5.46l.71.7L12 15.59z" />
          </svg>
        </summary>
        <p class="mt-2 text-sm text-gray-600">A small set of ready-to-use Tailwind-styled components to kickstart layouts and examples.</p>
      </details>
      <details class="group rounded-lg border bg-gray-50 p-4  open:bg-white" open>
        <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-gray-900">
          Does it support Vue?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 text-gray-500 transition-transform duration-200 ease-in-out group-open:rotate-180" aria-hidden="true">
            <path fill="currentColor" d="m5.84 9.41l.71-.7L12 14.17l5.45-5.46l.71.7L12 15.59z" />
          </svg>
        </summary>
        <p class="mt-2 text-sm text-gray-600">Yes. These examples use Vue 3 single-file components plus utility classes.</p>
      </details>
    </div>
  </PreviewWrapper>
</template>
