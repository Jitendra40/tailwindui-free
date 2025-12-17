<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
    <!-- Video Background Placeholder -->
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-purple-800 to-indigo-800 opacity-50"></div>
    <div class="absolute inset-0 z-0 flex items-center justify-center text-white opacity-20 text-9xl font-bold animate-pulse">
        VIDEO
    </div>
    
    <div class="relative z-10 text-center px-4">
        <h1 class="text-5xl font-bold tracking-tight text-white sm:text-7xl">Experience Depth</h1>
        <p class="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">Immersive experiences appearing soon on your screen.</p>
        <div class="mt-10">
             <a href="#" class="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/20 backdrop-blur-sm border border-white/20 transition">Explore Beta</a>
        </div>
    </div>
</div>
`;

defineProps<{ isFullScreen?: boolean }>()
</script>

<template>
  <PreviewWrapper title="Coming Soon - Video Background" description="Immersive video background launch." :html-block="htmlBlock" :fullScreen="isFullScreen">
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
     <div class="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
