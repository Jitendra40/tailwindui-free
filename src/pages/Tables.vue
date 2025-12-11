<script setup lang="ts">
import SimpleTable from "@/components/Tables/SimpleTable.vue"
import StripedTable from "@/components/Tables/StripedTable.vue"
import SortableTable from "@/components/Tables/SortableTable.vue"
import ActionTable from "@/components/Tables/ActionTable.vue"
import AvatarTable from "@/components/Tables/AvatarTable.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Tables</h1>
      <p class="text-gray-500">Data grids for displaying large sets of information.</p>
    </div>

    <div class="grid gap-10">
      <SimpleTable />
      <StripedTable />
      <SortableTable />
      <ActionTable />
      <AvatarTable />
    </div>
  </div>
</template>
