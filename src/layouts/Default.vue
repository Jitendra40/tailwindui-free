<script lang="ts">
export const iframeHeight = "800px"
export const description = "A sidebar with collapsible sections."
</script>

<script setup lang="ts">
import AppSidebar from "@/components/Sidebar.vue"
import { computed } from "vue"
import { useRoute } from "vue-router"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const route = useRoute()
const titleMap: Record<string, string> = {
  "/": "Home",
  "/badges": "Badges",
  "/accordion": "Accordion",
  "/breadcrumbs": "Breadcrumbs",
  "/buttons": "Buttons",
  "/checkboxes": "Checkboxes",
  "/detail-lists": "Detail Lists",
  "/dividers": "Dividers",
  "/dropdowns": "Dropdowns",
  "/empty-states": "Empty States",
  "/file-uploaders": "File Uploaders",
  "/filters": "Filters",
  "/inputs": "Inputs",
  "/media": "Media",
  "/pagination": "Pagination",
  "/progress-bars": "Progress Bars",
  "/radio-groups": "Radio Groups",
  "/range-input": "Range Input",
  "/selects": "Selects",
  "/skip-link": "Skip Link",
  "/stats": "Stats",
  "/steps": "Steps",
  "/tables": "Tables",
  "/textareas": "Textareas",
  "/toggles": "Toggles",
  "/menus": "Menus",
}

const pageTitle = computed(() => route.meta?.title || titleMap[route.path] || "Page")
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="bg-background sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger class="-ml-1" />
        <Separator orientation="vertical" class="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem class="hidden md:block">
              <BreadcrumbLink href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator class="hidden md:block" v-if="route.path !== '/'" />
            <BreadcrumbItem v-if="route.path !== '/'">
              <BreadcrumbPage>{{ pageTitle }}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 ">
        <main class="flex items-center justify-center p-6 w-full ">
          <section class="w-full">
            <article class="bg-white ">
              <slot />
            </article>
          </section>
        </main>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
