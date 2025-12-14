<script setup lang="ts">
import SimpleCentered from "@/components/HeroSections/SimpleCentered.vue"
import SplitWithImage from "@/components/HeroSections/SplitWithImage.vue"
import DarkWithImage from "@/components/HeroSections/DarkWithImage.vue"
import WithAppScreenshot from "@/components/HeroSections/WithAppScreenshot.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple-centered', label: 'Simple Centered' },
    { id: 'split-with-image', label: 'Split With Image' },
    { id: 'dark-with-image', label: 'Dark With Image' },
    { id: 'with-app-screenshot', label: 'With App Screenshot' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Hero Sections</h1>
      <p class="text-gray-500">Page headers to introduce your brand.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple-centered" class="scroll-mt-24">
        <SimpleCentered />
      </div>
      <div id="split-with-image" class="scroll-mt-24">
        <SplitWithImage />
      </div>
      <div id="dark-with-image" class="scroll-mt-24">
        <DarkWithImage />
      </div>
      <div id="with-app-screenshot" class="scroll-mt-24">
        <WithAppScreenshot />
      </div>
    </div>
  </div>
</template>
