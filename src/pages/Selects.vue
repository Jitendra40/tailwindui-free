<script setup lang="ts">
import NativeSelect from "@/components/Selects/NativeSelect.vue"
import CustomSelect from "@/components/Selects/CustomSelect.vue"
import IconSelect from "@/components/Selects/IconSelect.vue"
import MultiSelect from "@/components/Selects/MultiSelect.vue"
import StatusSelect from "@/components/Selects/StatusSelect.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'native', label: 'Native Select' },
    { id: 'custom', label: 'Custom Select' },
    { id: 'icon', label: 'Icon Select' },
    { id: 'multi', label: 'Multi Select' },
    { id: 'status', label: 'Status Select' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Selects</h1>
      <p class="text-gray-500">Dropdown menus for selecting specific options.</p>
    </div>

    <div class="grid gap-10">
      <div id="native" class="scroll-mt-24">
        <NativeSelect />
      </div>
      <div id="custom" class="scroll-mt-24">
        <CustomSelect />
      </div>
      <div id="icon" class="scroll-mt-24">
        <IconSelect />
      </div>
      <div id="multi" class="scroll-mt-24">
        <MultiSelect />
      </div>
      <div id="status" class="scroll-mt-24">
        <StatusSelect />
      </div>
    </div>
  </div>
</template>
