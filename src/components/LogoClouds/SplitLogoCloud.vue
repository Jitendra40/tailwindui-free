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
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
          <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=201" alt="Placeholder A" width="160" height="64">
        </div>
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
          <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=202" alt="Placeholder B" width="160" height="64">
        </div>
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
          <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=203" alt="Placeholder C" width="160" height="64">
        </div>
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
          <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=204" alt="Placeholder D" width="160" height="64">
        </div>
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
          <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=205" alt="Placeholder E" width="160" height="64">
        </div>
        <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
          <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=206" alt="Placeholder F" width="160" height="64">
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
            <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
              <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=211" alt="Placeholder A" width="160" height="64">
            </div>
            <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
              <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=212" alt="Placeholder B" width="160" height="64">
            </div>
            <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
              <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=213" alt="Placeholder C" width="160" height="64">
            </div>
            <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
              <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=214" alt="Placeholder D" width="160" height="64">
            </div>
            <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
              <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=215" alt="Placeholder E" width="160" height="64">
            </div>
            <div class="flex h-14 items-center justify-center rounded-lg border border-white/5 bg-white/5 px-4">
              <img class="h-8 w-auto object-contain" src="https://images.unsplash.com/featured?auto=format&fit=crop&w=200&h=80&q=80&sig=216" alt="Placeholder F" width="160" height="64">
            </div>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
