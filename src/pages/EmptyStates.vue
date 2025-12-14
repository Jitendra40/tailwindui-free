<script setup lang="ts">
import SimpleEmptyState from "@/components/EmptyStates/SimpleEmptyState.vue"
import ActionEmptyState from "@/components/EmptyStates/ActionEmptyState.vue"
import SearchEmptyState from "@/components/EmptyStates/SearchEmptyState.vue"
import IllustratedEmptyState from "@/components/EmptyStates/IllustratedEmptyState.vue"
import NewProjectEmptyState from "@/components/EmptyStates/NewProjectEmptyState.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Empty State' },
    { id: 'action', label: 'Action Empty State' },
    { id: 'search', label: 'Search Empty State' },
    { id: 'illustrated', label: 'Illustrated Empty State' },
    { id: 'new-project', label: 'New Project Empty State' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Empty States</h1>
      <p class="text-gray-500">Placeholders for when data is missing or a search returns no results.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleEmptyState />
      </div>
      <div id="action" class="scroll-mt-24">
        <ActionEmptyState />
      </div>
      <div id="search" class="scroll-mt-24">
        <SearchEmptyState />
      </div>
      <div id="illustrated" class="scroll-mt-24">
        <IllustratedEmptyState />
      </div>
      <div id="new-project" class="scroll-mt-24">
        <NewProjectEmptyState />
      </div>
    </div>
  </div>
</template>
