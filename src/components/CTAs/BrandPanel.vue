<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative isolate overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600">
  <div class="px-6 py-12 sm:px-6 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-2xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity.<br>Start using our app today.</h2>
      <p class="mx-auto mt-4 max-w-xl text-base leading-7 text-indigo-100 sm:text-lg sm:leading-8">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      <div class="mt-6 flex flex-col md:flex-row items-center justify-center gap-6 sm:mt-10">
        <a href="javascript:void(0)" class="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">Get started</a>
        <a href="javascript:void(0)" class="group text-sm font-semibold leading-6 text-white flex items-center gap-1">Learn more <span aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</span></a>
      </div>
    </div>
  </div>
  <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
    <circle cx="512" cy="512" r="512" fill="url(#brand-gradient)" fill-opacity="0.7" />
    <defs>
      <radialGradient id="brand-gradient">
        <stop stop-color="#7775D6" />
        <stop offset="1" stop-color="#E935C1" />
      </radialGradient>
    </defs>
  </svg>
</div>
`
</script>

<template>
  <PreviewWrapper title="Brand Panel CTA" description="Centered CTA on brand color." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
