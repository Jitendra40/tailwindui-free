<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<header class="bg-slate-900 text-white">
  <div class="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
    <div class="flex items-center gap-2">
      <svg class="h-8 w-8 text-indigo-300" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M10 7h12l2 4v14H8V11l2-4Z" fill="currentColor" fill-opacity="0.16" />
        <path d="M12 7h8v4h4v12H8V11h4V7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        <path d="M12 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <path d="M12 20h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
      <div>
        <div class="text-sm font-semibold leading-tight">DocsKit</div>
        <div class="text-[11px] font-medium text-indigo-200/80">v2.4.1 â€¢ Updated today</div>
      </div>
    </div>
    <div class="flex flex-1 items-center justify-end gap-3">
      <div class="hidden lg:block w-full max-w-md">
        <label for="docs-search" class="sr-only">Search docs</label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-indigo-200/80">
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>
          </div>
          <input id="docs-search" name="docs-search" class="block w-full rounded-md border border-indigo-500/30 bg-white/5 py-2 pl-9 pr-3 text-sm text-white placeholder:text-indigo-100/60 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/60" placeholder="Search API, guides, releases" type="search">
        </div>
      </div>
      <div class="hidden md:flex items-center gap-4 text-sm font-medium text-indigo-100">
        <a href="javascript:void(0)" class="hover:text-white">Guides</a>
        <a href="javascript:void(0)" class="hover:text-white">API</a>
        <a href="javascript:void(0)" class="hover:text-white">Changelog</a>
        <a href="javascript:void(0)" class="hover:text-white">Status</a>
      </div>
      <a href="javascript:void(0)" class="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-indigo-400">Open in GitHub</a>
      <button type="button" class="md:hidden inline-flex items-center rounded-md p-2 text-indigo-100 ring-1 ring-white/15">
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
  <PreviewWrapper title="Docs Header" description="Docs-style header with search and version badge." :html-block="htmlBlock">
    <header class="bg-slate-900 text-white">
      <div class="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
        <div class="flex items-center gap-2">
          <svg class="h-8 w-8 text-indigo-300" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M10 7h12l2 4v14H8V11l2-4Z" fill="currentColor" fill-opacity="0.16" />
            <path d="M12 7h8v4h4v12H8V11h4V7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
            <path d="M12 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M12 20h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <div>
            <div class="text-sm font-semibold leading-tight">DocsKit</div>
            <div class="text-[11px] font-medium text-indigo-200/80">v2.4.1 â€¢ Updated today</div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-end gap-3">
          <div class="hidden lg:block w-full max-w-md">
            <label for="docs-search" class="sr-only">Search docs</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-indigo-200/80">
                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
              </div>
              <input id="docs-search" name="docs-search" class="block w-full rounded-md border border-indigo-500/30 bg-white/5 py-2 pl-9 pr-3 text-sm text-white placeholder:text-indigo-100/60 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/60" placeholder="Search API, guides, releases" type="search">
            </div>
          </div>
          <div class="hidden md:flex items-center gap-4 text-sm font-medium text-indigo-100">
            <a href="javascript:void(0)" class="hover:text-white">Guides</a>
            <a href="javascript:void(0)" class="hover:text-white">API</a>
            <a href="javascript:void(0)" class="hover:text-white">Changelog</a>
            <a href="javascript:void(0)" class="hover:text-white">Status</a>
          </div>
          <a href="javascript:void(0)" class="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-indigo-400">Open in GitHub</a>
          <button type="button" class="md:hidden inline-flex items-center rounded-md p-2 text-indigo-100 ring-1 ring-white/15">
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
