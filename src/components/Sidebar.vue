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
import { componentMap } from '@/lib/componentMap'

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
  
  // 1. Filter existing navigation
  const results = data.navMain.map(group => {
    // If group matches, return all subitems (optional, or just filter subitems)
    // Here we strictly filter items to be precise
    const filteredItems = group.items.filter(item => item.title.toLowerCase().includes(query))
    return {
      ...group,
      items: filteredItems
    }
  }).filter(group => group.items.length > 0 || group.title.toLowerCase().includes(query))
  
  // 2. Search in componentMap
  const componentMatches: Record<string, { title: string, url: string }[]> = {}
  
  Object.entries(componentMap).forEach(([category, variants]) => {
      variants.forEach(variant => {
          if (variant.label.toLowerCase().includes(query)) {
               // Normalize category for display: 'pages' -> 'Pages', 'auth' -> 'Authentication'
               // We will try to match against existing group titles or fallback to capitalized category
               
               // Mapping simple category keys to titles in navigation.ts
               let groupTitle = category.charAt(0).toUpperCase() + category.slice(1)
               if (category === 'auth') groupTitle = 'Authentication' // Not in nav data, but good for display
               
               if (!componentMatches[groupTitle]) componentMatches[groupTitle] = []
               
               // Check if this item is already in results (avoid duplicates if we linked them in nav)
               // The nav links are generally /pages etc, not deep links.
               
               componentMatches[groupTitle].push({
                  title: variant.label,
                  url: `/view/${category}/${variant.id}`
               })
          }
      })
  })

  // 3. Merge extra matches
  Object.entries(componentMatches).forEach(([groupTitle, items]) => {
      const existingGroup = results.find(g => g.title.toLowerCase() === groupTitle.toLowerCase())
      if (existingGroup) {
          // Avoid duplicates if any?
          items.forEach(item => {
              if (!existingGroup.items.find(i => i.title === item.title)) {
                  existingGroup.items.push(item)
              }
          })
      } else {
          // Create new group if we have matches for a category not in the filtered nav result
          // But wait, if we are filtering, maybe the group was filtered out because it had no standard items matching?
          // If so, we should check if we can add to data.navMain's original groups? 
          
          // Actually, results only contains groups that had matches.
          // We can just push a new group object to results.
          results.push({
              title: groupTitle,
              url: '#',
              items: items
          })
      }
  })
  
  return results
})
</script>

<template>
  <Sidebar v-bind="props" class="bg-slate-950 border-r border-white/10 text-slate-100 font-sans">
    <SidebarHeader class="px-6 py-5 border-b border-white/5 bg-slate-950 z-10">
      <div class="flex items-center gap-3 mb-6">
         <RouterLink to="/" class="flex items-center gap-3 group px-2">
       
             <div class="flex flex-col">
                <span class="font-bold text-lg text-white tracking-tight leading-none">Tailwind v4</span>
                <span class="text-[10px] uppercase tracking-widest text-slate-500 font-bold">UI Library</span>
             </div>
         </RouterLink>
      </div>
      <SearchForm v-model="searchQuery" />
    </SidebarHeader>
    <SidebarContent class="gap-1 px-3 py-6 bg-slate-950 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-700">
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
            class="group/label flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-3 cursor-pointer select-none hover:text-slate-400 transition-colors"
          >
            <CollapsibleTrigger class="flex items-center w-full">
              {{ item.title }}
              <svg class="ml-auto w-3.5 h-3.5 transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90 text-slate-600 group-hover/label:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                      hover:bg-slate-900 hover:text-white hover:translate-x-1
                      data-[active=true]:bg-indigo-600 data-[active=true]:text-white data-[active=true]:shadow-md data-[active=true]:shadow-indigo-900/20 data-[active=true]:translate-x-0
                      text-slate-400
                      group
                    "
                  >
                    <RouterLink :to="childItem.url" class="flex items-center !justify-between w-full">
                      <span class="line-clamp-1 flex-1">{{ childItem.title }}</span>
                      <span v-if="getComponentCount(childItem.url) > 0" class="shrink-0 ml-2 text-xs font-mono font-medium bg-slate-800 text-slate-400 py-0.5 px-2 rounded-full group-hover:bg-slate-700 group-hover:text-slate-200 group-data-[active=true]:bg-indigo-500/20 group-data-[active=true]:text-indigo-200 transition-colors">
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
         <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-slate-500 mb-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
         </div>
         <p class="text-sm font-medium text-slate-400">No components found</p>
         <p class="text-xs text-slate-600 mt-1">Try searching for something else.</p>
      </div>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
