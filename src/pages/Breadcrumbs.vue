<script setup lang="ts">
import BreadcrumbsBase from "@/components/Breadcrumbs/Base.vue"
import ChevronBreadcrumb from "@/components/Breadcrumbs/ChevronBreadcrumb.vue"
import BackgroundBreadcrumb from "@/components/Breadcrumbs/BackgroundBreadcrumb.vue"
import PillBreadcrumb from "@/components/Breadcrumbs/PillBreadcrumb.vue"
import CollapsedBreadcrumb from "@/components/Breadcrumbs/CollapsedBreadcrumb.vue"
import IconBreadcrumb from "@/components/Breadcrumbs/IconBreadcrumb.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'base', label: 'Base Style' },
    { id: 'chevron', label: 'Chevron' },
    { id: 'background', label: 'Background' },
    { id: 'pill', label: 'Pill' },
    { id: 'collapsed', label: 'Collapsed' },
    { id: 'icon', label: 'Icon' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Breadcrumbs</h1>
      <p class="text-sm text-muted-foreground">Navigation trail with separators and current state.</p>
    </div>
    <div class="space-y-8">
      <div id="base" class="scroll-mt-24">
        <BreadcrumbsBase />
      </div>
      <div id="chevron" class="scroll-mt-24">
        <ChevronBreadcrumb />
      </div>
      <div id="background" class="scroll-mt-24">
        <BackgroundBreadcrumb />
      </div>
      <div id="pill" class="scroll-mt-24">
        <PillBreadcrumb />
      </div>
      <div id="collapsed" class="scroll-mt-24">
        <CollapsedBreadcrumb />
      </div>
      <div id="icon" class="scroll-mt-24">
        <IconBreadcrumb />
      </div>
    </div>
  </div>
</template>
