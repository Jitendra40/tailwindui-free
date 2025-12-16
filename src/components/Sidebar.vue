<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar"
import SearchForm from "@/components/SearchForm.vue"
import { useRoute } from "vue-router"
import { ref, computed } from "vue"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const componentFiles = import.meta.glob('@/components/**/*.vue')

const getComponentCount = (path: string) => {
  if (!path || path === '#') return 0
  const folderName = path.substring(1).split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')
  
  const count = Object.keys(componentFiles).filter(file => {
    return file.toLowerCase().includes(`/components/${folderName.toLowerCase()}/`)
  }).length

  return count || 0
}

const props = defineProps<SidebarProps>()
const route = useRoute()

const searchQuery = ref("")

import { navigationData } from '@/lib/navigation'

const data = {
  navMain: navigationData.map(group => ({
    title: group.title,
    url: '#',
    items: group.items.map(item => ({
      title: item.name,
      url: item.href
    }))
  }))
}

const filteredNavMain = computed(() => {
  if (!searchQuery.value) return data.navMain

  const query = searchQuery.value.toLowerCase()
  return data.navMain.map(group => {
    if (group.title.toLowerCase().includes(query)) {
      return group
    }
    const filteredItems = group.items.filter(item => item.title.toLowerCase().includes(query))
    return {
      ...group,
      items: filteredItems
    }
  }).filter(group => group.items.length > 0)
})
</script>

<template>
  <Sidebar v-bind="props" class="!bg-zinc-850 !border-r !border-zinc-800 text-zinc-100 font-sans">
    <SidebarHeader class="px-6 py-5 border-b border-zinc-900 bg-zinc-950 z-10">
      <div class="flex items-center gap-3 mb-6">
         <RouterLink to="/" class="flex items-center gap-3 group px-2">
       
             <div class="flex flex-col">
                <span class="font-bold text-lg text-white tracking-tight leading-none">Tailwind v4</span>
                <span class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">UI Library</span>
             </div>
         </RouterLink>
      </div>
      <SearchForm v-model="searchQuery" />
    </SidebarHeader>
    <SidebarContent class="gap-1 px-3 py-6 bg-zinc-950 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-zinc-700">
      <Collapsible
        v-for="item in filteredNavMain"
        :key="item.title"
        :title="item.title"
        default-open
        class="group/collapsible mb-6"
      >
        <SidebarGroup>
          <SidebarGroupLabel
            as-child
            class="group/label flex items-center justify-between text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3 px-3 cursor-pointer select-none hover:text-zinc-300 transition-colors"
          >
            <CollapsibleTrigger class="flex items-center w-full">
              {{ item.title }}
              <svg class="ml-auto w-3.5 h-3.5 transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90 text-zinc-600 group-hover/label:text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem v-for="childItem in item.items" :key="childItem.title">
                  <SidebarMenuButton 
                    as-child 
                    :is-active="route.path === childItem.url" 
                    class="
                      w-full rounded-md px-3 py-2 text-sm font-medium transition-all duration-200
                      hover:bg-zinc-900 hover:text-white hover:translate-x-1
                      data-[active=true]:bg-indigo-600 data-[active=true]:text-white data-[active=true]:shadow-md data-[active=true]:shadow-indigo-900/20 data-[active=true]:translate-x-0
                      text-zinc-400
                      group
                    "
                  >
                    <RouterLink :to="childItem.url" class="flex items-center !justify-between w-full">
                      <span class="line-clamp-1 flex-1">{{ childItem.title }}</span>
                      <span v-if="getComponentCount(childItem.url) > 0" class="shrink-0 ml-2 text-xs font-mono font-medium bg-zinc-800 text-zinc-400 py-0.5 px-2 rounded-full group-hover:bg-zinc-700 group-hover:text-zinc-200 group-data-[active=true]:bg-indigo-500/20 group-data-[active=true]:text-indigo-200 transition-colors">
                        {{ getComponentCount(childItem.url) }}
                      </span>
                    </RouterLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
      
      <div v-if="filteredNavMain.length === 0" class="px-6 py-8 text-center">
         <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-zinc-500 mb-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
         </div>
         <p class="text-sm font-medium text-zinc-400">No components found</p>
         <p class="text-xs text-zinc-600 mt-1">Try searching for something else.</p>
      </div>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
