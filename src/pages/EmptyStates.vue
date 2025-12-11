<script setup lang="ts">
import SimpleEmptyState from "@/components/EmptyStates/SimpleEmptyState.vue"
import ActionEmptyState from "@/components/EmptyStates/ActionEmptyState.vue"
import SearchEmptyState from "@/components/EmptyStates/SearchEmptyState.vue"
import IllustratedEmptyState from "@/components/EmptyStates/IllustratedEmptyState.vue"
import NewProjectEmptyState from "@/components/EmptyStates/NewProjectEmptyState.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Empty States</h1>
      <p class="text-gray-500">Placeholders for when data is missing or a search returns no results.</p>
    </div>

    <div class="grid gap-10">
      <SimpleEmptyState />
      <ActionEmptyState />
      <SearchEmptyState />
      <IllustratedEmptyState />
      <NewProjectEmptyState />
    </div>
  </div>
</template>
