<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

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

  </PreviewWrapper>
</template>
