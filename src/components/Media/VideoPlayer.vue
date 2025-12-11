<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative w-full max-w-lg aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg group">
    <!-- Placeholder Image -->
    <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover opacity-60" alt="Video thumbnail" />
    
    <!-- Center Play Button -->
    <div class="absolute inset-0 flex items-center justify-center">
          <button class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <svg class="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="6 3 20 12 6 21 6 3"/>
              </svg>
          </button>
    </div>

    <!-- Controls Overlay -->
    <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <!-- Progress Bar -->
        <div class="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer">
            <div class="w-1/3 h-full bg-indigo-500 rounded-full relative">
                <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
            </div>
        </div>
        
        <div class="flex items-center justify-between text-white">
            <div class="flex items-center gap-4">
                <button class="hover:text-indigo-400">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="6 3 20 12 6 21 6 3"/>
                  </svg>
                </button>
                <span class="text-sm font-medium">02:14 / 05:30</span>
            </div>
             <div class="flex items-center gap-4">
                <button class="hover:text-indigo-400">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                  </svg>
                </button>
                 <button class="hover:text-indigo-400">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
                          <line x1="15" x2="21" y1="3" y2="9"/>
                          <line x1="9" x2="3" y1="21" y2="15"/>
                          <polyline points="21 9 21 3 15 3"/>
                          <polyline points="3 15 3 21 9 21"/>
                      </svg>
                 </button>
            </div>
        </div>
    </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Video Player UI" description="Mock video player with controls." :html-block="htmlBlock">
    <div class="relative w-full max-w-lg aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg group">
        <!-- Placeholder Image -->
        <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover opacity-60" alt="Video thumbnail" />
        
        <!-- Center Play Button -->
        <div class="absolute inset-0 flex items-center justify-center">
              <button class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <svg class="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="6 3 20 12 6 21 6 3"/>
                  </svg>
              </button>
        </div>

        <!-- Controls Overlay -->
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <!-- Progress Bar -->
            <div class="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer">
                <div class="w-1/3 h-full bg-indigo-500 rounded-full relative">
                    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
                </div>
            </div>
            
            <div class="flex items-center justify-between text-white">
                <div class="flex items-center gap-4">
                    <button class="hover:text-indigo-400">
                      <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="6 3 20 12 6 21 6 3"/>
                      </svg>
                    </button>
                    <span class="text-sm font-medium">02:14 / 05:30</span>
                </div>
                 <div class="flex items-center gap-4">
                    <button class="hover:text-indigo-400">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                      </svg>
                    </button>
                     <button class="hover:text-indigo-400">
                          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
                              <line x1="15" x2="21" y1="3" y2="9"/>
                              <line x1="9" x2="3" y1="21" y2="15"/>
                              <polyline points="21 9 21 3 15 3"/>
                              <polyline points="3 15 3 21 9 21"/>
                          </svg>
                     </button>
                </div>
            </div>
        </div>
    </div>
  </PreviewWrapper>
</template>
