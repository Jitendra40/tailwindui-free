<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="relative h-16 bg-gray-800 flex items-center justify-center border border-dashed border-gray-600">
  <a href="#" class="absolute z-50 px-4 py-2 text-white font-medium rounded-md outline-none border border-white/50 bg-white/10 backdrop-blur-sm transition-opacity opacity-0 focus:opacity-100">
    Skip to footer
  </a>
</div>
`;
</script>

<template>
  <PreviewWrapper title="Ghost Style" description="Subtle style for dark backgrounds." :html-block="htmlBlock">
     <div class="relative h-16 bg-gray-800 flex items-center justify-center border border-dashed border-gray-600">
         <span class="text-sm text-gray-400 absolute">Dark Mode / Ghost</span>
        <a href="#" class="absolute z-50 px-4 py-2 text-white font-medium rounded-md outline-none border border-white/50 bg-white/10 backdrop-blur-sm transition-opacity opacity-0 focus:opacity-100">
          Skip to footer
        </a>
     </div>
  </PreviewWrapper>
</template>
