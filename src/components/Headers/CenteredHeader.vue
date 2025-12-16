<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<header class="bg-white border-b border-gray-100">
  <nav class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4" aria-label="Global">
    <div class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
      <a href="#" class="hover:text-indigo-600">Overview</a>
      <a href="#" class="hover:text-indigo-600">Playbooks</a>
      <a href="#" class="hover:text-indigo-600">Resources</a>
    </div>
    <div class="flex items-center gap-2">
      <svg class="h-9 w-9 text-indigo-600" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="24" height="24" rx="6" fill="currentColor" fill-opacity="0.12"/>
        <path d="M12 18c0-3.314 2.239-6 5-6s5 2.686 5 6-2.239 6-5 6-5-2.686-5-6Z" stroke="currentColor" stroke-width="2"/>
        <path d="M18 12v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M18 21v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <span class="text-base font-semibold text-gray-900">Atlas</span>
    </div>
    <div class="flex items-center gap-3">
      <a href="#" class="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-indigo-600">Log in</a>
      <a href="#" class="inline-flex items-center rounded-md border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-900 hover:border-indigo-200 hover:text-indigo-700">Book demo</a>
      <button type="button" class="md:hidden inline-flex items-center rounded-md p-2 text-gray-600 ring-1 ring-gray-200">
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
  <PreviewWrapper title="Centered Minimal Header" description="Logo anchored center with balanced links." :html-block="htmlBlock">
    <header class="bg-white border-b border-gray-100">
      <nav class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4" aria-label="Global">
        <div class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#" class="hover:text-indigo-600">Overview</a>
          <a href="#" class="hover:text-indigo-600">Playbooks</a>
          <a href="#" class="hover:text-indigo-600">Resources</a>
        </div>
        <div class="flex items-center gap-2">
          <svg class="h-9 w-9 text-indigo-600" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect x="6" y="6" width="24" height="24" rx="6" fill="currentColor" fill-opacity="0.12"/>
            <path d="M12 18c0-3.314 2.239-6 5-6s5 2.686 5 6-2.239 6-5 6-5-2.686-5-6Z" stroke="currentColor" stroke-width="2"/>
            <path d="M18 12v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M18 21v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-base font-semibold text-gray-900">Atlas</span>
        </div>
        <div class="flex items-center gap-3">
          <a href="#" class="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-indigo-600">Log in</a>
          <a href="#" class="inline-flex items-center rounded-md border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-900 hover:border-indigo-200 hover:text-indigo-700">Book demo</a>
          <button type="button" class="md:hidden inline-flex items-center rounded-md p-2 text-gray-600 ring-1 ring-gray-200">
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
