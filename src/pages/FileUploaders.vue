<script setup lang="ts">
import SimpleFileUpload from "@/components/FileUploaders/SimpleFileUpload.vue"
import DragDropUpload from "@/components/FileUploaders/DragDropUpload.vue"
import ImagePreviewUpload from "@/components/FileUploaders/ImagePreviewUpload.vue"
import ProgressFileUpload from "@/components/FileUploaders/ProgressFileUpload.vue"
import ListFileUpload from "@/components/FileUploaders/ListFileUpload.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">File Uploaders</h1>
      <p class="text-gray-500">Interfaces for selecting and uploading files.</p>
    </div>

    <div class="grid gap-10">
      <SimpleFileUpload />
      <DragDropUpload />
      <ImagePreviewUpload />
      <ProgressFileUpload />
      <ListFileUpload />
    </div>
  </div>
</template>
