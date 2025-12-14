<script setup lang="ts">
import SimpleStats from "@/components/Stats/SimpleStats.vue"
import DarkStats from "@/components/Stats/DarkStats.vue"
import StatsWithDescription from "@/components/Stats/StatsWithDescription.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Stats' },
    { id: 'dark', label: 'Dark Stats' },
    { id: 'with-description', label: 'Stats With Description' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Stats Sections</h1>
      <p class="text-gray-500">Statistics and metrics.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleStats />
      </div>
      <div id="dark" class="scroll-mt-24">
        <DarkStats />
      </div>
      <div id="with-description" class="scroll-mt-24">
        <StatsWithDescription />
      </div>
    </div>
  </div>
</template>
