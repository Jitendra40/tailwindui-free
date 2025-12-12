<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar"

import SearchForm from "@/components/SearchForm.vue"
import { useRoute } from "vue-router"
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

const props = defineProps<SidebarProps>()
const route = useRoute()

// This is sample data.
const data = {
  navMain: [
    {
      title: "Forms",
      url: "#",
      items: [
        { title: "Buttons", url: "/buttons" },
        { title: "Checkboxes", url: "/checkboxes" },
        { title: "Inputs", url: "/inputs" },
        { title: "Textareas", url: "/textareas" },
        { title: "Selects", url: "/selects" },
        { title: "Radio Groups", url: "/radio-groups" },
        { title: "Toggles", url: "/toggles" },
        { title: "File Uploaders", url: "/file-uploaders" },
        { title: "Range Input", url: "/range-input" },
      ],
    },
    {
      title: "Navigation",
      url: "#",
      items: [
        { title: "Breadcrumbs", url: "/breadcrumbs" },
        { title: "Pagination", url: "/pagination" },
        { title: "Steps", url: "/steps" },
        { title: "Skip Link", url: "/skip-link" },
        { title: "Menus", url: "/menus" },
        { title: "Dropdowns", url: "/dropdowns" },
      ],
    },
    {
      title: "Data Display",
      url: "#",
      items: [
        { title: "Badges", url: "/badges" },
        { title: "Cards", url: "/cards" },
        { title: "Tables", url: "/tables" },
        { title: "Filters", url: "/filters" },
        { title: "Stats", url: "/stats" },
        { title: "Detail Lists", url: "/detail-lists" },
        { title: "Media", url: "/media" },
        { title: "Accordion", url: "/accordion" },
        { title: "Dividers", url: "/dividers" },
        { title: "Progress Bars", url: "/progress-bars" },
        { title: "Empty States", url: "/empty-states" },
      ],
    },
    {
      title: "Marketing",
      url: "#",
      items: [
        { title: "Announcements", url: "/announcements" },
        { title: "Blog Sections", url: "/blog-sections" },
        { title: "Pricing", url: "/pricing" },
        { title: "Contact Sections", url: "/contact-sections" },
        { title: "CTAs", url: "/ctas" },
        { title: "Team Sections", url: "/team-sections" },
        { title: "Reviews", url: "/reviews" },
        { title: "Newsletter", url: "/newsletter" },
        { title: "FAQs", url: "/faqs" },
        { title: "Stats", url: "/stats" },
        { title: "Logo Clouds", url: "/logo-clouds" },
        { title: "Hero Sections", url: "/hero-sections" },
        { title: "Feature Sections", url: "/feature-sections" },
        { title: "Headers", url: "/headers" },
        { title: "Footers", url: "/footers" },
      ],
    },
    {
      title: "Ecommerce",
      url: "#",
      items: [
        { title: "Product Cards", url: "/product-cards" },
        { title: "Shopping Carts", url: "/shopping-carts" },
        { title: "Product Overviews", url: "/product-overviews" },
        { title: "Category Previews", url: "/category-previews" },
      ],
    },
  ],
}
</script>

<template>
  <Sidebar v-bind="props" class="bg-gray-50/50 border-r border-gray-200/60">
    <SidebarHeader class="px-6 py-4">
      <div class="flex items-center gap-2 mb-4">
    
         <span class="font-bold text-lg text-gray-900 tracking-tight">Tailwind UI Free</span>
      </div>
      <SearchForm />
    </SidebarHeader>
    <SidebarContent class="gap-0 px-2">
      <Collapsible
        v-for="item in data.navMain"
        :key="item.title"
        :title="item.title"
        default-open
        class="group/collapsible mb-4"
      >
        <SidebarGroup>
          <SidebarGroupLabel
            as-child
            class="group/label text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-4"
          >
            <CollapsibleTrigger class="flex items-center w-full">
              {{ item.title }}
              <svg class="ml-auto w-4 h-4 transition-transform group-data-[state=open]/collapsible:rotate-90 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem v-for="childItem in item.items" :key="childItem.title">
                  <SidebarMenuButton as-child :is-active="route.path === childItem.url" class="rounded-lg hover:bg-white hover:shadow-sm hover:text-indigo-600 transition-all text-gray-600 px-4 py-2">
                    <RouterLink :to="childItem.url" class="font-medium">{{ childItem.title }}</RouterLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
