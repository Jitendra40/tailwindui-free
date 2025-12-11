<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full max-w-sm">
    <div class="relative w-full pb-[56.25%] overflow-hidden rounded-lg bg-gray-100">
         <img src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3" alt="Abstract painting" class="absolute top-0 left-0 w-full h-full object-cover" />
    </div>
    <p class="mt-2 text-sm text-gray-500">16:9 Aspect Ratio</p>
</div>
`
</script>

<template>
  <PreviewWrapper title="Aspect Ratio" description="Responsive container maintaining aspect ratio." :html-block="htmlBlock">
    <div class="w-full max-w-sm">
        <div class="relative w-full pb-[56.25%] overflow-hidden rounded-lg bg-gray-100">
             <img src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3" alt="Abstract painting" class="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
        <p class="mt-2 text-sm text-gray-500">16:9 Aspect Ratio</p>
    </div>
  </PreviewWrapper>
</template>
