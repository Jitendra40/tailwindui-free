<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative max-w-sm group cursor-pointer">
    <div class="overflow-hidden rounded-lg bg-gray-100 shadow-md">
         <img src="https://images.unsplash.com/photo-1558981806-ec527fa84f3d?auto=format&fit=crop&q=80&w=800" alt="Car" class="w-full h-48 object-cover group-hover:opacity-75 transition-opacity" />
    </div>
    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
         <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
           <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9"/>
              <polyline points="9 21 3 21 3 15"/>
              <line x1="21" x2="14" y1="3" y2="10"/>
              <line x1="3" x2="10" y1="21" y2="14"/>
           </svg>
         </span>
    </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Lightbox Thumbnail" description="Hover effect with expanding icon." :html-block="htmlBlock">
    <div class="relative max-w-sm group cursor-pointer">
        <div class="overflow-hidden rounded-lg bg-gray-100 shadow-md">
             <img src="https://images.unsplash.com/photo-1558981806-ec527fa84f3d?auto=format&fit=crop&q=80&w=800" alt="Car" class="w-full h-48 object-cover group-hover:opacity-75 transition-opacity" />
        </div>
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
             <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
               <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 3 21 3 21 9"/>
                  <polyline points="9 21 3 21 3 15"/>
                  <line x1="21" x2="14" y1="3" y2="10"/>
                  <line x1="3" x2="10" y1="21" y2="14"/>
               </svg>
             </span>
        </div>
    </div>
  </PreviewWrapper>
</template>
