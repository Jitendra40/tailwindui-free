<script setup lang="ts">
import AccordionBase from "@/components/Accordion/Base.vue"
import CardShadowAccordionVue from "@/components/Accordion/CardShadowAccordion.vue";
import ChevronRotateAccordionVue from "@/components/Accordion/ChevronRotateAccordion.vue";
import FilledHighlightAccordionVue from "@/components/Accordion/FilledHighlightAccordion.vue";
import MinimalAccordionVue from "@/components/Accordion/MinimalAccordion.vue";
import UnderlineFAQAccordionVue from "@/components/Accordion/UnderlineFAQAccordion.vue";
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Accordion</h1>
      <p class="text-sm text-muted-foreground">Collapsible panels using native details/summary.</p>
    </div>
    <div class="space-y-3">
      <AccordionBase />
      <MinimalAccordionVue />
      <UnderlineFAQAccordionVue />
      <CardShadowAccordionVue />
      <ChevronRotateAccordionVue />
      <FilledHighlightAccordionVue />
    </div>
  </div>
</template>
