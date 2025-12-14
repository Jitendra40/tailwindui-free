<script setup lang="ts">
import NarrowList from "@/components/DetailLists/NarrowList.vue"
import TwoColumnList from "@/components/DetailLists/TwoColumnList.vue"
import SectionedList from "@/components/DetailLists/SectionedList.vue"
import ActionableList from "@/components/DetailLists/ActionableList.vue"
import StatusList from "@/components/DetailLists/StatusList.vue"
import CodeSnippetList from "@/components/DetailLists/CodeSnippetList.vue"
import CardGridList from "@/components/DetailLists/CardGridList.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'narrow', label: 'Narrow List' },
    { id: 'two-column', label: 'Two Column List' },
    { id: 'sectioned', label: 'Sectioned List' },
    { id: 'actionable', label: 'Actionable List' },
    { id: 'status', label: 'Status List' },
    { id: 'code-snippet', label: 'Code Snippet List' },
    { id: 'card-grid', label: 'Card Grid List' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Detail Lists</h1>
      <p class="text-sm text-muted-foreground">Definition list layouts for key-value metadata, logs, and configurations.</p>
    </div>
    <div class="space-y-12">
      <div id="narrow" class="scroll-mt-24">
        <NarrowList />
      </div>
      <div id="two-column" class="scroll-mt-24">
        <TwoColumnList />
      </div>
      <div id="sectioned" class="scroll-mt-24">
        <SectionedList />
      </div>
      <div id="actionable" class="scroll-mt-24">
        <ActionableList />
      </div>
      <div id="status" class="scroll-mt-24">
        <StatusList />
      </div>
      <div id="code-snippet" class="scroll-mt-24">
        <CodeSnippetList />
      </div>
      <div id="card-grid" class="scroll-mt-24">
        <CardGridList />
      </div>
    </div>
  </div>
</template>
