<script setup lang="ts">
import SimpleTextarea from "@/components/Textareas/SimpleTextarea.vue"
import ActionTextarea from "@/components/Textareas/ActionTextarea.vue"
import CommentTextarea from "@/components/Textareas/CommentTextarea.vue"
import MarkdownTextarea from "@/components/Textareas/MarkdownTextarea.vue"
import AutoResizeTextarea from "@/components/Textareas/AutoResizeTextarea.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Textareas</h1>
      <p class="text-gray-500">Multi-line inputs for comments, descriptions, and more.</p>
    </div>

    <div class="grid gap-10">
      <SimpleTextarea />
      <ActionTextarea />
      <CommentTextarea />
      <MarkdownTextarea />
      <AutoResizeTextarea />
    </div>
  </div>
</template>
