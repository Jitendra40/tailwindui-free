<script setup lang="ts">
import AccordionBase from "@/components/Accordion/Base.vue"
import CardShadowAccordionVue from "@/components/Accordion/CardShadowAccordion.vue";
import ChevronRotateAccordionVue from "@/components/Accordion/ChevronRotateAccordion.vue";
import FilledHighlightAccordionVue from "@/components/Accordion/FilledHighlightAccordion.vue";
import MinimalAccordionVue from "@/components/Accordion/MinimalAccordion.vue";
import UnderlineFAQAccordionVue from "@/components/Accordion/UnderlineFAQAccordion.vue";

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'base', label: 'Base Style' },
    { id: 'minimal', label: 'Minimal Style' },
    { id: 'underline-faq', label: 'Underline FAQ' },
    { id: 'card-shadow', label: 'Card Shadow' },
    { id: 'chevron-rotate', label: 'Chevron Rotate' },
    { id: 'filled-highlight', label: 'Filled Highlight' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Accordion</h1>
      <p class="text-sm text-muted-foreground">Collapsible panels using native details/summary.</p>
    </div>
    <div class="space-y-8">
      <div id="base" class="scroll-mt-24">
        <AccordionBase />
      </div>
      <div id="minimal" class="scroll-mt-24">
        <MinimalAccordionVue />
      </div>
      <div id="underline-faq" class="scroll-mt-24">
        <UnderlineFAQAccordionVue />
      </div>
      <div id="card-shadow" class="scroll-mt-24">
        <CardShadowAccordionVue />
      </div>
      <div id="chevron-rotate" class="scroll-mt-24">
        <ChevronRotateAccordionVue />
      </div>
      <div id="filled-highlight" class="scroll-mt-24">
        <FilledHighlightAccordionVue />
      </div>
    </div>
  </div>
</template>
