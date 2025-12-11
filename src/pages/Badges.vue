<script setup lang="ts">
import BaseBadges from "@/components/Badges/Base.vue"
import BadgeIconLight from "@/components/Badges/BadgeIconLight.vue"
import LeadStatus from "@/components/Badges/LeadStatus.vue"
import SalesPipeline from "@/components/Badges/SalesPipeline.vue"
import RealEstate from "@/components/Badges/RealEstate.vue"
import Saas from "@/components/Badges/Saas.vue"
import BadgeCount from "@/components/Badges/BadgeCount.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Badges</h1>
      <p class="text-sm text-muted-foreground">Stacked badge variants rendered via components.</p>
    </div>

    <div class="space-y-3">
      <BaseBadges />
      <BadgeCount />
      <BadgeIconLight />
      <LeadStatus />
      <SalesPipeline />
      <RealEstate />
      <Saas />
     
      <!-- <BadgeIconDark />
      <BadgeDismissible /> -->
      
    </div>
  </div>
</template>