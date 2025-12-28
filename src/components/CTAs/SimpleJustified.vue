<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white">
  <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-32 lg:px-8">
    <div class="rounded-2xl bg-slate-50 px-6 py-8 sm:rounded-3xl sm:p-16 ring-1 ring-inset ring-slate-900/10 lg:flex lg:items-center lg:justify-between lg:p-20">
      <div class="max-w-xl">
        <h2 class="text-lg font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to dive in?<br>Start your free trial today.</h2>
        <p class="mt-2 text-sm text-slate-600 sm:mt-4 sm:text-lg">Simple, transparent pricing. No setup fees.</p>
      </div>
      <div class="mt-6 flex flex-col md:flex-row items-center gap-6 lg:mt-0 lg:flex-shrink-0 sm:mt-10">
        <a href="javascript:void(0)" class="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">Get started</a>
        <a href="javascript:void(0)" class="group text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1">Learn more <span aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</span></a>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Justified CTA" description="CTA with text on left and buttons on right." :html-block="htmlBlock">
 
  </PreviewWrapper>
</template>
