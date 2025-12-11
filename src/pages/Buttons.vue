<script setup lang="ts">
import ButtonsBase from "@/components/Buttons/Base.vue"
import PrimarySuite from "@/components/Buttons/PrimarySuite.vue"
import GradientButtons from "@/components/Buttons/GradientButtons.vue"
import AnimatedButtons from "@/components/Buttons/AnimatedButtons.vue"
import GlassButtons from "@/components/Buttons/GlassButtons.vue"
import IconButtons from "@/components/Buttons/IconButtons.vue"
import NeuButtons from "@/components/Buttons/NeuButtons.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Buttons</h1>
      <p class="text-sm text-muted-foreground">Essential button variants for primary and secondary actions.</p>
    </div>
    <div class="space-y-3">
      <ButtonsBase />
      <PrimarySuite />
      <GradientButtons />
      <AnimatedButtons />
      <GlassButtons />
      <IconButtons />
      <NeuButtons />
    </div>
  </div>
</template>
