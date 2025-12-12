<script setup lang="ts">
import SimpleCentered from "@/components/HeroSections/SimpleCentered.vue"
import SplitWithImage from "@/components/HeroSections/SplitWithImage.vue"
import DarkWithImage from "@/components/HeroSections/DarkWithImage.vue"
import WithAppScreenshot from "@/components/HeroSections/WithAppScreenshot.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Hero Sections</h1>
      <p class="text-gray-500">Page headers to introduce your brand.</p>
    </div>

    <div class="grid gap-10">
      <SimpleCentered />
      <SplitWithImage />
      <DarkWithImage />
      <WithAppScreenshot />
    </div>
  </div>
</template>
