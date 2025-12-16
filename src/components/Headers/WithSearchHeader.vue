<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<header class="bg-white/95 shadow-sm">
  <div class="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:gap-6">
    <div class="flex items-center gap-2">
      <svg class="h-8 w-8 text-indigo-600" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" fill="currentColor" fill-opacity="0.12"/>
        <path d="M12 16.5 16 12l4 4.5-4 4.5-4-4.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>
      <span class="text-sm font-semibold text-gray-900">Signal</span>
    </div>
    <div class="hidden lg:flex items-center gap-5 text-sm font-medium text-gray-700">
      <a href="#" class="text-indigo-600">Dashboard</a>
      <a href="#" class="hover:text-indigo-600">Analytics</a>
      <a href="#" class="hover:text-indigo-600">Inbox</a>
      <a href="#" class="hover:text-indigo-600">Settings</a>
    </div>
    <div class="flex flex-1 items-center justify-end gap-3">
      <div class="w-full max-w-sm">
        <label for="search" class="sr-only">Search</label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>
          </div>
          <input id="search" name="search" class="block w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Search dashboards, teams..." type="search">
        </div>
      </div>
      <a href="#" class="hidden sm:inline-flex rounded-full bg-gray-900 px-3 py-2 text-xs font-semibold text-white hover:bg-gray-800">New report</a>
      <button type="button" class="lg:hidden inline-flex items-center rounded-md p-2 text-gray-600 ring-1 ring-gray-200">
        <span class="sr-only">Open main menu</span>
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </div>
  </div>
</header>
`
</script>

<template>
  <PreviewWrapper title="Search-First Header" description="Compact nav with pill search." :html-block="htmlBlock">
    <header class="bg-white/95 shadow-sm">
      <div class="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:gap-6">
        <div class="flex items-center gap-2">
          <svg class="h-8 w-8 text-indigo-600" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="10" fill="currentColor" fill-opacity="0.12"/>
            <path d="M12 16.5 16 12l4 4.5-4 4.5-4-4.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          <span class="text-sm font-semibold text-gray-900">Signal</span>
        </div>
        <div class="hidden lg:flex items-center gap-5 text-sm font-medium text-gray-700">
          <a href="#" class="text-indigo-600">Dashboard</a>
          <a href="#" class="hover:text-indigo-600">Analytics</a>
          <a href="#" class="hover:text-indigo-600">Inbox</a>
          <a href="#" class="hover:text-indigo-600">Settings</a>
        </div>
        <div class="flex flex-1 items-center justify-end gap-3">
          <div class="w-full max-w-sm">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
              </div>
              <input id="search" name="search" class="block w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Search dashboards, teams..." type="search">
            </div>
          </div>
          <a href="#" class="hidden sm:inline-flex rounded-full bg-gray-900 px-3 py-2 text-xs font-semibold text-white hover:bg-gray-800">New report</a>
          <button type="button" class="lg:hidden inline-flex items-center rounded-md p-2 text-gray-600 ring-1 ring-gray-200">
            <span class="sr-only">Open main menu</span>
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  </PreviewWrapper>
</template>
