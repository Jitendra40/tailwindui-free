<script setup lang="ts">
import AvatarGroup from "@/components/Media/AvatarGroup.vue"
import AspectRatio from "@/components/Media/AspectRatio.vue"
import ImageGrid from "@/components/Media/ImageGrid.vue"
import LightboxImage from "@/components/Media/LightboxImage.vue"
import VideoPlayer from "@/components/Media/VideoPlayer.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'avatar-group', label: 'Avatar Group' },
    { id: 'aspect-ratio', label: 'Aspect Ratio' },
    { id: 'image-grid', label: 'Image Grid' },
    { id: 'lightbox', label: 'Lightbox Image' },
    { id: 'video-player', label: 'Video Player' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Media</h1>
      <p class="text-sm text-muted-foreground">Components for displaying images and video.</p>
    </div>

    <div class="space-y-8">
      <div id="avatar-group" class="scroll-mt-24">
        <AvatarGroup />
      </div>
      <div id="aspect-ratio" class="scroll-mt-24">
        <AspectRatio />
      </div>
      <div id="image-grid" class="scroll-mt-24">
        <ImageGrid />
      </div>
      <div id="lightbox" class="scroll-mt-24">
        <LightboxImage />
      </div>
      <div id="video-player" class="scroll-mt-24">
        <VideoPlayer />
      </div>
    </div>
  </div>
</template>
