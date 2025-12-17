<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
    <div class="text-center">
        <h1 class="text-9xl font-black text-gray-200">SOON</h1>
        <div class="mt-[-4rem] sm:mt-[-6rem]">
             <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Something awesome is coming.</p>
             <p class="mt-4 text-base text-gray-500">We are working hard to bring you the best experience.</p>
        </div>
        <div class="mt-10">
             <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">Notify me &rarr;</a>
        </div>
    </div>
</div>
`;

defineProps<{ isFullScreen?: boolean }>()
</script>

<template>
  <PreviewWrapper title="Coming Soon - Simple" description="Minimal Coming Soon." :html-block="htmlBlock" :fullScreen="isFullScreen">
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
     <div class="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
