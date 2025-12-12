<script setup lang="ts">
import SimpleGrid from "@/components/TeamSections/SimpleGrid.vue"
import GridWithLargeImages from "@/components/TeamSections/GridWithLargeImages.vue"
import WithSmallImages from "@/components/TeamSections/WithSmallImages.vue"
import DarkTeam from "@/components/TeamSections/DarkTeam.vue"
import FullWidth from "@/components/TeamSections/FullWidth.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Team Sections</h1>
      <p class="text-gray-500">Profiles and rosters for your team.</p>
    </div>

    <div class="grid gap-10">
      <SimpleGrid />
      <GridWithLargeImages />
      <WithSmallImages />
      <DarkTeam />
      <FullWidth />
    </div>
  </div>
</template>
