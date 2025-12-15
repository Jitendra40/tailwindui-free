<script setup lang="ts">
import SimpleLogin from "@/components/Auth/SimpleLogin.vue"
import SplitScreenLogin from "@/components/Auth/SplitScreenLogin.vue"
import TwoFactor from "@/components/Auth/TwoFactor.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Login' },
    { id: 'split', label: 'Split Screen' },
    { id: '2fa', label: 'Two-Factor (2FA)' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Authentication</h1>
      <p class="text-gray-500">Login forms, registration pages, and authentication flows.</p>
    </div>

    <div class="space-y-8">
      <div id="simple" class="scroll-mt-24">
        <SimpleLogin />
      </div>
      <div id="split" class="scroll-mt-24">
        <SplitScreenLogin />
      </div>
      <div id="2fa" class="scroll-mt-24">
        <TwoFactor />
      </div>
    </div>
  </div>
</template>
