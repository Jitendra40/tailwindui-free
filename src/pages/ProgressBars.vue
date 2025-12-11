<script setup lang="ts">
import SimpleProgress from "@/components/ProgressBars/SimpleProgress.vue"
import LabelProgress from "@/components/ProgressBars/LabelProgress.vue"
import StripedProgress from "@/components/ProgressBars/StripedProgress.vue"
import VerticalProgress from "@/components/ProgressBars/VerticalProgress.vue"
import CircleProgress from "@/components/ProgressBars/CircleProgress.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Progress Bars</h1>
      <p class="text-sm text-muted-foreground">Feedback for completion status of a task.</p>
    </div>

    <div class="space-y-3">
      <SimpleProgress />
      <div class="p-4 border rounded-lg bg-white shadow-sm">
        <LabelProgress />
      </div>
      <StripedProgress />
      <VerticalProgress />
      <CircleProgress />
    </div>
  </div>
</template>
