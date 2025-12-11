<script setup lang="ts">
import SimplePagination from "@/components/Pagination/SimplePagination.vue"
import NumberedPagination from "@/components/Pagination/NumberedPagination.vue"
import LoadMore from "@/components/Pagination/LoadMore.vue"
import SplitPagination from "@/components/Pagination/SplitPagination.vue"
import FilterPagination from "@/components/Pagination/FilterPagination.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Pagination</h1>
      <p class="text-sm text-muted-foreground">Navigation across multiple pages of data.</p>
    </div>

    <div class="space-y-3">
      <SimplePagination />
      <NumberedPagination />
      <LoadMore />
      <SplitPagination />
      <FilterPagination />
    </div>
  </div>
</template>
