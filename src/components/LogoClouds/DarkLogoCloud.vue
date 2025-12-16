<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-gray-950 py-14">
  <div class="mx-auto max-w-5xl px-6">
    <div class="text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Partners</p>
      <h2 class="mt-2 text-xl font-semibold text-white">Compact logo cloud on charcoal</h2>
      <p class="mt-2 text-sm text-gray-300">Keeps trust badges tidy without taking over the hero.</p>
    </div>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=301" alt="Placeholder 1" width="140" height="64">
      </div>
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=302" alt="Placeholder 2" width="140" height="64">
      </div>
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=303" alt="Placeholder 3" width="140" height="64">
      </div>
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=304" alt="Placeholder 4" width="140" height="64">
      </div>
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=305" alt="Placeholder 5" width="140" height="64">
      </div>
      <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
        <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=306" alt="Placeholder 6" width="140" height="64">
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
          <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=311" alt="Placeholder 1" width="140" height="64">
          </div>
          <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=312" alt="Placeholder 2" width="140" height="64">
          </div>
          <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=313" alt="Placeholder 3" width="140" height="64">
          </div>
          <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=314" alt="Placeholder 4" width="140" height="64">
          </div>
          <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=315" alt="Placeholder 5" width="140" height="64">
          </div>
          <div class="flex h-12 w-28 items-center justify-center rounded-md bg-white/5 px-3 ring-1 ring-white/10">
            <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=316" alt="Placeholder 6" width="140" height="64">
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
