<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<header class="bg-white/95 shadow-sm">
  <div class="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:gap-6">
    <div class="flex items-center gap-2">
     <svg  class="h-6 w-auto mx-auto"  viewBox="0 0 155.68 30">
  <g>
    <path d="M37.47,25.26V4.64h5.67c1.48,0,2.6.41,3.35,1.24s1.12,2.03,1.12,3.62v9.66c0,1.95-.34,3.46-1.03,4.52s-1.88,1.59-3.59,1.59h-5.53ZM41.62,21.62h.71c.76,0,1.14-.37,1.14-1.1v-10.64c0-.69-.09-1.13-.28-1.33s-.56-.3-1.12-.3h-.46v13.37Z"/>
    <path d="M54.08,25.45c-1.72,0-2.98-.48-3.8-1.45s-1.22-2.38-1.22-4.26V4.64h4.01v14.94c0,.34.02.67.06.99s.13.58.27.78.37.3.68.3.55-.1.69-.3.23-.46.26-.78.05-.65.05-1V4.64h4.01v15.11c0,1.88-.41,3.29-1.22,4.26s-2.08,1.45-3.8,1.45Z"/>
    <path d="M60.68,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M78.58,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M98.98,25.26v-6.79l-3.29-13.84h4.09l1.15,6.98,1.15-6.98h4.08l-3.28,13.84v6.79h-3.89Z"/>
    <path d="M112.82,25.26V4.64h4.12v17.11h4.24v3.52h-8.37Z"/>
    <path d="M127.29,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM127.32,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
    <path d="M138.29,25.45c-2.95,0-4.42-2.11-4.42-6.33v-8.89c0-3.85,1.69-5.78,5.06-5.78,1.39,0,2.46.28,3.2.84s1.25,1.37,1.54,2.44.42,2.38.42,3.91h-4.03v-1.83c0-.45-.06-.82-.18-1.12s-.37-.45-.76-.45c-.48,0-.79.16-.94.48s-.23.67-.23,1.05v10c0,.55.07,1.01.22,1.35s.43.52.85.52.73-.17.87-.52.22-.81.22-1.38v-2.94h-1.1v-3.56h5.04v12.01h-1.65l-.7-1.73c-.72,1.28-1.85,1.92-3.4,1.92Z"/>
    <path d="M150.59,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM150.63,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
  </g>
  <rect x="4.39" y="4.39" width="21.21" height="21.21" transform="translate(15 -6.21) rotate(45)"/>
</svg>
    </div>
    <div class="hidden lg:flex items-center gap-5 text-sm font-medium text-gray-700">
      <a href="javascript:void(0)" class="text-indigo-600">Dashboard</a>
      <a href="javascript:void(0)" class="hover:text-indigo-600">Analytics</a>
      <a href="javascript:void(0)" class="hover:text-indigo-600">Inbox</a>
      <a href="javascript:void(0)" class="hover:text-indigo-600">Settings</a>
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
      <a href="javascript:void(0)" class="hidden sm:inline-flex rounded-full bg-gray-900 px-3 py-2 text-xs font-semibold text-white hover:bg-gray-800">New report</a>
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
          <a href="javascript:void(0)" class="text-indigo-600">Dashboard</a>
          <a href="javascript:void(0)" class="hover:text-indigo-600">Analytics</a>
          <a href="javascript:void(0)" class="hover:text-indigo-600">Inbox</a>
          <a href="javascript:void(0)" class="hover:text-indigo-600">Settings</a>
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
          <a href="javascript:void(0)" class="hidden sm:inline-flex rounded-full bg-gray-900 px-3 py-2 text-xs font-semibold text-white hover:bg-gray-800">New report</a>
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
