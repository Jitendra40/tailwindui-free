<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="bg-indigo-600 min-h-screen">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
            <span class="text-white font-bold text-xl">AppLaunch</span>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <a href="#" class="text-sm font-semibold leading-6 text-white">Features</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Reviews</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Download</a>
        </div>
    </nav>
  </header>

  <div class="relative isolate pt-14">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
        <div class="flex">
          <div class="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-indigo-200 ring-1 ring-white/10 hover:ring-white/20">
            <span class="font-semibold text-white">v2.0 is live</span>
            <span class="h-4 w-px bg-white/10" aria-hidden="true"></span>
            <a href="#" class="flex items-center gap-x-1">
              <span class="absolute inset-0" aria-hidden="true"></span>
              See what’s new
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <h1 class="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">Organize your life with AppLaunch.</h1>
        <p class="mt-6 text-lg leading-8 text-indigo-200">The simplest way to keep notes, lists, and ideas in one place. Available on iOS and Android.</p>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Download for iOS</a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">Download for Android <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
        <div class="mx-auto w-[22rem] max-w-full drop-shadow-xl">
             <!-- Phone Mockup Placeholder -->
             <div class="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                <div class="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <div class="flex items-center justify-center w-full h-full text-gray-400 bg-gray-50">App Screen</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

defineProps<{ isFullScreen?: boolean }>()
</script>

<template>
  <PreviewWrapper title="Mobile App Landing" description="App showcase with phone mockup." :html-block="htmlBlock" :fullScreen="isFullScreen">
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
     <div class="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
