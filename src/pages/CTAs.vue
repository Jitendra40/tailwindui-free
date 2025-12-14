<script setup lang="ts">
import SimpleCentered from "@/components/CTAs/SimpleCentered.vue"
import SimpleJustified from "@/components/CTAs/SimpleJustified.vue"
import BrandPanel from "@/components/CTAs/BrandPanel.vue"
import SplitWithImageCTA from "@/components/CTAs/SplitWithImageCTA.vue"
import TwoColumnCTA from "@/components/CTAs/TwoColumnCTA.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple-centered', label: 'Simple Centered' },
    { id: 'simple-justified', label: 'Simple Justified' },
    { id: 'brand-panel', label: 'Brand Panel' },
    { id: 'split-with-image', label: 'Split With Image' },
    { id: 'two-column', label: 'Two Column' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">CTA Sections</h1>
      <p class="text-gray-500">Call to action sections to drive conversions.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple-centered" class="scroll-mt-24">
        <SimpleCentered />
      </div>
      <div id="simple-justified" class="scroll-mt-24">
        <SimpleJustified />
      </div>
      <div id="brand-panel" class="scroll-mt-24">
        <BrandPanel />
      </div>
      <div id="split-with-image" class="scroll-mt-24">
        <SplitWithImageCTA />
      </div>
      <div id="two-column" class="scroll-mt-24">
        <TwoColumnCTA />
      </div>
    </div>
  </div>
</template>
