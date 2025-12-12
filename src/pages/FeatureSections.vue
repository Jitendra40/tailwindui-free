<script setup lang="ts">
import SimpleThreeColumn from "@/components/FeatureSections/SimpleThreeColumn.vue"
import GridWithIcons from "@/components/FeatureSections/GridWithIcons.vue"
import SplitWithScreenshot from "@/components/FeatureSections/SplitWithScreenshot.vue"
import DarkFeatureList from "@/components/FeatureSections/DarkFeatureList.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Feature Sections</h1>
      <p class="text-gray-500">Showcase product features.</p>
    </div>

    <div class="grid gap-10">
      <SimpleThreeColumn />
      <GridWithIcons />
      <SplitWithScreenshot />
      <DarkFeatureList />
    </div>
  </div>
</template>
