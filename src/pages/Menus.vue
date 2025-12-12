<script setup lang="ts">
import SimpleMenu from "@/components/Menus/SimpleMenu.vue"
import IconMenu from "@/components/Menus/IconMenu.vue"
import SectionMenu from "@/components/Menus/SectionMenu.vue"
import AvatarMenu from "@/components/Menus/AvatarMenu.vue"
import ContextMenu from "@/components/Menus/ContextMenu.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Menus</h1>
      <p class="text-gray-500">Overlay menus for navigation and actions.</p>
    </div>

    <div class="grid gap-10">
      <SimpleMenu />
      <IconMenu />
      <SectionMenu />
      <AvatarMenu />
      <ContextMenu />
    </div>
  </div>
</template>
