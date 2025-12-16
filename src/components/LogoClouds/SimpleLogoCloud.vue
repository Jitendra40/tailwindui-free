<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white py-12">
  <div class="mx-auto max-w-5xl px-6">
    <h2 class="text-center text-sm font-semibold tracking-wide text-gray-500 uppercase">Trusted by product teams</h2>
    <p class="mt-2 text-center text-base text-gray-700">Quick, compact logo rail for landing pages.</p>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=101" alt="Placeholder 1" width="160" height="64">
      </div>
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=102" alt="Placeholder 2" width="160" height="64">
      </div>
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=103" alt="Placeholder 3" width="160" height="64">
      </div>
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=104" alt="Placeholder 4" width="160" height="64">
      </div>
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=105" alt="Placeholder 5" width="160" height="64">
      </div>
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=106" alt="Placeholder 6" width="160" height="64">
      </div>
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=107" alt="Placeholder 7" width="160" height="64">
      </div>
      <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=108" alt="Placeholder 8" width="160" height="64">
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Logo Cloud" description="Grid of partner logos." :html-block="htmlBlock">
    <div class="bg-white py-12">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="text-center text-sm font-semibold tracking-wide text-gray-500 uppercase">Trusted by product teams</h2>
        <p class="mt-2 text-center text-base text-gray-700">Quick, compact logo rail for landing pages.</p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=111" alt="Placeholder 1" width="160" height="64">
          </div>
          <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=112" alt="Placeholder 2" width="160" height="64">
          </div>
          <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=113" alt="Placeholder 3" width="160" height="64">
          </div>
          <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=114" alt="Placeholder 4" width="160" height="64">
          </div>
          <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=115" alt="Placeholder 5" width="160" height="64">
          </div>
          <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=116" alt="Placeholder 6" width="160" height="64">
          </div>
          <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=117" alt="Placeholder 7" width="160" height="64">
          </div>
          <div class="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 shadow-sm">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=118" alt="Placeholder 8" width="160" height="64">
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
