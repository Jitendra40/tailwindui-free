<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">We love creators</h2>
    <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
  </div>
  <div class="mx-auto mt-16 max-w-7xl sm:mt-20">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 class="text-lg font-semibold text-white">Feature One</h3>
                <p class="mt-2 text-gray-400">Lorem ipsum dolor sit amet.</p>
            </div>
             <div class="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 class="text-lg font-semibold text-white">Feature Two</h3>
                <p class="mt-2 text-gray-400">Lorem ipsum dolor sit amet.</p>
            </div>
             <div class="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 class="text-lg font-semibold text-white">Feature Three</h3>
                <p class="mt-2 text-gray-400">Lorem ipsum dolor sit amet.</p>
            </div>
      </div>
  </div>
</div>
`;

defineProps<{ isFullScreen?: boolean }>()
</script>

<template>
  <PreviewWrapper title="About Us - Dark" description="Dark themed about page." :html-block="htmlBlock" :fullScreen="isFullScreen">
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
     <div class="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
