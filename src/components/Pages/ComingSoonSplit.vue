<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="min-h-screen grid grid-cols-1 md:grid-cols-2">
    <div class="flex flex-col justify-center px-8 lg:px-20 py-12 bg-white">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">We're launching soon</h1>
        <p class="mt-4 text-lg text-gray-500">Get ready for something new. Join the waitlist to get early access.</p>
        <form class="mt-10 max-w-sm">
             <div class="flex gap-x-4">
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter your email">
                <button type="submit" class="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Subscribe</button>
             </div>
        </form>
    </div>
    <div class="relative bg-gray-50">
        <div class="absolute inset-0 h-full w-full bg-indigo-100 flex items-center justify-center text-indigo-400 font-bold text-2xl">
            Product Visual
        </div>
    </div>
</div>
`;

defineProps<{ isFullScreen?: boolean }>()
</script>

<template>
  <PreviewWrapper title="Coming Soon - Split" description="Split screen launch page." :html-block="htmlBlock" :fullScreen="isFullScreen">
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
     <div class="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
