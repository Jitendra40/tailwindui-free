<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white px-4 py-12 sm:px-6 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-4xl rounded-2xl bg-slate-900 px-6 py-8 shadow-2xl sm:rounded-3xl sm:p-16 lg:flex lg:items-center lg:justify-between lg:p-20 relative overflow-hidden isolate">
    <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#purple-gradient)" fill-opacity="0.4" />
        <defs>
          <radialGradient id="purple-gradient">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
    </svg>
    <div class="max-w-xl">
      <h2 class="text-base font-bold tracking-tight text-white sm:text-4xl">Ready to dive in?<br>Start your free trial today.</h2>
      <p class="mt-2 text-sm text-slate-300 sm:mt-4 sm:text-lg">Join over 4,000+ startups currently growing with our platform.</p>
    </div>
    <div class="mt-6 flex flex-col md:flex-row items-center gap-6 lg:mt-0 lg:flex-shrink-0 sm:mt-10">
      <a href="javascript:void(0)" class="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">Get started</a>
      <a href="javascript:void(0)" class="group text-sm font-semibold leading-6 text-white flex items-center gap-1">Learn more <span aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</span></a>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Two Column CTA" description="Basic justified on gray background." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
