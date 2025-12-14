<script setup lang="ts">
import SimpleMenu from "@/components/Menus/SimpleMenu.vue"
import IconMenu from "@/components/Menus/IconMenu.vue"
import SectionMenu from "@/components/Menus/SectionMenu.vue"
import AvatarMenu from "@/components/Menus/AvatarMenu.vue"
import ContextMenu from "@/components/Menus/ContextMenu.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Menu' },
    { id: 'icon', label: 'Icon Menu' },
    { id: 'section', label: 'Section Menu' },
    { id: 'avatar', label: 'Avatar Menu' },
    { id: 'context', label: 'Context Menu' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Menus</h1>
      <p class="text-gray-500">Overlay menus for navigation and actions.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleMenu />
      </div>
      <div id="icon" class="scroll-mt-24">
        <IconMenu />
      </div>
      <div id="section" class="scroll-mt-24">
        <SectionMenu />
      </div>
      <div id="avatar" class="scroll-mt-24">
        <AvatarMenu />
      </div>
      <div id="context" class="scroll-mt-24">
        <ContextMenu />
      </div>
    </div>
  </div>
</template>
