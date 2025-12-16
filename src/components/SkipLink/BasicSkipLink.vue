<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="relative h-16 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300">
  <span class="text-sm text-gray-500 absolute">Tab into this area to see the link</span>
  <a href="javascript:void(0)" class="absolute z-50 px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-lg outline-none focus:outline-none transition-transform duration-200 transform -translate-y-20 focus:translate-y-0">
    Skip to content
  </a>
</div>
`;
</script>

<template>
  <PreviewWrapper title="Basic Pop-in" description="Drops down when focused." :html-block="htmlBlock">
    <div class="relative h-16 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300">
      <span class="text-sm text-gray-500 absolute">Tab into this area to see the link</span>
      <a href="javascript:void(0)" class="absolute z-50 px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-lg outline-none focus:outline-none transition-transform duration-200 transform -translate-y-20 focus:translate-y-0">
        Skip to content
      </a>
    </div>
  </PreviewWrapper>
</template>
