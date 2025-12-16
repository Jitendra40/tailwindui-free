<script setup lang="ts">
import BaseBadges from "@/components/Badges/Base.vue"
import AnimatedFill from "@/components/Badges/AnimatedFill.vue"
import Glass from "@/components/Badges/Glass.vue"
import Closable from "@/components/Badges/Closable.vue"
import BadgeIconLight from "@/components/Badges/BadgeIconLight.vue"
import LeadStatus from "@/components/Badges/LeadStatus.vue"
import SalesPipeline from "@/components/Badges/SalesPipeline.vue"
import RealEstate from "@/components/Badges/RealEstate.vue"
import Saas from "@/components/Badges/Saas.vue"
import BadgeCount from "@/components/Badges/BadgeCount.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'base', label: 'Base Badges' },
    { id: 'animated-fill', label: 'Animated Fill' },
    { id: 'glass', label: 'Glassmorphism' },
    { id: 'closable', label: 'Closable / Tags' },
    { id: 'count', label: 'Badge Count' },
    { id: 'icon-light', label: 'Icon Light' },
    { id: 'lead-status', label: 'Lead Status' },
    { id: 'sales-pipeline', label: 'Sales Pipeline' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'saas', label: 'SaaS' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Badges</h1>
      <p class="text-sm text-muted-foreground">Stacked badge variants rendered via components.</p>
    </div>

    <div class="space-y-8">
      <div id="base" class="scroll-mt-24">
        <BaseBadges />
      </div>
      <div id="animated-fill" class="scroll-mt-24">
        <AnimatedFill />
      </div>
      <div id="glass" class="scroll-mt-24">
        <Glass />
      </div>
      <div id="closable" class="scroll-mt-24">
        <Closable />
      </div>
      <div id="count" class="scroll-mt-24">
        <BadgeCount />
      </div>
      <div id="icon-light" class="scroll-mt-24">
        <BadgeIconLight />
      </div>
      <div id="lead-status" class="scroll-mt-24">
        <LeadStatus />
      </div>
      <div id="sales-pipeline" class="scroll-mt-24">
        <SalesPipeline />
      </div>
      <div id="real-estate" class="scroll-mt-24">
        <RealEstate />
      </div>
      <div id="saas" class="scroll-mt-24">
        <Saas />
      </div>
    </div>
  </div>
</template>