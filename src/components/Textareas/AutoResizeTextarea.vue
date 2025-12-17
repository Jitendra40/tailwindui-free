<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"


const htmlBlock = `
<div class="w-full max-w-lg">
  <label for="notes" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Session Notes</label>
  <div class="relative">
    <textarea 
      id="notes" 
      name="notes" 
      rows="1" 
      class="block w-full rounded-2xl border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 min-h-[120px] bg-gray-50/50 hover:bg-white transition-colors resize-none overflow-hidden" 
      placeholder="Start typing to see it grow..."
      oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'"
    ></textarea>
     <div class="absolute bottom-3 right-4 pointer-events-none">
        <svg class="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
     </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Auto Resize" description="Unbounded height textarea that grows with content." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
