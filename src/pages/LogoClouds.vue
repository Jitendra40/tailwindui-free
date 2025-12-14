<script setup lang="ts">
import SimpleLogoCloud from "@/components/LogoClouds/SimpleLogoCloud.vue"
import SplitLogoCloud from "@/components/LogoClouds/SplitLogoCloud.vue"
import DarkLogoCloud from "@/components/LogoClouds/DarkLogoCloud.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Logo Cloud' },
    { id: 'split', label: 'Split Logo Cloud' },
    { id: 'dark', label: 'Dark Logo Cloud' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Logo Clouds</h1>
      <p class="text-gray-500">Trust sections with logos.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleLogoCloud />
      </div>
      <div id="split" class="scroll-mt-24">
        <SplitLogoCloud />
      </div>
      <div id="dark" class="scroll-mt-24">
        <DarkLogoCloud />
      </div>
    </div>
  </div>
</template>
