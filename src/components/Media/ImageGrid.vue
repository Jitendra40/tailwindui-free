<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
   <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100">
       <img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=300&h=300" class="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
   </div>
   <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100">
       <img src="https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&q=80&w=300&h=300" class="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
   </div>
   <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100">
       <img src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=300&h=300" class="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
   </div>
    <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100">
       <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=300&h=300" class="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
   </div>
    <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100">
       <img src="https://images.unsplash.com/photo-1531379410402-fa367f6af767?auto=format&fit=crop&q=80&w=300&h=300" class="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
   </div>
    <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100 flex items-center justify-center text-gray-500 bg-gray-50 hover:bg-gray-100 cursor-pointer">
       <span class="text-sm font-medium">+12 More</span>
   </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Image Grid" description="Square grid layout for gallery." :html-block="htmlBlock">
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
       <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100">
           <img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=300&h=300" class="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
       </div>
       <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100">
           <img src="https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&q=80&w=300&h=300" class="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
       </div>
       <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100">
           <img src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=300&h=300" class="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
       </div>
        <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100">
           <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=300&h=300" class="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
       </div>
        <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100">
           <img src="https://images.unsplash.com/photo-1531379410402-fa367f6af767?auto=format&fit=crop&q=80&w=300&h=300" class="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
       </div>
        <div class="relative aspect-square overflow-hidden rounded-md bg-gray-100 flex items-center justify-center text-gray-500 bg-gray-50 hover:bg-gray-100 cursor-pointer">
           <span class="text-sm font-medium">+12 More</span>
       </div>
    </div>
  </PreviewWrapper>
</template>
