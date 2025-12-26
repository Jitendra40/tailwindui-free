<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"


const htmlBlock = `
<div class="bg-white py-12">
  <div class="mx-auto max-w-5xl px-6">
    <h2 class="text-center text-sm font-semibold tracking-wide text-gray-500 uppercase">Trusted by product teams</h2>
    <p class="mt-2 text-center text-base text-gray-700">Quick, compact logo rail for landing pages.</p>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
      <!-- Tuple -->
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#111827">Tuple</text>
        </svg>
      </div>
      <!-- Mirage -->
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#111827">Mirage</text>
        </svg>
      </div>
      <!-- StaticKit -->
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#111827">StaticKit</text>
        </svg>
      </div>
      <!-- Transistor -->
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#111827">Transistor</text>
        </svg>
      </div>
      <!-- Workcation -->
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#111827">Workcation</text>
        </svg>
      </div>
      <!-- Laravel -->
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#111827">Laravel</text>
        </svg>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Logo Cloud" description="Grid of partner logos." :html-block="htmlBlock">
   
  </PreviewWrapper>
</template>
