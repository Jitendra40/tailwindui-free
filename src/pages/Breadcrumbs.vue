<script setup lang="ts">
import BreadcrumbsBase from "@/components/Breadcrumbs/Base.vue"
import ChevronBreadcrumb from "@/components/Breadcrumbs/ChevronBreadcrumb.vue"
import BackgroundBreadcrumb from "@/components/Breadcrumbs/BackgroundBreadcrumb.vue"
import PillBreadcrumb from "@/components/Breadcrumbs/PillBreadcrumb.vue"
import CollapsedBreadcrumb from "@/components/Breadcrumbs/CollapsedBreadcrumb.vue"
import IconBreadcrumb from "@/components/Breadcrumbs/IconBreadcrumb.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Breadcrumbs</h1>
      <p class="text-sm text-muted-foreground">Navigation trail with separators and current state.</p>
    </div>
    <div class="space-y-3">
      <BreadcrumbsBase />
      <ChevronBreadcrumb />
      <BackgroundBreadcrumb />
      <PillBreadcrumb />
      <CollapsedBreadcrumb />
      <IconBreadcrumb />
    </div>
  </div>
</template>
