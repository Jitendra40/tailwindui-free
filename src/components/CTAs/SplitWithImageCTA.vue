<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white">
  <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity.<br>Start using our app today.</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="javascript:void(0)" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
          <a href="javascript:void(0)" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">â†’</span></a>
        </div>
      </div>
      <div class="relative mt-16 h-80 lg:mt-8">
        <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" alt="App screenshot" width="1824" height="1080">
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Split with Image CTA" description="Dark panel with screenshot." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
