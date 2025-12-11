<script setup lang="ts">
import { ref } from 'vue'
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const volume = ref(50)

const htmlBlock = `
<div class="flex items-center gap-4">
    <button type="button" class="text-gray-400 hover:text-gray-600" @click="volume = 0">
         <svg v-if="volume > 0" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
           <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
           <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
         </svg>
         <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
           <line x1="23" x2="17" y1="9" y2="15"/>
           <line x1="17" x2="23" y1="9" y2="15"/>
         </svg>
    </button>
    <input type="range" v-model="volume" min="0" max="100" class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none focus:ring-0" />
    <span class="w-8 text-sm text-gray-500 text-right">{{ volume }}%</span>
</div>
`
</script>

<template>
  <PreviewWrapper title="Volume Slider" description="With accompanying icon and value." :html-block="htmlBlock">
    <div class="flex items-center gap-4">
        <button type="button" class="text-gray-400 hover:text-gray-600" @click="volume = 0">
             <svg v-if="volume > 0" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
               <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
               <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
             </svg>
             <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
               <line x1="23" x2="17" y1="9" y2="15"/>
               <line x1="17" x2="23" y1="9" y2="15"/>
             </svg>
        </button>
        <input type="range" v-model="volume" min="0" max="100" class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none focus:ring-0" />
        <span class="w-8 text-sm text-gray-500 text-right">{{ volume }}%</span>
    </div>
  </PreviewWrapper>
</template>
