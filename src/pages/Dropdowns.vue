<script setup lang="ts">
import DropdownsBase from "@/components/Dropdowns/Base.vue"
import DropdownsWithAvatar from "@/components/Dropdowns/WithAvatar.vue"
import DropdownsWithSearch from "@/components/Dropdowns/WithSearch.vue"
import DropdownsWithRadio from "@/components/Dropdowns/WithRadio.vue"
import DropdownsWithShortcuts from "@/components/Dropdowns/WithShortcuts.vue"
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Dropdowns</h1>
      <p class="text-sm text-muted-foreground">Lightweight dropdown menus built with details/summary and vanilla CSS.</p>
    </div>
    <div class="">
      <DropdownsBase />
      <DropdownsWithAvatar />
      <DropdownsWithSearch />
      <DropdownsWithRadio />
      <DropdownsWithShortcuts />
    </div>
  </div>
</template>
