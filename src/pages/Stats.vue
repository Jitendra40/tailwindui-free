<script setup lang="ts">
import SimpleStats from "@/components/Stats/SimpleStats.vue"
import DarkStats from "@/components/Stats/DarkStats.vue"
import StatsWithDescription from "@/components/Stats/StatsWithDescription.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Stats Sections</h1>
      <p class="text-gray-500">Statistics and metrics.</p>
    </div>

    <div class="grid gap-10">
      <SimpleStats />
      <DarkStats />
      <StatsWithDescription />
    </div>
  </div>
</template>
