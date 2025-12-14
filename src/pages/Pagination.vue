<script setup lang="ts">
import SimplePagination from "@/components/Pagination/SimplePagination.vue"
import NumberedPagination from "@/components/Pagination/NumberedPagination.vue"
import LoadMore from "@/components/Pagination/LoadMore.vue"
import SplitPagination from "@/components/Pagination/SplitPagination.vue"
import FilterPagination from "@/components/Pagination/FilterPagination.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Pagination' },
    { id: 'numbered', label: 'Numbered Pagination' },
    { id: 'load-more', label: 'Load More' },
    { id: 'split', label: 'Split Pagination' },
    { id: 'filter', label: 'Filter Pagination' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Pagination</h1>
      <p class="text-sm text-muted-foreground">Navigation across multiple pages of data.</p>
    </div>

    <div class="space-y-8">
      <div id="simple" class="scroll-mt-24">
        <SimplePagination />
      </div>
      <div id="numbered" class="scroll-mt-24">
        <NumberedPagination />
      </div>
      <div id="load-more" class="scroll-mt-24">
        <LoadMore />
      </div>
      <div id="split" class="scroll-mt-24">
        <SplitPagination />
      </div>
      <div id="filter" class="scroll-mt-24">
        <FilterPagination />
      </div>
    </div>
  </div>
</template>
