<script setup lang="ts">
import SimpleContact from "@/components/ContactSections/SimpleContact.vue"
import SplitContact from "@/components/ContactSections/SplitContact.vue"
import ContactWithCards from "@/components/ContactSections/ContactWithCards.vue"
import DarkContact from "@/components/ContactSections/DarkContact.vue"
import CenteredContact from "@/components/ContactSections/CenteredContact.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Contact Sections</h1>
      <p class="text-gray-500">Contact forms and support sections.</p>
    </div>

    <div class="grid gap-10">
      <SimpleContact />
      <SplitContact />
      <ContactWithCards />
      <DarkContact />
      <CenteredContact />
    </div>
  </div>
</template>
