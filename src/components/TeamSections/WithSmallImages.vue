<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
     <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do.</p>
    </div>
    <div class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
       <!-- Member 1 -->
      <div class="flex flex-col items-center">
        <img class="h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <h3 class="mt-4 text-base font-semibold leading-7 text-gray-900">Tom Cook</h3>
        <p class="text-sm leading-6 text-gray-600">Director of Product</p>
      </div>
      <!-- Member 2 -->
      <div class="flex flex-col items-center">
        <img class="h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <h3 class="mt-4 text-base font-semibold leading-7 text-gray-900">Lindsay Walton</h3>
        <p class="text-sm leading-6 text-gray-600">Front-end Developer</p>
      </div>
       <!-- Member 3 -->
      <div class="flex flex-col items-center">
        <img class="h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <h3 class="mt-4 text-base font-semibold leading-7 text-gray-900">Courtney Henry</h3>
        <p class="text-sm leading-6 text-gray-600">Designer</p>
      </div>
      <!-- Member 4 -->
      <div class="flex flex-col items-center">
        <img class="h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <h3 class="mt-4 text-base font-semibold leading-7 text-gray-900">Michael Foster</h3>
        <p class="text-sm leading-6 text-gray-600">Co-Founder / CTO</p>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="With Small Images" description="Minimal team list with avatars." :html-block="htmlBlock">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
         <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do.</p>
        </div>
        <div class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
           <!-- Member 1 -->
          <div class="flex flex-col items-center">
            <img class="h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <h3 class="mt-4 text-base font-semibold leading-7 text-gray-900">Tom Cook</h3>
            <p class="text-sm leading-6 text-gray-600">Director of Product</p>
          </div>
          <!-- Member 2 -->
          <div class="flex flex-col items-center">
            <img class="h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <h3 class="mt-4 text-base font-semibold leading-7 text-gray-900">Lindsay Walton</h3>
            <p class="text-sm leading-6 text-gray-600">Front-end Developer</p>
          </div>
           <!-- Member 3 -->
          <div class="flex flex-col items-center">
            <img class="h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <h3 class="mt-4 text-base font-semibold leading-7 text-gray-900">Courtney Henry</h3>
            <p class="text-sm leading-6 text-gray-600">Designer</p>
          </div>
          <!-- Member 4 -->
          <div class="flex flex-col items-center">
            <img class="h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <h3 class="mt-4 text-base font-semibold leading-7 text-gray-900">Michael Foster</h3>
            <p class="text-sm leading-6 text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
