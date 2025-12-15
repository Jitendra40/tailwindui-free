<script setup lang="ts">
import ProfileSettings from "@/components/Settings/ProfileSettings.vue"
import NotificationSettings from "@/components/Settings/NotificationSettings.vue"
import DeleteAccount from "@/components/Settings/DeleteAccount.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'profile', label: 'Profile Settings' },
    { id: 'notification', label: 'Notifications' },
    { id: 'delete', label: 'Delete Account' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Settings</h1>
      <p class="text-gray-500">Configuration forms for user profile and application preferences.</p>
    </div>

    <div class="space-y-16">
      <div id="profile" class="scroll-mt-24">
        <ProfileSettings />
      </div>
      <div id="notification" class="scroll-mt-24">
        <NotificationSettings />
      </div>
      <div id="delete" class="scroll-mt-24">
        <DeleteAccount />
      </div>
    </div>
  </div>
</template>
