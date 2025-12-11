<script setup lang="ts">
import BasicInput from "@/components/Inputs/BasicInput.vue"
import FloatingLabelInput from "@/components/Inputs/FloatingLabelInput.vue"
import IconInput from "@/components/Inputs/IconInput.vue"
import ValidationInput from "@/components/Inputs/ValidationInput.vue"
import AddOnInput from "@/components/Inputs/AddOnInput.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Inputs</h1>
      <p class="text-gray-500">Text fields for user input.</p>
    </div>

    <div class="grid gap-10">
      <BasicInput />
      <FloatingLabelInput />
      <IconInput />
      <ValidationInput />
      <AddOnInput />
    </div>
  </div>
</template>
