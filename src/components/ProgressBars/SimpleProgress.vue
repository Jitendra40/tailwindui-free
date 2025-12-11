<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <h4 class="sr-only">Status</h4>
  <div class="mt-2" aria-hidden="true">
    <div class="overflow-hidden rounded-full bg-gray-200">
      <div class="h-2 rounded-full bg-indigo-600" style="width: 37.5%" />
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Progress Bar" description="Basic minimal progress bar." :html-block="htmlBlock">
    <div>
      <h4 class="sr-only">Status</h4>
      <div class="mt-2" aria-hidden="true">
        <div class="overflow-hidden rounded-full bg-gray-200">
          <div class="h-2 rounded-full bg-indigo-600" style="width: 37.5%" />
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
