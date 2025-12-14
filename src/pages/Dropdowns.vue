<script setup lang="ts">
import DropdownsBase from "@/components/Dropdowns/Base.vue"
import DropdownsWithAvatar from "@/components/Dropdowns/WithAvatar.vue"
import DropdownsWithSearch from "@/components/Dropdowns/WithSearch.vue"
import DropdownsWithRadio from "@/components/Dropdowns/WithRadio.vue"
import DropdownsWithShortcuts from "@/components/Dropdowns/WithShortcuts.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'base', label: 'Base Dropdowns' },
    { id: 'with-avatar', label: 'With Avatar' },
    { id: 'with-search', label: 'With Search' },
    { id: 'with-radio', label: 'With Radio' },
    { id: 'with-shortcuts', label: 'With Shortcuts' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Dropdowns</h1>
      <p class="text-sm text-muted-foreground">Lightweight dropdown menus built with details/summary and vanilla CSS.</p>
    </div>
    <div class="space-y-8">
      <div id="base" class="scroll-mt-24">
        <DropdownsBase />
      </div>
      <div id="with-avatar" class="scroll-mt-24">
        <DropdownsWithAvatar />
      </div>
      <div id="with-search" class="scroll-mt-24">
        <DropdownsWithSearch />
      </div>
      <div id="with-radio" class="scroll-mt-24">
        <DropdownsWithRadio />
      </div>
      <div id="with-shortcuts" class="scroll-mt-24">
        <DropdownsWithShortcuts />
      </div>
    </div>
  </div>
</template>
