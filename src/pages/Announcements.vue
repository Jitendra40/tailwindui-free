<script setup lang="ts">
import TopBannerAnnouncement from "@/components/Announcements/TopBannerAnnouncement.vue"
import BottomFixedAnnouncement from "@/components/Announcements/BottomFixedAnnouncement.vue"
import FloatingAnnouncement from "@/components/Announcements/FloatingAnnouncement.vue"
import SimpleColorAnnouncement from "@/components/Announcements/SimpleColorAnnouncement.vue"
import InlineBadgeAnnouncement from "@/components/Announcements/InlineBadgeAnnouncement.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'top-banner', label: 'Top Banner' },
    { id: 'bottom-fixed', label: 'Bottom Fixed' },
    { id: 'floating', label: 'Floating' },
    { id: 'simple-color', label: 'Simple Color' },
    { id: 'inline-badge', label: 'Inline Badge' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Announcements</h1>
      <p class="text-gray-500">Banners and notifications to grab user attention.</p>
    </div>

    <div class="grid gap-10">
      <div id="top-banner" class="scroll-mt-24">
        <TopBannerAnnouncement />
      </div>
      <div id="bottom-fixed" class="scroll-mt-24">
        <BottomFixedAnnouncement />
      </div>
      <div id="floating" class="scroll-mt-24">
        <FloatingAnnouncement />
      </div>
      <div id="simple-color" class="scroll-mt-24">
        <SimpleColorAnnouncement />
      </div>
      <div id="inline-badge" class="scroll-mt-24">
        <InlineBadgeAnnouncement />
      </div>
    </div>
  </div>
</template>
