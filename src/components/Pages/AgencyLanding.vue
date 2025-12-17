<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="bg-white">
  <!-- Minimal Header -->
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Agency</span>
          <span class="text-xl font-bold tracking-tight text-gray-900">Agency.</span>
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Work</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Services</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">About</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Contact</a>
      </div>
    </nav>
  </header>

  <main>
    <!-- Hero -->
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">We build brands that matter.</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">We are a strategic design agency helping companies craft their identity and tell their story.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Our Work</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Contact Us <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Grid -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="aspect-[4/3] bg-gray-100 relative group overflow-hidden rounded-lg">
                 <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Project One</div>
            </div>
            <div class="aspect-[4/3] bg-gray-100 relative group overflow-hidden rounded-lg">
                 <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Project Two</div>
            </div>
             <div class="aspect-[4/3] bg-gray-100 relative group overflow-hidden rounded-lg">
                 <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Project Three</div>
            </div>
             <div class="aspect-[4/3] bg-gray-100 relative group overflow-hidden rounded-lg">
                 <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Project Four</div>
            </div>
        </div>
    </div>
  </main>
</div>
`;

defineProps<{ isFullScreen?: boolean }>()
</script>

<template>
  <PreviewWrapper title="Agency Landing Page" description="Minimalist agency portfolio." :html-block="htmlBlock" :fullScreen="isFullScreen">
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
     <div class="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
