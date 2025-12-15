<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative border-b border-gray-300 focus-within:border-indigo-600">
  <input type="text" name="name" id="name" class="block w-full border-0 border-b border-transparent bg-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Jane Doe" />
</div>
`
</script>

<template>
  <PreviewWrapper title="Line Input" description="Input with only a bottom border." :html-block="htmlBlock" />
</template>
