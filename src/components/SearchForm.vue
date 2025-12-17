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

const clearSearch = () => {
  emit('update:modelValue', '')
}
</script>

<template>
  <form @submit.prevent>
    <SidebarGroup class="py-0 group-data-[collapsible=icon]:hidden">
      <SidebarGroupContent class="relative group">
        <Label for="search" class="sr-only">
          Search
        </Label>
        
        <!-- Search Icon -->
        <div class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors z-10">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
        </div>

        <SidebarInput
          id="search"
          :model-value="modelValue"
          @update:model-value="emit('update:modelValue', $event)"
          placeholder="Search..."
          class="peer pl-9 pr-9 h-9 bg-slate-900/50 border-input border-slate-800 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 rounded-md w-full transition-all text-xs font-medium shadow-sm hover:border-slate-700"
        />
        
        <!-- Clear Button -->
         <button 
           v-if="modelValue"
           type="button"
           @click="clearSearch"
           class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors focus:outline-none p-0.5 rounded-full hover:bg-slate-800"
           aria-label="Clear search"
         >
           <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <line x1="18" y1="6" x2="6" y2="18"></line>
             <line x1="6" y1="6" x2="18" y2="18"></line>
           </svg>
         </button>

      </SidebarGroupContent>
    </SidebarGroup>
  </form>
</template>
