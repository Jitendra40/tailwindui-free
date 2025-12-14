<script setup lang="ts">
import SimpleToggle from "@/components/Toggles/SimpleToggle.vue"
import LabelToggle from "@/components/Toggles/LabelToggle.vue"
import IconToggle from "@/components/Toggles/IconToggle.vue"
import ShortToggle from "@/components/Toggles/ShortToggle.vue"
import NamedToggle from "@/components/Toggles/NamedToggle.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Toggle' },
    { id: 'label', label: 'Label Toggle' },
    { id: 'icon', label: 'Icon Toggle' },
    { id: 'short', label: 'Short Toggle' },
    { id: 'named', label: 'Named Toggle' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Toggles</h1>
      <p class="text-gray-500">Binary choice switches that mimic physical toggles.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleToggle />
      </div>
      <div id="label" class="scroll-mt-24">
        <LabelToggle />
      </div>
      <div id="icon" class="scroll-mt-24">
        <IconToggle />
      </div>
      <div id="short" class="scroll-mt-24">
        <ShortToggle />
      </div>
      <div id="named" class="scroll-mt-24">
        <NamedToggle />
      </div>
    </div>
  </div>
</template>
