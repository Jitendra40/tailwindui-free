<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar"
import { ChevronRight } from "lucide-vue-next"
import SearchForm from "@/components/SearchForm.vue"
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

// This is sample data.
const data = {

  navMain: [
    {
      title: "Components",
      url: "#",
      items: [
        {
          title: "Button",
          url: "#",
        },
     
      ],
    },
    {
      title: "Header",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
     
      ],
    },
    {
      title: "Footer",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
       
      ],
    },
    {
      title: "Ready Website",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
      
      ],
    },
    {
      title: "Admin",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
    Tailwind UI Free
      <SearchForm />
    </SidebarHeader>
    <SidebarContent class="gap-0">
      <Collapsible
        v-for="item in data.navMain"
        :key="item.title"
        :title="item.title"
        default-open
        class="group/collapsible"
      >
        <SidebarGroup>
          <SidebarGroupLabel
            as-child
            class="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <CollapsibleTrigger>
              {{ item.title }}
              <ChevronRight class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem v-for="childItem in item.items" :key="childItem.title">
                  <SidebarMenuButton as-child :is-active="childItem.isActive">
                    <a :href="item.url">{{ childItem.title }}</a>
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
