<script setup lang="ts">
import WithImageGallery from "@/components/ProductOverviews/WithImageGallery.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Product Overviews</h1>
      <p class="text-gray-500">Detailed product pages.</p>
    </div>

    <div class="grid gap-10">
      <WithImageGallery />
    </div>
  </div>
</template>
