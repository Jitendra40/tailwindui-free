<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white px-2 py-12 sm:py-32 lg:px-8 relative isolate">
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Boost your productivity.<br>Start using our app today.</h2>
    <p class="mx-auto mt-4 max-w-xl text-sm md:leading-7 text-slate-600 sm:text-lg sm:leading-8">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
    <div class="mt-6 flex md:flex-row flex-col items-center justify-center gap-6 sm:mt-10">
      <a href="javascript:void(0)" class="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">Get started</a>
      <a href="javascript:void(0)" class="text-sm font-semibold leading-6 text-slate-900 group flex items-center gap-1">Learn more <span aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</span></a>
    </div>
  </div>
  <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
    <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Centered CTA" description="Basic centered call to action." :html-block="htmlBlock">
  
  </PreviewWrapper>
</template>
