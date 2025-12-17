<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"
import tupleLogo from '@/assets/logos/tuple.svg'
import mirageLogo from '@/assets/logos/mirage.svg'
import staticKitLogo from '@/assets/logos/statickit.svg'
import transistorLogo from '@/assets/logos/transistor.svg'
import workcationLogo from '@/assets/logos/workcation.svg'
import laravelLogo from '@/assets/logos/laravel.svg'

const logos = [
  { name: 'Tuple', src: tupleLogo },
  { name: 'Mirage', src: mirageLogo },
  { name: 'StaticKit', src: staticKitLogo },
  { name: 'Transistor', src: transistorLogo },
  { name: 'Workcation', src: workcationLogo },
  { name: 'Laravel', src: laravelLogo },
]

const htmlBlock = `
<div class="bg-gray-950 py-14">
  <div class="mx-auto max-w-5xl px-6">
    <div class="text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Partners</p>
      <h2 class="mt-2 text-xl font-semibold text-white">Compact logo cloud on charcoal</h2>
      <p class="mt-2 text-sm text-gray-300">Keeps trust badges tidy without taking over the hero.</p>
    </div>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
     <!-- Tuple -->
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">Tuple</text>
        </svg>
      </div>
      <!-- Mirage -->
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">Mirage</text>
        </svg>
      </div>
      <!-- StaticKit -->
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">StaticKit</text>
        </svg>
      </div>
      <!-- Transistor -->
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">Transistor</text>
        </svg>
      </div>
      <!-- Workcation -->
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">Workcation</text>
        </svg>
      </div>
      <!-- Laravel -->
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">Laravel</text>
        </svg>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Dark Logo Cloud" description="Logo cloud on dark background." :html-block="htmlBlock">
    <div class="bg-gray-950 py-14">
      <div class="mx-auto max-w-5xl px-6">
        <div class="text-center">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Partners</p>
          <h2 class="mt-2 text-xl font-semibold text-white">Compact logo cloud on charcoal</h2>
          <p class="mt-2 text-sm text-gray-300">Keeps trust badges tidy without taking over the hero.</p>
        </div>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <div v-for="logo in logos" :key="logo.name" class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
            <img class="h-8 w-auto object-contain invert mix-blend-screen" :src="logo.src" :alt="logo.name" width="140" height="64">
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
