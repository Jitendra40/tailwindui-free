<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white">
  <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to dive in?<br>Start your free trial today.</h2>
    <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
      <a href="javascript:void(0)" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
      <a href="javascript:void(0)" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">â†’</span></a>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Justified CTA" description="CTA with text on left and buttons on right." :html-block="htmlBlock">
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to dive in?<br>Start your free trial today.</h2>
        <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a href="javascript:void(0)" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="javascript:void(0)" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">â†’</span></a>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
