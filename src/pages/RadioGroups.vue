<script setup lang="ts">
import ListRadio from "@/components/RadioGroups/ListRadio.vue"
import CardRadio from "@/components/RadioGroups/CardRadio.vue"
import InlineRadio from "@/components/RadioGroups/InlineRadio.vue"
import ColorRadio from "@/components/RadioGroups/ColorRadio.vue"
import PlanRadio from "@/components/RadioGroups/PlanRadio.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Radio Groups</h1>
      <p class="text-gray-500">Selection controls for mutually exclusive options.</p>
    </div>

    <div class="space-y-3">
      <ListRadio />
      <CardRadio />
      <InlineRadio />
      <ColorRadio />
      <PlanRadio />
    </div>
  </div>
</template>
