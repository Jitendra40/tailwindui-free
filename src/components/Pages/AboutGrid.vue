<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="bg-white py-32">
  <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
    <div class="mx-auto max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
      <p class="mt-4 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do.</p>
    </div>
    <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <!-- Loop for team members -->
        <li>
            <div class="mx-auto h-56 w-56 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">Image</div>
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Michael Foster</h3>
            <p class="text-sm leading-6 text-gray-600">Co-Founder / CTO</p>
        </li>
        <li>
            <div class="mx-auto h-56 w-56 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">Image</div>
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Dries Vincent</h3>
            <p class="text-sm leading-6 text-gray-600">Business Relations</p>
        </li>
        <li>
            <div class="mx-auto h-56 w-56 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">Image</div>
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Lindsay Walton</h3>
            <p class="text-sm leading-6 text-gray-600">Front-end Developer</p>
        </li>
         <li>
            <div class="mx-auto h-56 w-56 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">Image</div>
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Courtney Henry</h3>
            <p class="text-sm leading-6 text-gray-600">Designer</p>
        </li>
         <li>
            <div class="mx-auto h-56 w-56 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">Image</div>
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Tom Cook</h3>
            <p class="text-sm leading-6 text-gray-600">Director of Product</p>
        </li>
         <li>
            <div class="mx-auto h-56 w-56 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">Image</div>
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Whitney Francis</h3>
            <p class="text-sm leading-6 text-gray-600">Copywriter</p>
        </li>
    </ul>
  </div>
</div>
`;

defineProps<{ isFullScreen?: boolean }>()
</script>

<template>
  <PreviewWrapper title="About Us - Team Grid" description="Team focused about page." :html-block="htmlBlock" :fullScreen="isFullScreen">
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
     <div class="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
