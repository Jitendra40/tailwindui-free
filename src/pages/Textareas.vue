<script setup lang="ts">
import SimpleTextarea from "@/components/Textareas/SimpleTextarea.vue"
import ActionTextarea from "@/components/Textareas/ActionTextarea.vue"
import CommentTextarea from "@/components/Textareas/CommentTextarea.vue"
import MarkdownTextarea from "@/components/Textareas/MarkdownTextarea.vue"
import AutoResizeTextarea from "@/components/Textareas/AutoResizeTextarea.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Textarea' },
    { id: 'action', label: 'Action Textarea' },
    { id: 'comment', label: 'Comment Textarea' },
    { id: 'markdown', label: 'Markdown Textarea' },
    { id: 'auto-resize', label: 'Auto Resize' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Textareas</h1>
      <p class="text-gray-500">Multi-line inputs for comments, descriptions, and more.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleTextarea />
      </div>
      <div id="action" class="scroll-mt-24">
        <ActionTextarea />
      </div>
      <div id="comment" class="scroll-mt-24">
        <CommentTextarea />
      </div>
      <div id="markdown" class="scroll-mt-24">
        <MarkdownTextarea />
      </div>
      <div id="auto-resize" class="scroll-mt-24">
        <AutoResizeTextarea />
      </div>
    </div>
  </div>
</template>
