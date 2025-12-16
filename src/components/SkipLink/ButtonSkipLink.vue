<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="relative h-16 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300">
  <a href="#" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-xl outline-none scale-0 focus:scale-100 transition-transform duration-200">
    Jump to Content
  </a>
</div>
`;
</script>

<template>
  <PreviewWrapper title="Center Button" description="Prominent call to action style." :html-block="htmlBlock">
    <div class="relative h-16 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300">
        <span class="text-sm text-gray-500 absolute">Tab into this area</span>
      <a href="#" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-xl outline-none scale-0 focus:scale-100 transition-transform duration-200">
        Jump to Content
      </a>
    </div>
  </PreviewWrapper>
</template>
