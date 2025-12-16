<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-flex text-left flex justify-end w-full">
    <details class="group relative">
      <summary class="inline-flex w-full justify-center items-center gap-x-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 hover:ring-gray-300 hover:shadow active:scale-95 cursor-pointer list-none focus:outline-none select-none">
        Account
        <svg class="-mr-1 h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 ease-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </summary>

      <div class="absolute right-0 z-10 mt-3 w-64 origin-top-right rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none overflow-hidden transform opacity-0 scale-95 -translate-y-2 duration-200 ease-out group-open:opacity-100 group-open:scale-100 group-open:translate-y-0 transition-all">
        <div class="px-5 py-4 bg-gray-50">
          <p class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Signed in as</p>
          <p class="truncate text-sm font-bold text-gray-900 mt-0.5">tom@example.com</p>
        </div>
        <div class="p-1.5 space-y-0.5">
          <a href="#" class="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Account settings</a>
          <a href="#" class="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Support</a>
          <a href="#" class="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">License</a>
        </div>
        <div class="p-1.5 bg-gray-50/50 border-t border-gray-100">
          <form method="POST" action="#">
            <button type="submit" class="w-full text-left block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">Sign out</button>
          </form>
        </div>
      </div>
    </details>
  </div>
`
</script>

<template>
  <PreviewWrapper title="Sectioned Menu" description="Sectioned dropdown with premium finishes." :html-block="htmlBlock">
  
  </PreviewWrapper>
</template>
