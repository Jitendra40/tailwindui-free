<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<a href="#" class="block rounded-xl bg-white p-6 shadow-sm shadow-black/5 border border-gray-200 hover:border-pink-500/30 hover:shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 sm:w-full sm:max-w-md group">
  <div class="flex items-center space-x-3">
    <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-white shadow-sm shadow-pink-500/20 group-hover:scale-110 transition-transform">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    </span>
    <h3 class="text-sm font-medium text-gray-900 group-hover:text-pink-600 transition-colors">Interactive Card</h3>
  </div>
  <p class="mt-4 text-sm text-gray-500 leading-relaxed">Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
</a>
`
</script>

<template>
  <PreviewWrapper title="Interactive Card" description="Clickable card with hover states." :html-block="htmlBlock">
    <a href="#" class="block rounded-xl bg-white p-6 shadow-sm shadow-black/5 border border-gray-200 hover:border-pink-500/30 hover:shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 sm:w-full sm:max-w-md group">
      <div class="flex items-center space-x-3">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-white shadow-sm shadow-pink-500/20 group-hover:scale-110 transition-transform">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </span>
        <h3 class="text-sm font-medium text-gray-900 group-hover:text-pink-600 transition-colors">Interactive Card</h3>
      </div>
      <p class="mt-4 text-sm text-gray-500 leading-relaxed">Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
    </a>
  </PreviewWrapper>
</template>
