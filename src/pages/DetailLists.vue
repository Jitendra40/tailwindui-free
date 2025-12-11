<script setup lang="ts">
import NarrowList from "@/components/DetailLists/NarrowList.vue"
import TwoColumnList from "@/components/DetailLists/TwoColumnList.vue"
import SectionedList from "@/components/DetailLists/SectionedList.vue"
import ActionableList from "@/components/DetailLists/ActionableList.vue"
import StatusList from "@/components/DetailLists/StatusList.vue"
import CodeSnippetList from "@/components/DetailLists/CodeSnippetList.vue"
import CardGridList from "@/components/DetailLists/CardGridList.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Detail Lists</h1>
      <p class="text-sm text-muted-foreground">Definition list layouts for key-value metadata, logs, and configurations.</p>
    </div>
    <div class="space-y-12">
      <NarrowList />
      <TwoColumnList />
      <SectionedList />
      <ActionableList />
      <StatusList />
      <CodeSnippetList />
      <CardGridList />
    </div>
  </div>
</template>
