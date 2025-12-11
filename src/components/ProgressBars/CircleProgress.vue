<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex items-center gap-8">
    <div class="relative h-20 w-20">
        <svg class="h-full w-full -rotate-90 transform text-gray-200" viewBox="0 0 36 36">
          <path stroke-width="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
           <path stroke-dasharray="75, 100" stroke-width="3" stroke="currentColor" fill="none" class="text-indigo-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
         <div class="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-900">75%</div>
    </div>

     <div class="relative h-20 w-20">
        <svg class="h-full w-full -rotate-90 transform text-gray-200" viewBox="0 0 36 36">
          <path stroke-width="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
           <path stroke-dasharray="33, 100" stroke-width="3" stroke="currentColor" fill="none" class="text-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
         <div class="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-900">33%</div>
    </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Circular Progress" description="SVG-based circular progress indicators." :html-block="htmlBlock">
    <div class="flex items-center gap-8">
        <div class="relative h-20 w-20">
            <svg class="h-full w-full -rotate-90 transform text-gray-200" viewBox="0 0 36 36">
              <path stroke-width="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
               <path stroke-dasharray="75, 100" stroke-width="3" stroke="currentColor" fill="none" class="text-indigo-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
             <div class="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-900">75%</div>
        </div>

         <div class="relative h-20 w-20">
            <svg class="h-full w-full -rotate-90 transform text-gray-200" viewBox="0 0 36 36">
              <path stroke-width="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
               <path stroke-dasharray="33, 100" stroke-width="3" stroke="currentColor" fill="none" class="text-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
             <div class="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-900">33%</div>
        </div>
    </div>
  </PreviewWrapper>
</template>
