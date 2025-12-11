<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
  <dt class="truncate text-sm font-medium text-gray-500">Total Subscribers</dt>
  <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">71,897</dd>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Stat" description="Single metric stat card." :html-block="htmlBlock">
    <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <dt class="truncate text-sm font-medium text-gray-500">Total Subscribers</dt>
      <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">71,897</dd>
    </div>
  </PreviewWrapper>
</template>
