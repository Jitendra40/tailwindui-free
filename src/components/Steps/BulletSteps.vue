<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Progress">
  <ol role="list" class="flex items-center">
    <li class="relative pr-8 sm:pr-20">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="h-0.5 w-full bg-indigo-600" />
      </div>
      <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900">
        <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
        <span class="sr-only">Step 1</span>
      </a>
    </li>
    <li class="relative pr-8 sm:pr-20">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="h-0.5 w-full bg-indigo-600" />
      </div>
      <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-indigo-600 hover:bg-gray-50">
          <span class="h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
          <span class="sr-only">Step 2</span>
      </a>
    </li>
    <li class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="h-0.5 w-full bg-gray-200" />
      </div>
      <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-gray-300 hover:border-gray-400">
           <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true" />
        <span class="sr-only">Step 3</span>
      </a>
    </li>
  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper title="Bullet Steps" description="Step indicator with bullets and connectors." :html-block="htmlBlock">
    <nav aria-label="Progress">
      <ol role="list" class="flex items-center">
        <li class="relative pr-8 sm:pr-20">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-indigo-600" />
          </div>
          <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900">
            <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
            <span class="sr-only">Step 1</span>
          </a>
        </li>
        <li class="relative pr-8 sm:pr-20">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-indigo-600" />
          </div>
          <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-indigo-600 hover:bg-gray-50">
              <span class="h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
              <span class="sr-only">Step 2</span>
          </a>
        </li>
        <li class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-gray-300 hover:border-gray-400">
               <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true" />
            <span class="sr-only">Step 3</span>
          </a>
        </li>
      </ol>
    </nav>
  </PreviewWrapper>
</template>
