<script setup lang="ts">
import SimpleTable from "@/components/Tables/SimpleTable.vue"
import StripedTable from "@/components/Tables/StripedTable.vue"
import SortableTable from "@/components/Tables/SortableTable.vue"
import ActionTable from "@/components/Tables/ActionTable.vue"
import AvatarTable from "@/components/Tables/AvatarTable.vue"
import CheckboxedTable from "@/components/Tables/CheckboxedTable.vue"
import DenseTable from "@/components/Tables/DenseTable.vue"
import StickyHeaderTable from "@/components/Tables/StickyHeaderTable.vue"
import FinanceIPOTable from "@/components/Tables/FinanceIPOTable.vue"
import FinanceMarketMoversTable from "@/components/Tables/FinanceMarketMoversTable.vue"
import CRMLeadsTable from "@/components/Tables/CRMLeadsTable.vue"
import RealEstateSiteVisitsTable from "@/components/Tables/RealEstateSiteVisitsTable.vue"

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
    { id: 'checkboxed', label: 'Checkboxed Table' },
    { id: 'dense', label: 'Dense Table' },
    { id: 'sticky', label: 'Sticky Header' },
    { id: 'ipo', label: 'Finance: IPO Watch' },
    { id: 'movers', label: 'Finance: Market Movers' },
    { id: 'leads', label: 'CRM: Leads List' },
    { id: 'visits', label: 'Real Estate: Site Visits' },
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
      <div id="checkboxed" class="scroll-mt-24">
        <CheckboxedTable />
      </div>
      <div id="dense" class="scroll-mt-24">
        <DenseTable />
      </div>
      <div id="sticky" class="scroll-mt-24">
        <StickyHeaderTable />
      </div>
      <div id="ipo" class="scroll-mt-24">
        <FinanceIPOTable />
      </div>
      <div id="movers" class="scroll-mt-24">
        <FinanceMarketMoversTable />
      </div>
      <div id="leads" class="scroll-mt-24">
        <CRMLeadsTable />
      </div>
      <div id="visits" class="scroll-mt-24">
        <RealEstateSiteVisitsTable />
      </div>
    </div>
  </div>
</template>
