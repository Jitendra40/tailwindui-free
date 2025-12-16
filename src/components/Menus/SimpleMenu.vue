<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-flex text-left flex justify-end w-full">
    <details class="group relative">
        <summary class="inline-flex w-full justify-center items-center gap-x-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 hover:ring-gray-300 hover:shadow active:scale-95 cursor-pointer list-none focus:outline-none select-none">
            Options
            <svg class="-mr-1 h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 ease-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
               <path d="m6 9 6 6 6-6"/>
            </svg>
        </summary>

        <div class="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none p-2 transform opacity-0 scale-95 -translate-y-2 duration-200 ease-out group-open:opacity-100 group-open:scale-100 group-open:translate-y-0 transition-all">
          <a href="javascript:void(0)" class="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Account settings</a>
          <a href="javascript:void(0)" class="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Support</a>
          <a href="javascript:void(0)" class="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">License</a>
          <div class="my-1.5 h-px bg-gray-100 mx-2"></div>
          <form method="POST" action="#">
            <button type="submit" class="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">Sign out</button>
          </form>
        </div>
    </details>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Menu" description="Polished dropdown with smooth animations." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
