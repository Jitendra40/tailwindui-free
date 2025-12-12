<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-gray-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
      <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Pricing plans for teams of all sizes</p>
    </div>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">Choose the perfect plan for your needs.</p>
    <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <!-- Tier 1 -->
      <div class="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10">
        <div>
          <div class="flex items-center justify-between gap-x-4">
            <h3 id="tier-freelancer-dark" class="text-lg font-semibold leading-8 text-white">Freelancer</h3>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-300">The essentials to provide your best work for clients.</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-white">$15</span>
            <span class="text-sm font-semibold leading-6 text-gray-300">/month</span>
          </p>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
             <li class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              5 products
            </li>
          </ul>
        </div>
        <a href="#" aria-describedby="tier-freelancer-dark" class="mt-8 block rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Buy plan</a>
      </div>
      <!-- Tier 2 -->
      <div class="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10">
        <div>
          <div class="flex items-center justify-between gap-x-4">
            <h3 id="tier-startup-dark" class="text-lg font-semibold leading-8 text-white">Startup</h3>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-300">A plan that scales with your rapidly growing business.</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-white">$30</span>
            <span class="text-sm font-semibold leading-6 text-gray-300">/month</span>
          </p>
           <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
             <li class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              25 products
            </li>
          </ul>
        </div>
        <a href="#" aria-describedby="tier-startup-dark" class="mt-8 block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Buy plan</a>
      </div>
        <!-- Tier 3 -->
      <div class="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10">
        <div>
          <div class="flex items-center justify-between gap-x-4">
            <h3 id="tier-enterprise-dark" class="text-lg font-semibold leading-8 text-white">Enterprise</h3>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-300">Dedicated support and infrastructure for your company.</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-white">$60</span>
            <span class="text-sm font-semibold leading-6 text-gray-300">/month</span>
          </p>
           <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
             <li class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              Unlimited products
            </li>
          </ul>
        </div>
        <a href="#" aria-describedby="tier-enterprise-dark" class="mt-8 block rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Buy plan</a>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Dark Pricing" description="Pricing section with dark background." :html-block="htmlBlock">
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Pricing plans for teams of all sizes</p>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">Choose the perfect plan for your needs.</p>
        <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <!-- Tier 1 -->
          <div class="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10">
            <div>
              <div class="flex items-center justify-between gap-x-4">
                <h3 id="tier-freelancer-dark" class="text-lg font-semibold leading-8 text-white">Freelancer</h3>
              </div>
              <p class="mt-4 text-sm leading-6 text-gray-300">The essentials to provide your best work for clients.</p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span class="text-4xl font-bold tracking-tight text-white">$15</span>
                <span class="text-sm font-semibold leading-6 text-gray-300">/month</span>
              </p>
              <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                <li class="flex gap-x-3">
                  <svg class="h-6 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  5 products
                </li>
              </ul>
            </div>
            <a href="#" aria-describedby="tier-freelancer-dark" class="mt-8 block rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Buy plan</a>
          </div>
          <!-- Tier 2 -->
          <div class="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10">
            <div>
              <div class="flex items-center justify-between gap-x-4">
                <h3 id="tier-startup-dark" class="text-lg font-semibold leading-8 text-white">Startup</h3>
              </div>
              <p class="mt-4 text-sm leading-6 text-gray-300">A plan that scales with your rapidly growing business.</p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span class="text-4xl font-bold tracking-tight text-white">$30</span>
                <span class="text-sm font-semibold leading-6 text-gray-300">/month</span>
              </p>
              <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                <li class="flex gap-x-3">
                  <svg class="h-6 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  25 products
                </li>
              </ul>
            </div>
            <a href="#" aria-describedby="tier-startup-dark" class="mt-8 block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Buy plan</a>
          </div>
            <!-- Tier 3 -->
          <div class="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10">
            <div>
              <div class="flex items-center justify-between gap-x-4">
                <h3 id="tier-enterprise-dark" class="text-lg font-semibold leading-8 text-white">Enterprise</h3>
              </div>
              <p class="mt-4 text-sm leading-6 text-gray-300">Dedicated support and infrastructure for your company.</p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span class="text-4xl font-bold tracking-tight text-white">$60</span>
                <span class="text-sm font-semibold leading-6 text-gray-300">/month</span>
              </p>
              <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                <li class="flex gap-x-3">
                  <svg class="h-6 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  Unlimited products
                </li>
              </ul>
            </div>
            <a href="#" aria-describedby="tier-enterprise-dark" class="mt-8 block rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Buy plan</a>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
