<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md max-w-sm">
  <div class="relative">
    <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Video Thumbnail" class="h-48 w-full object-cover">
    <div class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
        <div class="h-12 w-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
            <svg class="h-6 w-6 fill-current pl-1" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
        </div>
    </div>
    <div class="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
       12:45
    </div>
  </div>
  
  <div class="p-4">
    <div class="flex justify-between items-start">
        <h3 class="font-bold text-gray-900 line-clamp-2 pr-2">The Future of AI in 2024: Trends to Watch</h3>
        <button class="text-gray-400 hover:text-gray-600">
             <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
             </svg>
        </button>
    </div>
    <div class="mt-2 flex items-center text-xs text-gray-500">
       <span>Tech Daily</span>
       <span class="mx-1">•</span>
       <span>45K views</span>
       <span class="mx-1">•</span>
       <span>2 days ago</span>
    </div>
    
    <div class="mt-4 grid grid-cols-3 gap-2 border-t border-gray-100 pt-3 text-center">
       <div>
         <p class="text-[10px] uppercase font-bold text-gray-400">CTR</p>
         <p class="font-semibold text-gray-900">8.5%</p>
         <p class="text-[10px] font-medium text-green-600">▲ 1.2%</p>
       </div>
       <div class="border-l border-gray-100">
         <p class="text-[10px] uppercase font-bold text-gray-400">Watch Time</p>
         <p class="font-semibold text-gray-900">6:20</p>
         <p class="text-[10px] font-medium text-green-600">▲ 0:45</p>
       </div>
       <div class="border-l border-gray-100">
         <p class="text-[10px] uppercase font-bold text-gray-400">Revenue</p>
         <p class="font-semibold text-gray-900">$124</p>
         <p class="text-[10px] font-medium text-red-600">▼ $5</p>
       </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Video Analytics Card"
    description="Video content card with thumbnail, duration, and key performance metrics."
    :html-block="htmlBlock"
  >
     <div class="overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md max-w-sm mx-auto">
      <div class="relative">
        <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Video Thumbnail" class="h-48 w-full object-cover">
         <div class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="h-12 w-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
                <svg class="h-6 w-6 fill-current pl-1" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
            </div>
        </div>
        <div class="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
           12:45
        </div>
      </div>
      
      <div class="p-4">
        <div class="flex justify-between items-start">
            <h3 class="font-bold text-gray-900 line-clamp-2 pr-2">The Future of AI in 2024: Trends to Watch</h3>
            <button class="text-gray-400 hover:text-gray-600">
                 <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                 </svg>
            </button>
        </div>
        <div class="mt-2 flex items-center text-xs text-gray-500">
           <span>Tech Daily</span>
           <span class="mx-1">•</span>
           <span>45K views</span>
           <span class="mx-1">•</span>
           <span>2 days ago</span>
        </div>
        
        <div class="mt-4 grid grid-cols-3 gap-2 border-t border-gray-100 pt-3 text-center">
           <div>
             <p class="text-[10px] uppercase font-bold text-gray-400">CTR</p>
             <p class="font-semibold text-gray-900">8.5%</p>
             <p class="text-[10px] font-medium text-green-600">▲ 1.2%</p>
           </div>
           <div class="border-l border-gray-100">
             <p class="text-[10px] uppercase font-bold text-gray-400">Watch Time</p>
             <p class="font-semibold text-gray-900">6:20</p>
             <p class="text-[10px] font-medium text-green-600">▲ 0:45</p>
           </div>
           <div class="border-l border-gray-100">
             <p class="text-[10px] uppercase font-bold text-gray-400">Revenue</p>
             <p class="font-semibold text-gray-900">$124</p>
             <p class="text-[10px] font-medium text-red-600">▼ $5</p>
           </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
