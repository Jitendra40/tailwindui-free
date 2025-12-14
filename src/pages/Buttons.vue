<script setup lang="ts">
import PrimaryActions from "@/components/Buttons/PrimaryActions.vue"
import EngagementActions from "@/components/Buttons/EngagementActions.vue"
import ManagementActions from "@/components/Buttons/ManagementActions.vue"
import NavigationActions from "@/components/Buttons/NavigationActions.vue"
import UtilityActions from "@/components/Buttons/UtilityActions.vue"
import SaasBonus from "@/components/Buttons/SaasBonus.vue"

import GradientButtons from "@/components/Buttons/GradientButtons.vue"
import AnimatedButtons from "@/components/Buttons/AnimatedButtons.vue"
import IconButtons from "@/components/Buttons/IconButtons.vue"
import NeuButtons from "@/components/Buttons/NeuButtons.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'utility-actions', label: 'Utility Actions' },
    { id: 'primary-actions', label: 'Primary Actions' },
    { id: 'engagement-actions', label: 'Engagement Actions' },
    { id: 'management-actions', label: 'Management Actions' },
    { id: 'navigation-actions', label: 'Navigation Actions' },
    { id: 'saas-bonus', label: 'SaaS Bonus' },
    { id: 'gradient-buttons', label: 'Gradient Buttons' },
    { id: 'animated-buttons', label: 'Animated Buttons' },
    { id: 'icon-buttons', label: 'Icon Buttons' },
    { id: 'neu-buttons', label: 'Neu Buttons' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Buttons</h1>
      <p class="text-sm text-muted-foreground">Action-oriented button suites for every context.</p>
    </div>
    <div class="space-y-8">
            <div id="utility-actions" class="scroll-mt-24">
        <UtilityActions />
      </div>
      <div id="primary-actions" class="scroll-mt-24">
        <PrimaryActions />
      </div>
      <div id="engagement-actions" class="scroll-mt-24">
        <EngagementActions />
      </div>
      <div id="management-actions" class="scroll-mt-24">
        <ManagementActions />
      </div>
      <div id="navigation-actions" class="scroll-mt-24">
        <NavigationActions />
      </div>

      <div id="saas-bonus" class="scroll-mt-24">
        <SaasBonus />
      </div>
      <div id="gradient-buttons" class="scroll-mt-24">
        <GradientButtons />
      </div>
      <div id="animated-buttons" class="scroll-mt-24">
        <AnimatedButtons />
      </div>
      <div id="icon-buttons" class="scroll-mt-24">
        <IconButtons />
      </div>
      <div id="neu-buttons" class="scroll-mt-24">
        <NeuButtons />
      </div>
    </div>
  </div>
</template>

