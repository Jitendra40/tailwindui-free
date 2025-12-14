<script setup lang="ts">
import DropdownFilter from "@/components/Filters/DropdownFilter.vue"
import SidebarFilter from "@/components/Filters/SidebarFilter.vue"
import TagFilter from "@/components/Filters/TagFilter.vue"
import SearchFilter from "@/components/Filters/SearchFilter.vue"
import DateRangeFilter from "@/components/Filters/DateRangeFilter.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'dropdown', label: 'Dropdown Filter' },
    { id: 'sidebar', label: 'Sidebar Filter' },
    { id: 'tag', label: 'Tag Filter' },
    { id: 'search', label: 'Search Filter' },
    { id: 'date-range', label: 'Date Range Filter' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Filters</h1>
      <p class="text-sm text-muted-foreground">Tools to refine and sort data sets.</p>
    </div>

    <div class="space-y-8">
      <div id="dropdown" class="scroll-mt-24">
        <DropdownFilter />
      </div>
      <div id="sidebar" class="scroll-mt-24">
        <SidebarFilter />
      </div>
      <div id="tag" class="scroll-mt-24">
        <TagFilter />
      </div>
      <div id="search" class="scroll-mt-24">
        <SearchFilter />
      </div>
      <div id="date-range" class="scroll-mt-24">
        <DateRangeFilter />
      </div>
    </div>
  </div>
</template>
