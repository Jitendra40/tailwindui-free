<script setup lang="ts">
import SimpleStats from "@/components/Stats/SimpleStats.vue"
import DarkGridStats from "@/components/Stats/DarkGridStats.vue"
import SplitImageStats from "@/components/Stats/SplitImageStats.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Stats' },
    { id: 'dark-grid', label: 'Dark Grid' },
    { id: 'split-image', label: 'Split with Image' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Stats</h1>
      <p class="text-gray-500">Display statistics and metrics.</p>
    </div>

    <div class="space-y-8">
      <div id="simple" class="scroll-mt-24">
        <SimpleStats />
      </div>
      <div id="dark-grid" class="scroll-mt-24">
        <DarkGridStats />
      </div>
      <div id="split-image" class="scroll-mt-24">
        <SplitImageStats />
      </div>
    </div>
  </div>
</template>
