<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do.</p>
    </div>
    <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Leslie Alexander</h3>
            <p class="text-base leading-7 text-gray-600">Co-Founder / CEO</p>
             <ul role="list" class="mt-6 flex gap-x-6">
                <!-- Social Icons would go here -->
            </ul>
        </li>
        <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Michael Foster</h3>
            <p class="text-base leading-7 text-gray-600">Co-Founder / CTO</p>
        </li>
        <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Dries Vincent</h3>
            <p class="text-base leading-7 text-gray-600">Business Relations</p>
        </li>
    </ul>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Full Width with Bio" description="Another grid variant." :html-block="htmlBlock">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do.</p>
        </div>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <li>
                <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
                <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Leslie Alexander</h3>
                <p class="text-base leading-7 text-gray-600">Co-Founder / CEO</p>
                 <ul role="list" class="mt-6 flex gap-x-6">
                    <!-- Social Icons would go here -->
                </ul>
            </li>
            <li>
                <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
                <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Michael Foster</h3>
                <p class="text-base leading-7 text-gray-600">Co-Founder / CTO</p>
            </li>
            <li>
                <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
                <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Dries Vincent</h3>
                <p class="text-base leading-7 text-gray-600">Business Relations</p>
            </li>
        </ul>
      </div>
    </div>
  </PreviewWrapper>
</template>
