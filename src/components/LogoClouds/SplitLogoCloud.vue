<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-gray-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
      <div class="mx-auto w-full max-w-xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-white">Trusted by the most innovative teams</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.</p>
        <div class="mt-8 flex items-center gap-x-6">
          <a href="#" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create account</a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">Contact us <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
        <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=11" alt="Tuple" width="105" height="48">
        <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=12" alt="Reform" width="104" height="48">
        <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=13" alt="SavvyCal" width="140" height="48">
        <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=14" alt="Laravel" width="136" height="48">
        <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=15" alt="Transistor" width="158" height="48">
        <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=16" alt="Statamic" width="147" height="48">
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Split Logo Cloud" description="Logo cloud with text on side." :html-block="htmlBlock">
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div class="mx-auto w-full max-w-xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-white">Trusted by the most innovative teams</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.</p>
            <div class="mt-8 flex items-center gap-x-6">
              <a href="#" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create account</a>
              <a href="#" class="text-sm font-semibold leading-6 text-white">Contact us <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=17" alt="Tuple" width="105" height="48">
            <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=18" alt="Reform" width="104" height="48">
            <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=19" alt="SavvyCal" width="140" height="48">
            <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=20" alt="Laravel" width="136" height="48">
            <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=21" alt="Transistor" width="158" height="48">
            <img class="max-h-12 w-full object-contain object-left" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=220&q=80&sig=22" alt="Statamic" width="147" height="48">
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
