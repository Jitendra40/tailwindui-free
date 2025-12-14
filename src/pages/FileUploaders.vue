<script setup lang="ts">
import SimpleFileUpload from "@/components/FileUploaders/SimpleFileUpload.vue"
import DragDropUpload from "@/components/FileUploaders/DragDropUpload.vue"
import ImagePreviewUpload from "@/components/FileUploaders/ImagePreviewUpload.vue"
import ProgressFileUpload from "@/components/FileUploaders/ProgressFileUpload.vue"
import ListFileUpload from "@/components/FileUploaders/ListFileUpload.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple File Upload' },
    { id: 'drag-drop', label: 'Drag & Drop Upload' },
    { id: 'image-preview', label: 'Image Preview Upload' },
    { id: 'progress', label: 'Progress File Upload' },
    { id: 'list', label: 'List File Upload' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">File Uploaders</h1>
      <p class="text-gray-500">Interfaces for selecting and uploading files.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleFileUpload />
      </div>
      <div id="drag-drop" class="scroll-mt-24">
        <DragDropUpload />
      </div>
      <div id="image-preview" class="scroll-mt-24">
        <ImagePreviewUpload />
      </div>
      <div id="progress" class="scroll-mt-24">
        <ProgressFileUpload />
      </div>
      <div id="list" class="scroll-mt-24">
        <ListFileUpload />
      </div>
    </div>
  </div>
</template>
