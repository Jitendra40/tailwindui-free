<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
  <header class="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
    <a href="#">
      <span class="sr-only">Your Company</span>
          <svg  class="h-10 w-auto mx-auto" width="155.68" height="30" viewBox="0 0 155.68 30">
  <g>
    <path d="M37.47,25.26V4.64h5.67c1.48,0,2.6.41,3.35,1.24s1.12,2.03,1.12,3.62v9.66c0,1.95-.34,3.46-1.03,4.52s-1.88,1.59-3.59,1.59h-5.53ZM41.62,21.62h.71c.76,0,1.14-.37,1.14-1.1v-10.64c0-.69-.09-1.13-.28-1.33s-.56-.3-1.12-.3h-.46v13.37Z"/>
    <path d="M54.08,25.45c-1.72,0-2.98-.48-3.8-1.45s-1.22-2.38-1.22-4.26V4.64h4.01v14.94c0,.34.02.67.06.99s.13.58.27.78.37.3.68.3.55-.1.69-.3.23-.46.26-.78.05-.65.05-1V4.64h4.01v15.11c0,1.88-.41,3.29-1.22,4.26s-2.08,1.45-3.8,1.45Z"/>
    <path d="M60.68,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M78.58,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M98.98,25.26v-6.79l-3.29-13.84h4.09l1.15,6.98,1.15-6.98h4.08l-3.28,13.84v6.79h-3.89Z"/>
    <path d="M112.82,25.26V4.64h4.12v17.11h4.24v3.52h-8.37Z"/>
    <path d="M127.29,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM127.32,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
    <path d="M138.29,25.45c-2.95,0-4.42-2.11-4.42-6.33v-8.89c0-3.85,1.69-5.78,5.06-5.78,1.39,0,2.46.28,3.2.84s1.25,1.37,1.54,2.44.42,2.38.42,3.91h-4.03v-1.83c0-.45-.06-.82-.18-1.12s-.37-.45-.76-.45c-.48,0-.79.16-.94.48s-.23.67-.23,1.05v10c0,.55.07,1.01.22,1.35s.43.52.85.52.73-.17.87-.52.22-.81.22-1.38v-2.94h-1.1v-3.56h5.04v12.01h-1.65l-.7-1.73c-.72,1.28-1.85,1.92-3.4,1.92Z"/>
    <path d="M150.59,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM150.63,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
  </g>
  <rect x="4.39" y="4.39" width="21.21" height="21.21" transform="translate(15 -6.21) rotate(45)"/>
</svg>
    </a>
  </header>
  <main class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
    <div class="max-w-lg">
      <p class="text-base font-semibold leading-8 text-indigo-600">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div class="mt-10">
        <a href="#" class="text-sm font-semibold leading-7 text-indigo-600"><span aria-hidden="true">&larr;</span> Back to home</a>
      </div>
    </div>
  </main>
  <footer class="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
    <div class="border-t border-gray-100 bg-gray-50 py-10">
      <nav class="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
        <a href="#">Contact support</a>
        <svg viewBox="0 0 2 2" aria-hidden="true" class="h-0.5 w-0.5 fill-gray-300">
          <circle cx="1" cy="1" r="1" />
        </svg>
        <a href="#">Status</a>
      </nav>
    </div>
  </footer>
  <div class="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
     <div class="absolute inset-0 h-full w-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-2xl">
         Lost Placeholder
     </div>
  </div>
</div>
`;

defineProps<{ isFullScreen?: boolean }>()
</script>

<template>
  <PreviewWrapper title="404 - Split" description="Split screen 404 page." :html-block="htmlBlock" :fullScreen="isFullScreen">
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
     <div class="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
