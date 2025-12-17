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
<div class="bg-gray-900 py-16">
  <div class="mx-auto max-w-6xl px-6">
    <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <div class="space-y-3">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Fast-moving teams</p>
        <h2 class="text-2xl font-semibold text-white">Lean logo strip for tight hero sections</h2>
        <p class="text-sm leading-6 text-gray-300">Drop this into any dark panel. Minimal padding and a clean two-line grid keep the section light.</p>
      </div>
      <div class="grid grid-cols-2 gap-4 lg:gap-5">
        <!-- Tuple -->
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">Tuple</text>
          </svg>
        </div>
        <!-- Mirage -->
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">Mirage</text>
          </svg>
        </div>
        <!-- StaticKit -->
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">StaticKit</text>
          </svg>
        </div>
        <!-- Transistor -->
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">Transistor</text>
          </svg>
        </div>
        <!-- Workcation -->
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">Workcation</text>
          </svg>
        </div>
        <!-- Laravel -->
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-8 w-auto">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">Laravel</text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Split Logo Cloud" description="Logo cloud with text on side." :html-block="htmlBlock">
    <div class="bg-gray-900 py-16">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Fast-moving teams</p>
            <h2 class="text-2xl font-semibold text-white">Lean logo strip for tight hero sections</h2>
            <p class="text-sm leading-6 text-gray-300">Drop this into any dark panel. Minimal padding and a clean two-line grid keep the section light.</p>
          </div>
          <div class="grid grid-cols-2 gap-4 lg:gap-5">
            <div v-for="logo in logos" :key="logo.name" class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
              <!-- Using invert filter to make dark text logos white -->
              <img class="h-8 w-auto object-contain invert mix-blend-screen" :src="logo.src" :alt="logo.name" width="160" height="64">
            </div>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
