<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-gray-300"></div>
  </div>
  <div class="relative flex justify-center">
    <span class="bg-white px-3 text-base font-semibold leading-6 text-gray-900">Continue</span>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Label Centered" description="Divider with centered text label." :html-block="htmlBlock" />
</template>
