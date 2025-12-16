<script setup lang="ts">
import SimpleHeader from "@/components/Headers/SimpleHeader.vue"
import CenteredHeader from "@/components/Headers/CenteredHeader.vue"
import WithSearchHeader from "@/components/Headers/WithSearchHeader.vue"
import DarkHeader from "@/components/Headers/DarkHeader.vue"
import EcommerceHeader from "@/components/Headers/EcommerceHeader.vue"
import DocsHeader from "@/components/Headers/DocsHeader.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Compact SaaS Header' },
    { id: 'centered', label: 'Centered Minimal Header' },
    { id: 'with-search', label: 'Search-First Header' },
    { id: 'dark', label: 'Dark Studio Header' },
    { id: 'ecommerce', label: 'Ecommerce Header' },
    { id: 'docs', label: 'Docs Header' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Headers</h1>
      <p class="text-gray-500">Navigation bars and page headers.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleHeader />
      </div>
      <div id="centered" class="scroll-mt-24">
        <CenteredHeader />
      </div>
      <div id="with-search" class="scroll-mt-24">
        <WithSearchHeader />
      </div>
      <div id="dark" class="scroll-mt-24">
        <DarkHeader />
      </div>
      <div id="ecommerce" class="scroll-mt-24">
        <EcommerceHeader />
      </div>
      <div id="docs" class="scroll-mt-24">
        <DocsHeader />
      </div>
    </div>
  </div>
</template>
