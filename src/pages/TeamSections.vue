<script setup lang="ts">
import SimpleGrid from "@/components/TeamSections/SimpleGrid.vue"
import GridWithLargeImages from "@/components/TeamSections/GridWithLargeImages.vue"
import WithSmallImages from "@/components/TeamSections/WithSmallImages.vue"
import DarkTeam from "@/components/TeamSections/DarkTeam.vue"
import FullWidth from "@/components/TeamSections/FullWidth.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Grid' },
    { id: 'large-images', label: 'Grid With Large Images' },
    { id: 'small-images', label: 'With Small Images' },
    { id: 'dark', label: 'Dark Team' },
    { id: 'full-width', label: 'Full Width' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Team Sections</h1>
      <p class="text-gray-500">Profiles and rosters for your team.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleGrid />
      </div>
      <div id="large-images" class="scroll-mt-24">
        <GridWithLargeImages />
      </div>
      <div id="small-images" class="scroll-mt-24">
        <WithSmallImages />
      </div>
      <div id="dark" class="scroll-mt-24">
        <DarkTeam />
      </div>
      <div id="full-width" class="scroll-mt-24">
        <FullWidth />
      </div>
    </div>
  </div>
</template>
