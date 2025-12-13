<script setup lang="ts">
import IdentityInputs from "@/components/Inputs/IdentityInputs.vue"
import SecurityInputs from "@/components/Inputs/SecurityInputs.vue"
import AddressInputs from "@/components/Inputs/AddressInputs.vue"
import FintechInputs from "@/components/Inputs/FintechInputs.vue"
import BusinessInputs from "@/components/Inputs/BusinessInputs.vue"
import DateTimeInputs from "@/components/Inputs/DateTimeInputs.vue"
import SelectionInputs from "@/components/Inputs/SelectionInputs.vue"
import ContentInputs from "@/components/Inputs/ContentInputs.vue"
import MediaInputs from "@/components/Inputs/MediaInputs.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-foreground">Inputs</h1>
      <p class="text-muted-foreground">Comprehensive collection of input fields for various data types.</p>
    </div>

    <div class="space-y-12">
      <IdentityInputs />
      <SecurityInputs />
      <AddressInputs />
      <FintechInputs />
      <BusinessInputs />
      <DateTimeInputs />
      <SelectionInputs />
      <ContentInputs />
      <MediaInputs />
    </div>
  </div>
</template>
