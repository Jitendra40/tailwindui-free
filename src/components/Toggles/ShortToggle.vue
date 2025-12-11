<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="group relative inline-flex h-5 w-10 flex-shrink-0 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
    <span aria-hidden="true" class="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-indigo-600" />
    <span aria-hidden="true" class="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-5" />
  </div>
</label>
`
</script>

<template>
  <PreviewWrapper title="Short Toggle" description="Compact variant." :html-block="htmlBlock">
     <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer">
      <!-- To style the sibling based on peer state, we might need to adjust the structure slightly or use peer-checked on the wrapper children -->
      <!-- Actually, the 'peer' must be a sibling. Let's wrap the visual part in a div that is a sibling or child -->
       <div class="group relative inline-flex h-5 w-10 flex-shrink-0 items-center justify-center rounded-full focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2">
        <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
        <!-- We need the background color on this span to change when input is checked. But input is inside label. 
             If input is 'peer', siblings can react. 
             Let's restructure: input inside label, siblings inside label.
        -->
         <span aria-hidden="true" class="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-indigo-600"></span>
         <span aria-hidden="true" class="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
      </div>
    </label>
  </PreviewWrapper>
</template>
