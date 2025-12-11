<script setup lang="ts">
import DropdownFilter from "@/components/Filters/DropdownFilter.vue"
import SidebarFilter from "@/components/Filters/SidebarFilter.vue"
import TagFilter from "@/components/Filters/TagFilter.vue"
import SearchFilter from "@/components/Filters/SearchFilter.vue"
import DateRangeFilter from "@/components/Filters/DateRangeFilter.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Filters</h1>
      <p class="text-sm text-muted-foreground">Tools to refine and sort data sets.</p>
    </div>

    <div class="space-y-3">
      <DropdownFilter />
      <SidebarFilter />
      <TagFilter />
      <SearchFilter />
      <DateRangeFilter />
    </div>
  </div>
</template>
