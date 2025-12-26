<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-gray-100">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 class="text-2xl font-bold text-gray-900">Collections</h2>
      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="https://images.unsplash.com/photo-1497215842964-222b4bef97ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="javascript:void(0)">
              <span class="absolute inset-0"></span>
              Desk and Office
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
        </div>
        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="javascript:void(0)">
              <span class="absolute inset-0"></span>
              Self-Improvement
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
        </div>
        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="javascript:void(0)">
              <span class="absolute inset-0"></span>
              Travel
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Daily commute essentials</p>
        </div>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Three Column Category Preview" description="Grid of categories with images." :html-block="htmlBlock">
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 class="text-2xl font-bold text-gray-900">Collections</h2>
          <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="https://images.unsplash.com/photo-1497215842964-222b4bef97ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="javascript:void(0)">
                  <span class="absolute inset-0"></span>
                  Desk and Office
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="javascript:void(0)">
                  <span class="absolute inset-0"></span>
                  Self-Improvement
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="javascript:void(0)">
                  <span class="absolute inset-0"></span>
                  Travel
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">Daily commute essentials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
