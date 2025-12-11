<script setup lang="ts">
import SimpleStat from "@/components/Stats/SimpleStat.vue"
import TrendStat from "@/components/Stats/TrendStat.vue"
import IconStat from "@/components/Stats/IconStat.vue"
import GroupedStat from "@/components/Stats/GroupedStat.vue"
import DarkStat from "@/components/Stats/DarkStat.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Stats</h1>
      <p class="text-sm text-muted-foreground">Data visualization for key metrics.</p>
    </div>

    <div class="space-y-3">
      <SimpleStat />
      <TrendStat />
      <IconStat />
      <GroupedStat />
      <DarkStat />
    </div>
  </div>
</template>
