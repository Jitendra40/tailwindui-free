<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-gray-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
     <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
      <p class="mt-2 text-lg leading-8 text-gray-400">We’re a dynamic group of individuals who are passionate about what we do.</p>
    </div>
    <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
        <!-- Member 1 -->
      <li class="flex flex-col gap-6 xl:flex-row">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
        <div class="flex-auto">
          <h3 class="text-lg font-semibold leading-8 text-white">Michael Foster</h3>
          <p class="text-base leading-7 text-gray-300">Co-Founder / CTO</p>
          <p class="mt-6 text-base leading-7 text-gray-300">Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Elementum ac practici.</p>
        </div>
      </li>
        <!-- Member 2 -->
      <li class="flex flex-col gap-6 xl:flex-row">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
        <div class="flex-auto">
          <h3 class="text-lg font-semibold leading-8 text-white">Lindsay Walton</h3>
          <p class="text-base leading-7 text-gray-300">Front-end Developer</p>
          <p class="mt-6 text-base leading-7 text-gray-300">Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Elementum ac practici.</p>
        </div>
      </li>
    </ul>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Dark Team Section" description="Dark theme listing." :html-block="htmlBlock">
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
         <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
          <p class="mt-2 text-lg leading-8 text-gray-400">We’re a dynamic group of individuals who are passionate about what we do.</p>
        </div>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
            <!-- Member 1 -->
          <li class="flex flex-col gap-6 xl:flex-row">
            <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="flex-auto">
              <h3 class="text-lg font-semibold leading-8 text-white">Michael Foster</h3>
              <p class="text-base leading-7 text-gray-300">Co-Founder / CTO</p>
              <p class="mt-6 text-base leading-7 text-gray-300">Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Elementum ac practici.</p>
            </div>
          </li>
            <!-- Member 2 -->
          <li class="flex flex-col gap-6 xl:flex-row">
            <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="flex-auto">
              <h3 class="text-lg font-semibold leading-8 text-white">Lindsay Walton</h3>
              <p class="text-base leading-7 text-gray-300">Front-end Developer</p>
              <p class="mt-6 text-base leading-7 text-gray-300">Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Elementum ac practici.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </PreviewWrapper>
</template>
