<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<header class="bg-white/90 shadow-sm">
  <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6" aria-label="Global">
    <div class="flex items-center gap-8">
      <div class="flex items-center gap-2">
        <svg class="h-8 w-8 text-indigo-600" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M6 10.5 16 6l10 4.5v11L16 26l-10-4.5v-11Z" fill-opacity="0.12"/>
          <path d="M16 6v20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M6 10.5 16 15l10-4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="text-sm font-semibold text-gray-900">Northwind</div>
      </div>
      <div class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
        <a href="javascript:void(0)" class="hover:text-indigo-600">Product</a>
        <a href="javascript:void(0)" class="hover:text-indigo-600">Pricing</a>
        <a href="javascript:void(0)" class="hover:text-indigo-600">Customers</a>
        <a href="javascript:void(0)" class="hover:text-indigo-600">Docs</a>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <a href="javascript:void(0)" class="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-indigo-600">Sign in</a>
      <a href="javascript:void(0)" class="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-indigo-500">Start trial</a>
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
  <PreviewWrapper title="Compact SaaS Header" description="Tighter nav with CTA pill." :html-block="htmlBlock">
    <header class="bg-white/90 shadow-sm">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6" aria-label="Global">
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-2">
            <svg class="h-8 w-8 text-indigo-600" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M6 10.5 16 6l10 4.5v11L16 26l-10-4.5v-11Z" fill-opacity="0.12"/>
              <path d="M16 6v20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M6 10.5 16 15l10-4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text-sm font-semibold text-gray-900">Northwind</div>
          </div>
          <div class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="javascript:void(0)" class="hover:text-indigo-600">Product</a>
            <a href="javascript:void(0)" class="hover:text-indigo-600">Pricing</a>
            <a href="javascript:void(0)" class="hover:text-indigo-600">Customers</a>
            <a href="javascript:void(0)" class="hover:text-indigo-600">Docs</a>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <a href="javascript:void(0)" class="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-indigo-600">Sign in</a>
          <a href="javascript:void(0)" class="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-indigo-500">Start trial</a>
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
