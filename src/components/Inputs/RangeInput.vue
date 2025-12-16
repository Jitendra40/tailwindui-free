<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"


const htmlBlock = `
<div class="space-y-2">
  <label class="text-sm font-medium leading-none text-foreground">Usage Limit</label>
  <div class="mt-4 flex  items-center space-x-3 rounded-xl border border-input bg-white p-3 hover:border-gray-400 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200 ">
    <button class="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-gray-200 hover:text-foreground transition-colors" aria-label="Decrease">
      <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="12" height="2" rx="1" fill="currentColor"/></svg>
    </button>
    <div class="flex-1 px-2">
       <input type="range" min="0" max="100" class="w-full cursor-pointer appearance-none rounded-xl bg-muted h-1 accent-primary" />
    </div>
    <span class="w-8 text-center text-sm font-medium text-foreground">25</span>
    <button class="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-gray-200 hover:text-foreground transition-colors" aria-label="Increase">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0V12M0 6H12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Range Slider" description="Slider with stepper controls." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
