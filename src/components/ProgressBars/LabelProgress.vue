<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <div class="flex items-center justify-between">
     <span class="text-sm font-medium text-gray-900">Migrating MySQL database...</span>
     <span class="text-sm font-medium text-gray-700">45%</span>
  </div>
  <div class="mt-2" aria-hidden="true">
    <div class="overflow-hidden rounded-full bg-gray-200">
      <div class="h-2 rounded-full bg-indigo-600" style="width: 45%" />
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Progress with Label" description="Bar with descriptive label and percent." :html-block="htmlBlock">
    <div>
      <div class="flex items-center justify-between">
         <span class="text-sm font-medium text-gray-900">Migrating MySQL database...</span>
         <span class="text-sm font-medium text-gray-700">45%</span>
      </div>
      <div class="mt-2" aria-hidden="true">
        <div class="overflow-hidden rounded-full bg-gray-200">
          <div class="h-2 rounded-full bg-indigo-600" style="width: 45%" />
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
