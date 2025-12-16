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
import AddOnInput from "@/components/Inputs/AddOnInput.vue"
import IconInput from "@/components/Inputs/IconInput.vue"
import FloatingLabelInput from "@/components/Inputs/FloatingLabelInput.vue"


import ToggleInput from "@/components/Inputs/ToggleInput.vue"
import RangeInput from "@/components/Inputs/RangeInput.vue"
import RatingInput from "@/components/Inputs/RatingInput.vue"

import ValidationInput from "@/components/Inputs/ValidationInput.vue"

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
    { id: 'structure', label: 'Input Structure' },
    { id: 'interactive', label: 'Interactive Inputs' },
    { id: 'validation', label: 'Validation & States' },
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
      
      <div id="structure" class="scroll-mt-24 space-y-12">
        <IconInput />
        <AddOnInput />
        <FloatingLabelInput />
      </div>
      <div id="interactive" class="scroll-mt-24 space-y-12">
        <ToggleInput />
        <RangeInput />
        <RatingInput />
      </div>
      <div id="validation" class="scroll-mt-24">
        <ValidationInput />
      </div>
    </div>
  </div>
</template>
