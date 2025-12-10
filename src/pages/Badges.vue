<script setup lang="ts">
import BaseBadges from "@/components/Badges/Base.vue"
import BadgeIconLight from "@/components/Badges/BadgeIconLight.vue"
import BadgeIconDark from "@/components/Badges/BadgeIconDark.vue"
import BadgeDismissible from "@/components/Badges/BadgeDismissible.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Badges</h1>
      <p class="text-sm text-muted-foreground">Stacked badge variants rendered via components.</p>
    </div>

    <div class="space-y-3">
        <BaseBadges />
      <BadgeIconLight />
      <!-- <BadgeIconDark />
      <BadgeDismissible /> -->
      
    </div>
  </div>
</template>