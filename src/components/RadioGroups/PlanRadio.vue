<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
  <!-- Plan 1 -->
  <label class="relative flex flex-col cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
    <div class="mb-4 flex items-center justify-between">
      <span class="text-sm font-semibold leading-6 text-gray-900">Hobby</span>
      <input type="radio" name="plan" value="Hobby" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
    </div>
    <p class="mb-6 text-sm text-gray-500">Essential features for personal projects.</p>
    <div class="mt-auto">
       <div class="flex items-baseline gap-x-2">
         <span class="text-4xl font-bold tracking-tight text-gray-900">$15</span>
         <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
       </div>
    </div>
  </label>

  <!-- Plan 2 (Popular) -->
  <label class="relative flex flex-col cursor-pointer rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
     <!-- Badge -->
     <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-semibold text-white shadow-sm">
       Popular
     </div>
    <div class="mb-4 flex items-center justify-between">
      <span class="text-sm font-semibold leading-6 text-indigo-600">Freelancer</span>
      <input type="radio" name="plan" value="Freelancer" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
    </div>
    <p class="mb-6 text-sm text-gray-500">Perfect for growing businesses.</p>
    <div class="mt-auto">
       <div class="flex items-baseline gap-x-2">
         <span class="text-4xl font-bold tracking-tight text-gray-900">$30</span>
         <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
       </div>
    </div>
  </label>

  <!-- Plan 3 -->
  <label class="relative flex flex-col cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
    <div class="mb-4 flex items-center justify-between">
      <span class="text-sm font-semibold leading-6 text-gray-900">Startup</span>
      <input type="radio" name="plan" value="Startup" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
    </div>
    <p class="mb-6 text-sm text-gray-500">Advanced features for scaling teams.</p>
    <div class="mt-auto">
       <div class="flex items-baseline gap-x-2">
         <span class="text-4xl font-bold tracking-tight text-gray-900">$60</span>
         <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
       </div>
    </div>
  </label>
</div>
`
</script>

<template>
  <PreviewWrapper title="Pricing Cards" description="Comparison cards with a 'Popular' badge." :html-block="htmlBlock">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <!-- Plan 1 -->
      <label class="relative flex flex-col cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
        <div class="mb-4 flex items-center justify-between">
          <span class="text-sm font-semibold leading-6 text-gray-900">Hobby</span>
          <input type="radio" name="plan" value="Hobby" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <p class="mb-6 text-sm text-gray-500">Essential features for personal projects.</p>
        <div class="mt-auto">
           <div class="flex items-baseline gap-x-2">
             <span class="text-4xl font-bold tracking-tight text-gray-900">$15</span>
             <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
           </div>
        </div>
      </label>

      <!-- Plan 2 (Popular) -->
      <label class="relative flex flex-col cursor-pointer rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
         <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-semibold text-white shadow-sm">
           Popular
         </div>
        <div class="mb-4 flex items-center justify-between">
          <span class="text-sm font-semibold leading-6 text-indigo-600">Freelancer</span>
          <input type="radio" name="plan" value="Freelancer" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <p class="mb-6 text-sm text-gray-500">Perfect for growing businesses.</p>
        <div class="mt-auto">
           <div class="flex items-baseline gap-x-2">
             <span class="text-4xl font-bold tracking-tight text-gray-900">$30</span>
             <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
           </div>
        </div>
      </label>

      <!-- Plan 3 -->
      <label class="relative flex flex-col cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
        <div class="mb-4 flex items-center justify-between">
          <span class="text-sm font-semibold leading-6 text-gray-900">Startup</span>
          <input type="radio" name="plan" value="Startup" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <p class="mb-6 text-sm text-gray-500">Advanced features for scaling teams.</p>
        <div class="mt-auto">
           <div class="flex items-baseline gap-x-2">
             <span class="text-4xl font-bold tracking-tight text-gray-900">$60</span>
             <span class="text-sm font-semibold leading-6 text-gray-600">/mo</span>
           </div>
        </div>
      </label>
    </div>
  </PreviewWrapper>
</template>
