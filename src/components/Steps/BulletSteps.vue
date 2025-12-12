<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Progress">
  <ol role="list" class="flex items-center">
      <!-- Completed Step -->
      <li class="relative pr-8 sm:pr-20">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-indigo-600"></div>
          </div>
          <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900 transition-colors">
              <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Step 1</span>
          </a>
      </li>

      <!-- Current Step -->
      <li class="relative pr-8 sm:pr-20">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
          </div>
          <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white" aria-current="step">
              <span class="h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true"></span>
              <span class="sr-only">Step 2</span>
          </a>
      </li>

      <!-- Upcoming Step -->
      <li class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
          </div>
          <a href="#" class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
              <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true"></span>
              <span class="sr-only">Step 3</span>
          </a>
      </li>
  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper title="Bullet Steps" description="Minimal connected bullet indicators." :html-block="htmlBlock">
    <nav aria-label="Progress">
      <ol role="list" class="flex items-center">
          <!-- Completed Step -->
          <li class="relative pr-8 sm:pr-20">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="h-0.5 w-full bg-indigo-600"></div>
              </div>
              <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900 transition-colors">
                  <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Step 1</span>
              </a>
          </li>

          <!-- Current Step -->
          <li class="relative pr-8 sm:pr-20">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="h-0.5 w-full bg-gray-200"></div>
              </div>
              <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white" aria-current="step">
                  <span class="h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true"></span>
                  <span class="sr-only">Step 2</span>
              </a>
          </li>

          <!-- Upcoming Step -->
          <li class="relative">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="h-0.5 w-full bg-gray-200"></div>
              </div>
              <a href="#" class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                  <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true"></span>
                  <span class="sr-only">Step 3</span>
              </a>
          </li>
      </ol>
    </nav>
  </PreviewWrapper>
</template>
