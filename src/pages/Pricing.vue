<script setup lang="ts">
import SinglePriceSimple from "@/components/Pricing/SinglePriceSimple.vue"
import ThreeTiers from "@/components/Pricing/ThreeTiers.vue"
import SplitWithImage from "@/components/Pricing/SplitWithImage.vue"
import FourTiers from "@/components/Pricing/FourTiers.vue"
import ComparisonTable from "@/components/Pricing/ComparisonTable.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Pricing</h1>
      <p class="text-gray-500">Pricing tables and tiers.</p>
    </div>

    <div class="grid gap-10">
      <SinglePriceSimple />
      <ThreeTiers />
      <SplitWithImage />
      <FourTiers />
      <ComparisonTable />
    </div>
  </div>
</template>
