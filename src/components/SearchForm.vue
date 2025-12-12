<script setup lang="ts">
import { Label } from "@/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar"

defineProps<{
  modelValue?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <form @submit.prevent>
    <SidebarGroup class="py-0">
      <SidebarGroupContent class="relative">
        <Label for="search" class="sr-only">
          Search
        </Label>
        <SidebarInput
          id="search"
          :model-value="modelValue"
          @update:model-value="emit('update:modelValue', $event)"
          placeholder="Search components..."
          class="pl-9 h-10 bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 rounded-lg w-full transition-all text-sm backdrop-blur-md"
        />
        <svg class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
      </SidebarGroupContent>
    </SidebarGroup>
  </form>
</template>
