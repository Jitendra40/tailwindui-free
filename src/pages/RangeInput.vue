<script setup lang="ts">
import SimpleRange from "@/components/RangeInput/SimpleRange.vue"
import StepRange from "@/components/RangeInput/StepRange.vue"
import TickRange from "@/components/RangeInput/TickRange.vue"
import DualRange from "@/components/RangeInput/DualRange.vue"
import VolumeRange from "@/components/RangeInput/VolumeRange.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Range Input</h1>
      <p class="text-gray-500">Sliders for selecting a value from a range.</p>
    </div>

    <div class="grid gap-10">
      <SimpleRange />
      <StepRange />
      <TickRange />
      <DualRange />
      <VolumeRange />
    </div>
  </div>
</template>
