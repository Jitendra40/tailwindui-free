<script setup lang="ts">
import SimpleCentered from "@/components/CTAs/SimpleCentered.vue"
import SimpleJustified from "@/components/CTAs/SimpleJustified.vue"
import BrandPanel from "@/components/CTAs/BrandPanel.vue"
import SplitWithImageCTA from "@/components/CTAs/SplitWithImageCTA.vue"
import TwoColumnCTA from "@/components/CTAs/TwoColumnCTA.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">CTA Sections</h1>
      <p class="text-gray-500">Call to action sections to drive conversions.</p>
    </div>

    <div class="grid gap-10">
      <SimpleCentered />
      <SimpleJustified />
      <BrandPanel />
      <SplitWithImageCTA />
      <TwoColumnCTA />
    </div>
  </div>
</template>
