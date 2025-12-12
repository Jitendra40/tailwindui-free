<script setup lang="ts">
import ThreeColumnCategory from "@/components/CategoryPreviews/ThreeColumnCategory.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Category Previews</h1>
      <p class="text-gray-500">Collections grid.</p>
    </div>

    <div class="grid gap-10">
      <ThreeColumnCategory />
    </div>
  </div>
</template>
