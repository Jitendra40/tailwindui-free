<script setup lang="ts">
import TopBannerAnnouncement from "@/components/Announcements/TopBannerAnnouncement.vue"
import BottomFixedAnnouncement from "@/components/Announcements/BottomFixedAnnouncement.vue"
import FloatingAnnouncement from "@/components/Announcements/FloatingAnnouncement.vue"
import SimpleColorAnnouncement from "@/components/Announcements/SimpleColorAnnouncement.vue"
import InlineBadgeAnnouncement from "@/components/Announcements/InlineBadgeAnnouncement.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Announcements</h1>
      <p class="text-gray-500">Banners and notifications to grab user attention.</p>
    </div>

    <div class="grid gap-10">
      <TopBannerAnnouncement />
      <BottomFixedAnnouncement />
      <FloatingAnnouncement />
      <SimpleColorAnnouncement />
      <InlineBadgeAnnouncement />
    </div>
  </div>
</template>
