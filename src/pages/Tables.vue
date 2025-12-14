<script setup lang="ts">
import SimpleTable from "@/components/Tables/SimpleTable.vue"
import StripedTable from "@/components/Tables/StripedTable.vue"
import SortableTable from "@/components/Tables/SortableTable.vue"
import ActionTable from "@/components/Tables/ActionTable.vue"
import AvatarTable from "@/components/Tables/AvatarTable.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Table' },
    { id: 'striped', label: 'Striped Table' },
    { id: 'sortable', label: 'Sortable Table' },
    { id: 'action', label: 'Action Table' },
    { id: 'avatar', label: 'Avatar Table' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Tables</h1>
      <p class="text-gray-500">Data grids for displaying large sets of information.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleTable />
      </div>
      <div id="striped" class="scroll-mt-24">
        <StripedTable />
      </div>
      <div id="sortable" class="scroll-mt-24">
        <SortableTable />
      </div>
      <div id="action" class="scroll-mt-24">
        <ActionTable />
      </div>
      <div id="avatar" class="scroll-mt-24">
        <AvatarTable />
      </div>
    </div>
  </div>
</template>
