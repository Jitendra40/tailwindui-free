<script setup lang="ts">
import NativeSelect from "@/components/Selects/NativeSelect.vue"
import CustomSelect from "@/components/Selects/CustomSelect.vue"
import IconSelect from "@/components/Selects/IconSelect.vue"
import MultiSelect from "@/components/Selects/MultiSelect.vue"
import StatusSelect from "@/components/Selects/StatusSelect.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Selects</h1>
      <p class="text-gray-500">Dropdown menus for selecting specific options.</p>
    </div>

    <div class="grid gap-10">
      <NativeSelect />
      <CustomSelect />
      <IconSelect />
      <MultiSelect />
      <StatusSelect />
    </div>
  </div>
</template>
