<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
      <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Flexible plans for everyone</p>
    </div>
    <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
       <!-- Tier 1 -->
      <div class="rounded-3xl p-8 ring-1 ring-gray-200">
        <h3 id="tier-hobby" class="text-lg font-semibold leading-8 text-gray-900">Hobby</h3>
        <p class="mt-4 text-sm leading-6 text-gray-600">The essentials to get started.</p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-gray-900">$5</span>
          <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
        </p>
        <a href="javascript:void(0)" aria-describedby="tier-hobby" class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
      </div>
      <!-- Tier 2 -->
      <div class="rounded-3xl p-8 ring-1 ring-gray-200">
        <h3 id="tier-freelancer" class="text-lg font-semibold leading-8 text-gray-900">Freelancer</h3>
        <p class="mt-4 text-sm leading-6 text-gray-600">For small projects.</p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-gray-900">$19</span>
          <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
        </p>
        <a href="javascript:void(0)" aria-describedby="tier-freelancer" class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
      </div>
      <!-- Tier 3 -->
      <div class="rounded-3xl p-8 ring-1 ring-gray-200 bg-gray-50">
        <h3 id="tier-startup" class="text-lg font-semibold leading-8 text-gray-900">Startup</h3>
        <p class="mt-4 text-sm leading-6 text-gray-600">A plan that scales with you.</p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-gray-900">$49</span>
          <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
        </p>
        <a href="javascript:void(0)" aria-describedby="tier-startup" class="mt-6 block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
      </div>
      <!-- Tier 4 -->
      <div class="rounded-3xl p-8 ring-1 ring-gray-200">
        <h3 id="tier-enterprise" class="text-lg font-semibold leading-8 text-gray-900">Enterprise</h3>
        <p class="mt-4 text-sm leading-6 text-gray-600">Dedicated support.</p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-gray-900">$99</span>
          <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
        </p>
        <a href="javascript:void(0)" aria-describedby="tier-enterprise" class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Four Tiers" description="Compact comparison of four plans." :html-block="htmlBlock">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Flexible plans for everyone</p>
        </div>
        <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
           <!-- Tier 1 -->
          <div class="rounded-3xl p-8 ring-1 ring-gray-200">
            <h3 id="tier-hobby" class="text-lg font-semibold leading-8 text-gray-900">Hobby</h3>
            <p class="mt-4 text-sm leading-6 text-gray-600">The essentials to get started.</p>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-gray-900">$5</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
            </p>
            <a href="javascript:void(0)" aria-describedby="tier-hobby" class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
          </div>
          <!-- Tier 2 -->
          <div class="rounded-3xl p-8 ring-1 ring-gray-200">
            <h3 id="tier-freelancer" class="text-lg font-semibold leading-8 text-gray-900">Freelancer</h3>
            <p class="mt-4 text-sm leading-6 text-gray-600">For small projects.</p>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-gray-900">$19</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
            </p>
            <a href="javascript:void(0)" aria-describedby="tier-freelancer" class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
          </div>
          <!-- Tier 3 -->
          <div class="rounded-3xl p-8 ring-1 ring-gray-200 bg-gray-50">
            <h3 id="tier-startup" class="text-lg font-semibold leading-8 text-gray-900">Startup</h3>
            <p class="mt-4 text-sm leading-6 text-gray-600">A plan that scales with you.</p>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-gray-900">$49</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
            </p>
            <a href="javascript:void(0)" aria-describedby="tier-startup" class="mt-6 block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
          </div>
          <!-- Tier 4 -->
          <div class="rounded-3xl p-8 ring-1 ring-gray-200">
            <h3 id="tier-enterprise" class="text-lg font-semibold leading-8 text-gray-900">Enterprise</h3>
            <p class="mt-4 text-sm leading-6 text-gray-600">Dedicated support.</p>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-gray-900">$99</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
            </p>
            <a href="javascript:void(0)" aria-describedby="tier-enterprise" class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
