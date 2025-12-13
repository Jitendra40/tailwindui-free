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
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Buttons</h1>
      <p class="text-sm text-muted-foreground">Action-oriented button suites for every context.</p>
    </div>
    <div class="space-y-3">
      <PrimaryActions />
      <EngagementActions />
      <ManagementActions />
      <NavigationActions />
      <UtilityActions />
      <SaasBonus />
      
      <!-- Keeping the specialized variants below as they weren't explicitly asked to be removed, only Base/Primary/Glass were -->
      <GradientButtons />
      <AnimatedButtons />
      <IconButtons />
      <NeuButtons />
    </div>
  </div>
</template>
