<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"
import { ref } from 'vue'

const rating = ref(3)
const hoverRating = ref(0)

const htmlBlock = `
<div class="space-y-2">
  <label class="text-sm font-medium leading-none text-foreground">Rating</label>
  <div class="flex items-center gap-1">
    <button class="cursor-pointer text-yellow-400 hover:scale-110 transition-transform focus:outline-none">
      <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    </button>
    <!-- Repeat for 5 stars, changing fill based on state -->
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Star Rating" description="Interactive rating input." :html-block="htmlBlock">
    <div class="space-y-2">
      <label class="text-sm font-medium leading-none text-foreground">Rating</label>
      <div class="flex items-center gap-1">
        <button 
          v-for="star in 5" 
          :key="star"
          type="button"
          @click="rating = star"
          @mouseenter="hoverRating = star"
          @mouseleave="hoverRating = 0"
          class="cursor-pointer transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full p-0.5"
          :class="(hoverRating || rating) >= star ? 'text-yellow-400' : 'text-muted'"
        >
          <svg class="h-8 w-8 fill-current transition-colors duration-200" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </button>
        <span class="ml-2 text-sm text-muted-foreground font-medium">{{ hoverRating || rating }}.0</span>
      </div>
    </div>
  </PreviewWrapper>
</template>
