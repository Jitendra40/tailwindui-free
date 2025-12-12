<script setup lang="ts">
import BasicInput from "@/components/Inputs/BasicInput.vue"
import FloatingLabelInput from "@/components/Inputs/FloatingLabelInput.vue"
import IconInput from "@/components/Inputs/IconInput.vue"
import ValidationInput from "@/components/Inputs/ValidationInput.vue"
import AddOnInput from "@/components/Inputs/AddOnInput.vue"
import SelectInput from "@/components/Inputs/SelectInput.vue"
import RangeInput from "@/components/Inputs/RangeInput.vue"
import DateInput from "@/components/Inputs/DateInput.vue"
</script>

<template>
  <div class="space-y-8">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-foreground">Inputs</h1>
      <p class="text-muted-foreground">Text fields for user input.</p>
    </div>

    <div class="grid gap-8">
      <BasicInput />
      <FloatingLabelInput />
      <IconInput />
      <ValidationInput />
      <AddOnInput />
      <SelectInput />
      <RangeInput />
      <DateInput />
    </div>
  </div>
</template>
