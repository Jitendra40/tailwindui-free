<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex w-full max-w-sm items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:bg-gray-50">
    <div class="flex flex-col">
       <span class="text-sm font-semibold text-gray-900">Airplane Mode</span>
       <span class="text-xs text-gray-500">Disable all wireless connections</span>
    </div>
    <label class="relative inline-flex items-center cursor-pointer">
       <input type="checkbox" class="sr-only peer" checked>
       <div class="h-6 w-11 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-600 peer-focus:ring-offset-2 peer-checked:bg-indigo-600"></div>
       <div class="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></div>
    </label>
</div>
`
</script>

<template>
  <PreviewWrapper title="Setting Toggle" description="List-item style toggle commonly found in settings." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
