<script setup lang="ts">
import ListRadio from "@/components/RadioGroups/ListRadio.vue"
import CardRadio from "@/components/RadioGroups/CardRadio.vue"
import InlineRadio from "@/components/RadioGroups/InlineRadio.vue"
import ColorRadio from "@/components/RadioGroups/ColorRadio.vue"
import PlanRadio from "@/components/RadioGroups/PlanRadio.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'list', label: 'List Radio' },
    { id: 'card', label: 'Card Radio' },
    { id: 'inline', label: 'Inline Radio' },
    { id: 'color', label: 'Color Radio' },
    { id: 'plan', label: 'Plan Radio' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Radio Groups</h1>
      <p class="text-gray-500">Selection controls for mutually exclusive options.</p>
    </div>

    <div class="space-y-8">
      <div id="list" class="scroll-mt-24">
        <ListRadio />
      </div>
      <div id="card" class="scroll-mt-24">
        <CardRadio />
      </div>
      <div id="inline" class="scroll-mt-24">
        <InlineRadio />
      </div>
      <div id="color" class="scroll-mt-24">
        <ColorRadio />
      </div>
      <div id="plan" class="scroll-mt-24">
        <PlanRadio />
      </div>
    </div>
  </div>
</template>
