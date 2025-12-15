<script setup lang="ts">
import DividersBase from "@/components/Dividers/Base.vue"
import WithLabel from "@/components/Dividers/WithLabel.vue"
import WithLabelLeft from "@/components/Dividers/WithLabelLeft.vue"
import WithIcon from "@/components/Dividers/WithIcon.vue"
import WithButton from "@/components/Dividers/WithButton.vue"
import WithIconAndText from "@/components/Dividers/WithIconAndText.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'base', label: 'Base Dividers' },
    { id: 'label', label: 'With Label' },
    { id: 'label-left', label: 'Label Left' },
    { id: 'icon', label: 'With Icon' },
    { id: 'button', label: 'With Button' },
    { id: 'icon-text', label: 'Icon & Text' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Dividers</h1>
      <p class="text-gray-500">Horizontal rules for separating content sections.</p>
    </div>
    <div class="space-y-10">
      <div id="base" class="scroll-mt-24">
        <DividersBase />
      </div>
      <div id="label" class="scroll-mt-24">
        <WithLabel />
      </div>
      <div id="label-left" class="scroll-mt-24">
        <WithLabelLeft />
      </div>
      <div id="icon" class="scroll-mt-24">
        <WithIcon />
      </div>
       <div id="button" class="scroll-mt-24">
        <WithButton />
      </div>
      <div id="icon-text" class="scroll-mt-24">
        <WithIconAndText />
      </div>
    </div>
  </div>
</template>
