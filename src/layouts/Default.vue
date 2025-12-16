<script lang="ts">
export const iframeHeight = "800px"
export const description = "A sidebar with collapsible sections."
</script>

<script setup lang="ts">
import AppSidebar from "@/components/Sidebar.vue"
import RightSidebar from "@/components/RightSidebar.vue"
import { computed, watch } from "vue"
import { useTOC } from '@/composables/useTOC'
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
import { Button } from "@/components/ui/button"

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
  "/pages": "Pages",
}

const pageTitle = computed(() => route.meta?.title || titleMap[route.path] || "Page")


const { setItems } = useTOC()

watch(() => route.path, () => {
  setItems([])
})

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
        <div class="ml-auto flex items-center gap-2">
            <Button as="a" href="https://github.com/Jitendra40/tailwindui-free" target="_blank" variant="outline" size="sm">
              
              Open in GitHub
            </Button>
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4">
        <main class="flex w-full max-w-[1600px] mx-auto items-start gap-4">
          <section class="w-full min-w-0 p-6">
            <article class="bg-white">
              <slot />
            </article>
          </section>
          <RightSidebar />
        </main>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
