<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md max-w-sm">
  <div class="relative h-48">
    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Course Thumbnail" class="h-full w-full object-cover">
    <div class="absolute inset-0 bg-black/10"></div>
    <div class="absolute top-4 right-4">
      <div class="rounded-full bg-white/90 p-1 backdrop-blur-sm">
        <svg class="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
             <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
      </div>
    </div>
  </div>
  
  <div class="p-5">
    <div class="flex items-center gap-2 mb-3">
        <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Design</span>
        <span class="text-xs text-gray-500">• 12 Lessons</span>
    </div>
    
    <h3 class="text-lg font-bold text-gray-900 line-clamp-1">UI/UX Design Masterclass</h3>
    <p class="mt-1 text-sm text-gray-500 line-clamp-2">Learn to interpret user behavior and design interfaces that convert.</p>

    <div class="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
       <div class="flex items-center gap-2">
         <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Instructor" class="h-8 w-8 rounded-full">
         <div class="text-xs">
            <p class="font-medium text-gray-900">Kathy Patrick</p>
            <p class="text-gray-500">Senior Designer</p>
         </div>
       </div>
       <div class="flex flex-col items-end">
          <div class="flex items-center gap-1">
             <span class="text-sm font-bold text-gray-900">4.8</span>
             <svg class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
             </svg>
          </div>
          <span class="text-xs text-gray-400">(124 reviews)</span>
       </div>
    </div>
    
    <div class="mt-5">
        <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-medium text-gray-700">Course Progress</span>
            <span class="font-medium text-indigo-600">65%</span>
        </div>
        <div class="h-2 w-full rounded-full bg-gray-100">
            <div class="h-2 rounded-full bg-indigo-600" style="width: 65%"></div>
        </div>
    </div>
    
     <button class="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500">
        Continue Learning
     </button>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Education Course Card"
    description="Course progress card with instructor details and rating."
    :html-block="htmlBlock"
  >
    <div class="overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md max-w-sm mx-auto">
      <div class="relative h-48">
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Course Thumbnail" class="h-full w-full object-cover">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-4 right-4">
          <div class="rounded-full bg-white/90 p-1 backdrop-blur-sm">
            <svg class="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div class="p-5">
        <div class="flex items-center gap-2 mb-3">
            <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Design</span>
            <span class="text-xs text-gray-500">• 12 Lessons</span>
        </div>
        
        <h3 class="text-lg font-bold text-gray-900 line-clamp-1">UI/UX Design Masterclass</h3>
        <p class="mt-1 text-sm text-gray-500 line-clamp-2">Learn to interpret user behavior and design interfaces that convert.</p>

        <div class="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
           <div class="flex items-center gap-2">
             <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Instructor" class="h-8 w-8 rounded-full">
             <div class="text-xs">
                <p class="font-medium text-gray-900">Kathy Patrick</p>
                <p class="text-gray-500">Senior Designer</p>
             </div>
           </div>
           <div class="flex flex-col items-end">
              <div class="flex items-center gap-1">
                 <span class="text-sm font-bold text-gray-900">4.8</span>
                 <svg class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                 </svg>
              </div>
              <span class="text-xs text-gray-400">(124 reviews)</span>
           </div>
        </div>
        
        <div class="mt-5">
            <div class="flex items-center justify-between text-xs mb-1">
                <span class="font-medium text-gray-700">Course Progress</span>
                <span class="font-medium text-indigo-600">65%</span>
            </div>
            <div class="h-2 w-full rounded-full bg-gray-100">
                <div class="h-2 rounded-full bg-indigo-600" style="width: 65%"></div>
            </div>
        </div>
        
         <button class="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500">
            Continue Learning
         </button>
      </div>
    </div>
  </PreviewWrapper>
</template>
