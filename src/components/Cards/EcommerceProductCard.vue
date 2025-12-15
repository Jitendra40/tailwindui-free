<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="group relative block overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm transition-all hover:shadow-md max-w-sm">
  <button class="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-1.5 text-gray-900 transition hover:text-red-600 backdrop-blur-sm">
    <span class="sr-only">Wishlist</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  </button>

  <div class="relative h-64 sm:h-72">
    <img
      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      alt="Smart Watch"
      class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div class="absolute bottom-4 left-4">
        <span class="rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-gray-900 backdrop-blur-sm shadow-sm">
           Low Stock: 5 Left
        </span>
    </div>
  </div>

  <div class="p-6">
    <div class="flex items-baseline gap-2">
      <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Electronics</span>
      <span class="text-xs text-gray-500">SKU: WAT-001</span>
    </div>

    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Minimalist Smart Watch</h3>
    <p class="mt-1 text-sm text-gray-500">Includes 2 extra straps and wireless charger.</p>

    <div class="mt-6 flex items-center justify-between">
      <p class="text-lg font-bold text-gray-900">$199.00</p>
      <button class="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="E-Commerce Product"
    description="Product card with hover effect, stock status, and quick add button."
    :html-block="htmlBlock"
  >
    <div class="group relative block overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm transition-all hover:shadow-md max-w-sm mx-auto">
      <button class="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-1.5 text-gray-900 transition hover:text-red-600 backdrop-blur-sm">
        <span class="sr-only">Wishlist</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>

      <div class="relative h-64 sm:h-72">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Smart Watch"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute bottom-4 left-4">
            <span class="rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-gray-900 backdrop-blur-sm shadow-sm">
               Low Stock: 5 Left
            </span>
        </div>
      </div>

      <div class="p-6">
        <div class="flex items-baseline gap-2">
          <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Electronics</span>
          <span class="text-xs text-gray-500">SKU: WAT-001</span>
        </div>

        <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Minimalist Smart Watch</h3>
        <p class="mt-1 text-sm text-gray-500">Includes 2 extra straps and wireless charger.</p>

        <div class="mt-6 flex items-center justify-between">
          <p class="text-lg font-bold text-gray-900">$199.00</p>
          <button class="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
