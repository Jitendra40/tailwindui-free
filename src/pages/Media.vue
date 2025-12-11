<script setup lang="ts">
import AvatarGroup from "@/components/Media/AvatarGroup.vue"
import AspectRatio from "@/components/Media/AspectRatio.vue"
import ImageGrid from "@/components/Media/ImageGrid.vue"
import LightboxImage from "@/components/Media/LightboxImage.vue"
import VideoPlayer from "@/components/Media/VideoPlayer.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Media</h1>
      <p class="text-sm text-muted-foreground">Components for displaying images and video.</p>
    </div>

    <div class="space-y-3">
      <AvatarGroup />
      <AspectRatio />
      <ImageGrid />
      <LightboxImage />
      <VideoPlayer />
    </div>
  </div>
</template>
