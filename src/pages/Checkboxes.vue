<script setup lang="ts">
import CheckboxesBase from "@/components/Checkboxes/Base.vue"
import CustomCheckbox from "@/components/Checkboxes/CustomCheckbox.vue"
import CardCheckbox from "@/components/Checkboxes/CardCheckbox.vue"
import ToggleSwitch from "@/components/Checkboxes/ToggleSwitch.vue"
import RadioStyleCheckbox from "@/components/Checkboxes/RadioStyleCheckbox.vue"
import CheckboxGroup from "@/components/Checkboxes/CheckboxGroup.vue"
import ChipCheckbox from "@/components/Checkboxes/ChipCheckbox.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Checkboxes</h1>
      <p class="text-sm text-muted-foreground">Various checkbox styles widely used in modern applications.</p>
    </div>
    <div class="space-y-3">
      <CheckboxesBase />
      <CustomCheckbox />
      <CardCheckbox />
      <ToggleSwitch />
      <RadioStyleCheckbox />
      <CheckboxGroup />
      <ChipCheckbox />
    </div>
  </div>
</template>
