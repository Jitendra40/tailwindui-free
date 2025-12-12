<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do.</p>
    </div>
    <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Michael Foster</h3>
            <p class="text-base leading-7 text-gray-600">Co-Founder / CTO</p>
        </li>
         <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Lindsay Walton</h3>
            <p class="text-base leading-7 text-gray-600">Front-end Developer</p>
        </li>
         <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Courtney Henry</h3>
            <p class="text-base leading-7 text-gray-600">Designer</p>
        </li>
         <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Tom Cook</h3>
            <p class="text-base leading-7 text-gray-600">Director of Product</p>
        </li>
         <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Whitney Francis</h3>
            <p class="text-base leading-7 text-gray-600">Copywriter</p>
        </li>
         <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Leonard Krasner</h3>
            <p class="text-base leading-7 text-gray-600">Senior Designer</p>
        </li>
    </ul>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Grid Team" description="Grid of team members with photos." :html-block="htmlBlock">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do.</p>
        </div>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <li>
                <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Michael Foster</h3>
                <p class="text-base leading-7 text-gray-600">Co-Founder / CTO</p>
            </li>
             <li>
                <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Lindsay Walton</h3>
                <p class="text-base leading-7 text-gray-600">Front-end Developer</p>
            </li>
             <li>
                <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Courtney Henry</h3>
                <p class="text-base leading-7 text-gray-600">Designer</p>
            </li>
             <li>
                <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Tom Cook</h3>
                <p class="text-base leading-7 text-gray-600">Director of Product</p>
            </li>
             <li>
                <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Whitney Francis</h3>
                <p class="text-base leading-7 text-gray-600">Copywriter</p>
            </li>
             <li>
                <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Leonard Krasner</h3>
                <p class="text-base leading-7 text-gray-600">Senior Designer</p>
            </li>
        </ul>
      </div>
    </div>
  </PreviewWrapper>
</template>
