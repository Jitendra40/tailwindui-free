<script setup lang="ts">
import SimpleToggle from "@/components/Toggles/SimpleToggle.vue"
import LabelToggle from "@/components/Toggles/LabelToggle.vue"
import IconToggle from "@/components/Toggles/IconToggle.vue"
import ShortToggle from "@/components/Toggles/ShortToggle.vue"
import NamedToggle from "@/components/Toggles/NamedToggle.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Toggles</h1>
      <p class="text-gray-500">Binary choice switches that mimic physical toggles.</p>
    </div>

    <div class="grid gap-10">
      <SimpleToggle />
      <LabelToggle />
      <IconToggle />
      <ShortToggle />
      <NamedToggle />
    </div>
  </div>
</template>
