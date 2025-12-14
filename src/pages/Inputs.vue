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

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'identity', label: 'Identity Inputs' },
    { id: 'security', label: 'Security Inputs' },
    { id: 'address', label: 'Address Inputs' },
    { id: 'fintech', label: 'Fintech Inputs' },
    { id: 'business', label: 'Business Inputs' },
    { id: 'datetime', label: 'Date/Time Inputs' },
    { id: 'selection', label: 'Selection Inputs' },
    { id: 'content', label: 'Content Inputs' },
    { id: 'media', label: 'Media Inputs' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-foreground">Inputs</h1>
      <p class="text-muted-foreground">Comprehensive collection of input fields for various data types.</p>
    </div>

    <div class="space-y-12">
      <div id="identity" class="scroll-mt-24">
        <IdentityInputs />
      </div>
      <div id="security" class="scroll-mt-24">
        <SecurityInputs />
      </div>
      <div id="address" class="scroll-mt-24">
        <AddressInputs />
      </div>
      <div id="fintech" class="scroll-mt-24">
        <FintechInputs />
      </div>
      <div id="business" class="scroll-mt-24">
        <BusinessInputs />
      </div>
      <div id="datetime" class="scroll-mt-24">
        <DateTimeInputs />
      </div>
      <div id="selection" class="scroll-mt-24">
        <SelectionInputs />
      </div>
      <div id="content" class="scroll-mt-24">
        <ContentInputs />
      </div>
      <div id="media" class="scroll-mt-24">
        <MediaInputs />
      </div>
    </div>
  </div>
</template>
