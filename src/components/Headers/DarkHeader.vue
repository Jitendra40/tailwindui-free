<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<header class="bg-gray-950 text-white shadow-sm shadow-black/20">
  <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6" aria-label="Global">
    <div class="flex items-center gap-2">
      <svg class="h-8 w-8 text-indigo-300" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="20" height="20" rx="4" fill="currentColor" fill-opacity="0.18"/>
        <path d="M12 12h8v8h-8z" stroke="currentColor" stroke-width="2"/>
        <path d="M12 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <span class="text-sm font-semibold">Studio Night</span>
    </div>
    <div class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
      <a href="javascript:void(0)" class="text-white">Work</a>
      <a href="javascript:void(0)" class="hover:text-white">Services</a>
      <a href="javascript:void(0)" class="hover:text-white">Blog</a>
      <a href="javascript:void(0)" class="hover:text-white">Contact</a>
    </div>
    <div class="flex items-center gap-3">
      <a href="javascript:void(0)" class="hidden sm:inline-flex rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:border-indigo-400 hover:text-indigo-100">View portfolio</a>
      <button type="button" class="md:hidden inline-flex items-center rounded-md p-2 text-gray-200 ring-1 ring-white/15">
        <span class="sr-only">Open main menu</span>
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </div>
  </nav>
</header>
`
</script>

<template>
  <PreviewWrapper title="Dark Studio Header" description="Minimal dark header for creative teams." :html-block="htmlBlock">
    <header class="bg-gray-950 text-white shadow-sm shadow-black/20">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6" aria-label="Global">
        <div class="flex items-center gap-2">
          <svg class="h-8 w-8 text-indigo-300" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="6" y="6" width="20" height="20" rx="4" fill="currentColor" fill-opacity="0.18"/>
            <path d="M12 12h8v8h-8z" stroke="currentColor" stroke-width="2"/>
            <path d="M12 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-sm font-semibold">Studio Night</span>
        </div>
        <div class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
          <a href="javascript:void(0)" class="text-white">Work</a>
          <a href="javascript:void(0)" class="hover:text-white">Services</a>
          <a href="javascript:void(0)" class="hover:text-white">Blog</a>
          <a href="javascript:void(0)" class="hover:text-white">Contact</a>
        </div>
        <div class="flex items-center gap-3">
          <a href="javascript:void(0)" class="hidden sm:inline-flex rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:border-indigo-400 hover:text-indigo-100">View portfolio</a>
          <button type="button" class="md:hidden inline-flex items-center rounded-md p-2 text-gray-200 ring-1 ring-white/15">
            <span class="sr-only">Open main menu</span>
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  </PreviewWrapper>
</template>
