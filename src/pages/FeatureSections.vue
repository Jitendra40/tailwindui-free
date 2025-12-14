<script setup lang="ts">
import SimpleThreeColumn from "@/components/FeatureSections/SimpleThreeColumn.vue"
import GridWithIcons from "@/components/FeatureSections/GridWithIcons.vue"
import SplitWithScreenshot from "@/components/FeatureSections/SplitWithScreenshot.vue"
import DarkFeatureList from "@/components/FeatureSections/DarkFeatureList.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple-three-column', label: 'Simple Three Column' },
    { id: 'grid-with-icons', label: 'Grid With Icons' },
    { id: 'split-with-screenshot', label: 'Split With Screenshot' },
    { id: 'dark-feature-list', label: 'Dark Feature List' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Feature Sections</h1>
      <p class="text-gray-500">Showcase product features.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple-three-column" class="scroll-mt-24">
        <SimpleThreeColumn />
      </div>
      <div id="grid-with-icons" class="scroll-mt-24">
        <GridWithIcons />
      </div>
      <div id="split-with-screenshot" class="scroll-mt-24">
        <SplitWithScreenshot />
      </div>
      <div id="dark-feature-list" class="scroll-mt-24">
        <DarkFeatureList />
      </div>
    </div>
  </div>
</template>
