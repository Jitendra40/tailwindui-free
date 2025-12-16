<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="relative h-16 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300 overflow-hidden">
  <a href="#" class="absolute top-0 left-0 w-full bg-blue-600 text-white text-center py-2 font-medium transition-transform transform -translate-y-full focus:translate-y-0 outline-none">
    Skip to main content
  </a>
</div>
`;
</script>

<template>
  <PreviewWrapper title="Full Width Slide" description="Slides down from the top." :html-block="htmlBlock">
    <div class="relative h-16 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300 overflow-hidden">
       <span class="text-sm text-gray-500 absolute">Tab into this area</span>
      <a href="#" class="absolute top-0 left-0 w-full bg-blue-600 text-white text-center py-2 font-medium transition-transform transform -translate-y-full focus:translate-y-0 outline-none">
        Skip to main content
      </a>
    </div>
  </PreviewWrapper>
</template>
