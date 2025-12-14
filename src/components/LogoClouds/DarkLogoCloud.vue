<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-gray-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg font-semibold leading-8 text-white">Trusted by the world’s most innovative teams</h2>
    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=260&q=80&sig=41" alt="Transistor" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=260&q=80&sig=42" alt="Reform" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=260&q=80&sig=43" alt="Tuple" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=260&q=80&sig=44" alt="SavvyCal" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain col-start-2 sm:col-start-auto lg:col-span-1" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=260&q=80&sig=45" alt="Statamic" width="158" height="48">
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Dark Logo Cloud" description="Logo cloud on dark background." :html-block="htmlBlock">
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-center text-lg font-semibold leading-8 text-white">Trusted by the world’s most innovative teams</h2>
        <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=260&q=80&sig=46" alt="Transistor" width="158" height="48">
          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=260&q=80&sig=47" alt="Reform" width="158" height="48">
          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=260&q=80&sig=48" alt="Tuple" width="158" height="48">
          <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=260&q=80&sig=49" alt="SavvyCal" width="158" height="48">
          <img class="col-span-2 max-h-12 w-full object-contain col-start-2 sm:col-start-auto lg:col-span-1" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=260&q=80&sig=50" alt="Statamic" width="158" height="48">
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
