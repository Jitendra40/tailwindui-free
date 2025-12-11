<script setup lang="ts">

import { Label } from "@/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar"
</script>

<template>
  <form>
    <SidebarGroup class="py-0">
      <SidebarGroupContent class="relative">
        <Label for="search" class="sr-only">
          Search
        </Label>
        <SidebarInput
          id="search"
          placeholder="Search components..."
          class="pl-9 h-9 bg-white border-gray-200 focus:border-indigo-500 focus:ring-indigo-500/20 rounded-lg shadow-sm w-full transition-all text-sm"
        />
        <svg class="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
      </SidebarGroupContent>
    </SidebarGroup>
  </form>
</template>
