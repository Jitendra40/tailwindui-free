<script setup lang="ts">
import SimpleSteps from "@/components/Steps/SimpleSteps.vue"
import BulletSteps from "@/components/Steps/BulletSteps.vue"
import PanelSteps from "@/components/Steps/PanelSteps.vue"
import VerticalSteps from "@/components/Steps/VerticalSteps.vue"
import ProgressSteps from "@/components/Steps/ProgressSteps.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Steps</h1>
      <p class="text-sm text-muted-foreground">Progress indicators for multi-step workflows.</p>
    </div>

    <div class="space-y-3">
      <SimpleSteps />
      <BulletSteps />
      <PanelSteps />
      <VerticalSteps />
      <ProgressSteps />
    </div>
  </div>
</template>
