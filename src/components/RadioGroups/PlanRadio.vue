<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
  <label class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none ring-1 ring-gray-300 hover:bg-gray-50 flex-col">
     <div class="flex items-center justify-between w-full mb-4">
          <span class="block text-sm font-semibold text-gray-900">Hobby</span>
           <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
     </div>
     <div class="mt-auto">
           <span class="text-2xl font-bold tracking-tight text-gray-900">$15</span>
          <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
     </div>
     <input type="radio" name="plan" value="Hobby" class="sr-only" aria-labelledby="plan-0-label" />
     <span class="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-indigo-600" aria-hidden="true"></span>
  </label>

  <label class="relative flex cursor-pointer rounded-lg border bg-indigo-50 border-indigo-200 p-4 shadow-sm focus:outline-none ring-1 ring-indigo-200 flex-col">
     <div class="flex items-center justify-between w-full mb-4">
          <span class="block text-sm font-semibold text-indigo-900">Freelancer</span>
          <div class="flex-shrink-0 ml-4">
          <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="m9 12 2 2 4-4"/>
          </svg>
      </div>
     </div>
     <div class="mt-auto">
           <span class="text-2xl font-bold tracking-tight text-indigo-900">$30</span>
          <span class="text-sm font-semibold leading-6 text-indigo-600">/month</span>
     </div>
     <input type="radio" name="plan" value="Freelancer" checked class="sr-only" aria-labelledby="plan-1-label" />
     <span class="pointer-events-none absolute -inset-px rounded-lg border-2 border-indigo-600" aria-hidden="true"></span>
  </label>

   <label class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none ring-1 ring-gray-300 hover:bg-gray-50 flex-col">
     <div class="flex items-center justify-between w-full mb-4">
          <span class="block text-sm font-semibold text-gray-900">Startup</span>
           <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
     </div>
     <div class="mt-auto">
           <span class="text-2xl font-bold tracking-tight text-gray-900">$60</span>
          <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
     </div>
     <input type="radio" name="plan" value="Startup" class="sr-only" aria-labelledby="plan-0-label" />
     <span class="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-indigo-600" aria-hidden="true"></span>
  </label>
</div>
`
</script>

<template>
  <PreviewWrapper title="Pricing Plans" description="Grid layout for high-level choices." :html-block="htmlBlock">
    <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
      <label class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none ring-1 ring-gray-300 hover:bg-gray-50 flex-col">
         <div class="flex items-center justify-between w-full mb-4">
              <span class="block text-sm font-semibold text-gray-900">Hobby</span>
               <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
         </div>
         <div class="mt-auto">
               <span class="text-2xl font-bold tracking-tight text-gray-900">$15</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
         </div>
         <input type="radio" name="plan" value="Hobby" class="sr-only" aria-labelledby="plan-0-label" />
         <span class="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-indigo-600" aria-hidden="true"></span>
      </label>

      <label class="relative flex cursor-pointer rounded-lg border bg-indigo-50 border-indigo-200 p-4 shadow-sm focus:outline-none ring-1 ring-indigo-200 flex-col">
         <div class="flex items-center justify-between w-full mb-4">
              <span class="block text-sm font-semibold text-indigo-900">Freelancer</span>
              <div class="flex-shrink-0 ml-4">
              <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
              </svg>
          </div>
         </div>
         <div class="mt-auto">
               <span class="text-2xl font-bold tracking-tight text-indigo-900">$30</span>
              <span class="text-sm font-semibold leading-6 text-indigo-600">/month</span>
         </div>
         <input type="radio" name="plan" value="Freelancer" checked class="sr-only" aria-labelledby="plan-1-label" />
         <span class="pointer-events-none absolute -inset-px rounded-lg border-2 border-indigo-600" aria-hidden="true"></span>
      </label>

       <label class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none ring-1 ring-gray-300 hover:bg-gray-50 flex-col">
         <div class="flex items-center justify-between w-full mb-4">
              <span class="block text-sm font-semibold text-gray-900">Startup</span>
               <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
         </div>
         <div class="mt-auto">
               <span class="text-2xl font-bold tracking-tight text-gray-900">$60</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
         </div>
         <input type="radio" name="plan" value="Startup" class="sr-only" aria-labelledby="plan-0-label" />
         <span class="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-indigo-600" aria-hidden="true"></span>
      </label>
    </div>
  </PreviewWrapper>
</template>
