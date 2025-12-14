<script setup lang="ts">
import SinglePriceSimple from "@/components/Pricing/SinglePriceSimple.vue"
import ThreeTiers from "@/components/Pricing/ThreeTiers.vue"
import SplitWithImage from "@/components/Pricing/SplitWithImage.vue"
import FourTiers from "@/components/Pricing/FourTiers.vue"
import ComparisonTable from "@/components/Pricing/ComparisonTable.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'single-price', label: 'Single Price' },
    { id: 'three-tiers', label: 'Three Tiers' },
    { id: 'split-with-image', label: 'Split With Image' },
    { id: 'four-tiers', label: 'Four Tiers' },
    { id: 'comparison-table', label: 'Comparison Table' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Pricing</h1>
      <p class="text-gray-500">Pricing tables and tiers.</p>
    </div>

    <div class="grid gap-10">
      <div id="single-price" class="scroll-mt-24">
        <SinglePriceSimple />
      </div>
      <div id="three-tiers" class="scroll-mt-24">
        <ThreeTiers />
      </div>
      <div id="split-with-image" class="scroll-mt-24">
        <SplitWithImage />
      </div>
      <div id="four-tiers" class="scroll-mt-24">
        <FourTiers />
      </div>
      <div id="comparison-table" class="scroll-mt-24">
        <ComparisonTable />
      </div>
    </div>
  </div>
</template>
