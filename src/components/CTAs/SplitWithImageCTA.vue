<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white">
  <div class="mx-auto max-w-7xl py-12 sm:px-6 sm:py-32 lg:px-8">
    <div class="relative isolate overflow-hidden bg-slate-900 px-6 pt-12 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 class="text-2xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity.<br>Start using our app today.</h2>
        <p class="mt-4 text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
        <div class="mt-6 flex flex-col md:flex-row items-center justify-center gap-6 lg:justify-start sm:mt-10">
          <a href="javascript:void(0)" class="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">Get started</a>
          <a href="javascript:void(0)" class="group text-sm font-semibold leading-6 text-white flex items-center gap-1">Learn more <span aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</span></a>
        </div>
      </div>
      <div class="relative mt-10 h-64 lg:mt-8 sm:h-80">
        <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-xl bg-white/5 ring-1 ring-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" alt="App screenshot" width="1824" height="1080">
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Split with Image CTA" description="Dark panel with screenshot." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
