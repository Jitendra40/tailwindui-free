<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="bg-black min-h-screen text-white">
  <header class="absolute inset-x-0 top-0 z-50 p-6 flex justify-between items-center mix-blend-difference">
      <span class="text-2xl font-bold tracking-widest uppercase">Lens</span>
      <nav class="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#" class="hover:text-gray-300">Gallery</a>
          <a href="#" class="hover:text-gray-300">Series</a>
          <a href="#" class="hover:text-gray-300">About</a>
          <a href="#" class="hover:text-gray-300">Contact</a>
      </nav>
  </header>

  <main class="pt-32 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-gray-800 aspect-[3/4] rounded-sm relative overflow-hidden group">
               <div class="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-gray-300 transition">Photo 1</div>
          </div>
          <div class="bg-gray-800 aspect-[3/4] rounded-sm relative overflow-hidden group">
               <div class="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-gray-300 transition">Photo 2</div>
          </div>
          <div class="bg-gray-800 aspect-[3/4] rounded-sm relative overflow-hidden group">
               <div class="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-gray-300 transition">Photo 3</div>
          </div>
           <div class="bg-gray-800 aspect-[3/4] rounded-sm relative overflow-hidden group">
               <div class="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-gray-300 transition">Photo 4</div>
          </div>
          <div class="bg-gray-800 aspect-[3/4] rounded-sm relative overflow-hidden group">
               <div class="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-gray-300 transition">Photo 5</div>
          </div>
          <div class="bg-gray-800 aspect-[3/4] rounded-sm relative overflow-hidden group">
               <div class="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-gray-300 transition">Photo 6</div>
          </div>
      </div>
  </main>
    <footer class="py-12 text-center text-gray-500 text-xs uppercase tracking-widest">
        &copy; 2025 Lens Photography.
    </footer>

</div>
`;

defineProps<{ isFullScreen?: boolean }>()
</script>

<template>
  <PreviewWrapper title="Photography Landing" description="Dark masonry portfolio for photographers." :html-block="htmlBlock" :fullScreen="isFullScreen">
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
     <div class="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
