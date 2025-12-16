<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<a href="#" class="fixed top-4 left-4 z-50 px-4 py-2 bg-white text-blue-600 border border-blue-600 font-medium rounded-md shadow-lg outline-none opacity-0 focus:opacity-100 pointer-events-none focus:pointer-events-auto transition-opacity">
  Skip to navigation
</a>
`;
</script>

<template>
  <PreviewWrapper title="Fixed Position" description="Appears fixed in the viewport corner (Click then Tab)." :html-block="htmlBlock">
    <div class="relative h-16 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300">
        <span class="text-sm text-gray-500 absolute">Tab into this area</span>
      <a href="#" class="fixed top-4 left-4 z-50 px-4 py-2 bg-white text-blue-600 border border-blue-600 font-medium rounded-md shadow-lg outline-none opacity-0 focus:opacity-100 pointer-events-none focus:pointer-events-auto transition-opacity">
        Skip to navigation
      </a>
    </div>
  </PreviewWrapper>
</template>
