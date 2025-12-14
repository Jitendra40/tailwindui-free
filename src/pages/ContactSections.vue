<script setup lang="ts">
import SimpleContact from "@/components/ContactSections/SimpleContact.vue"
import SplitContact from "@/components/ContactSections/SplitContact.vue"
import ContactWithCards from "@/components/ContactSections/ContactWithCards.vue"
import DarkContact from "@/components/ContactSections/DarkContact.vue"
import CenteredContact from "@/components/ContactSections/CenteredContact.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple-contact', label: 'Simple Contact' },
    { id: 'split-contact', label: 'Split Contact' },
    { id: 'contact-with-cards', label: 'Contact With Cards' },
    { id: 'dark-contact', label: 'Dark Contact' },
    { id: 'centered-contact', label: 'Centered Contact' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Contact Sections</h1>
      <p class="text-gray-500">Contact forms and support sections.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple-contact" class="scroll-mt-24">
        <SimpleContact />
      </div>
      <div id="split-contact" class="scroll-mt-24">
        <SplitContact />
      </div>
      <div id="contact-with-cards" class="scroll-mt-24">
        <ContactWithCards />
      </div>
      <div id="dark-contact" class="scroll-mt-24">
        <DarkContact />
      </div>
      <div id="centered-contact" class="scroll-mt-24">
        <CenteredContact />
      </div>
    </div>
  </div>
</template>
