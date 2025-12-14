<script setup lang="ts">
import CheckboxesBase from "@/components/Checkboxes/Base.vue"
import CustomCheckbox from "@/components/Checkboxes/CustomCheckbox.vue"
import CardCheckbox from "@/components/Checkboxes/CardCheckbox.vue"
import ToggleSwitch from "@/components/Checkboxes/ToggleSwitch.vue"
import RadioStyleCheckbox from "@/components/Checkboxes/RadioStyleCheckbox.vue"
import CheckboxGroup from "@/components/Checkboxes/CheckboxGroup.vue"
import ChipCheckbox from "@/components/Checkboxes/ChipCheckbox.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'base', label: 'Base Style' },
    { id: 'custom', label: 'Custom Checkbox' },
    { id: 'card', label: 'Card Checkbox' },
    { id: 'toggle', label: 'Toggle Switch' },
    { id: 'radio-style', label: 'Radio Style' },
    { id: 'group', label: 'Checkbox Group' },
    { id: 'chip', label: 'Chip Checkbox' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Checkboxes</h1>
      <p class="text-sm text-muted-foreground">Various checkbox styles widely used in modern applications.</p>
    </div>
    <div class="space-y-8">
      <div id="base" class="scroll-mt-24">
        <CheckboxesBase />
      </div>
      <div id="custom" class="scroll-mt-24">
        <CustomCheckbox />
      </div>
      <div id="card" class="scroll-mt-24">
        <CardCheckbox />
      </div>
      <div id="toggle" class="scroll-mt-24">
        <ToggleSwitch />
      </div>
      <div id="radio-style" class="scroll-mt-24">
        <RadioStyleCheckbox />
      </div>
      <div id="group" class="scroll-mt-24">
        <CheckboxGroup />
      </div>
      <div id="chip" class="scroll-mt-24">
        <ChipCheckbox />
      </div>
    </div>
  </div>
</template>
