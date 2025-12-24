<script lang="ts">
export const iframeHeight = "800px"
export const description = "A sidebar with collapsible sections."
</script>

<script setup lang="ts">
import AppSidebar from "@/components/Sidebar.vue"
import RightSidebar from "@/components/RightSidebar.vue"
import { computed, watch } from "vue"
import { Star } from "lucide-vue-next"
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

const releaseDate = new Date('2025-12-24')
const today = new Date()
const targetDate = new Date(releaseDate.getTime() + (30 * 24 * 60 * 60 * 1000))
const diffTime = targetDate.getTime() - today.getTime()
const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
const showBadge = daysLeft > 0

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
            <RouterLink v-if="showBadge" to="/pages" class="hidden md:flex">
             	<span class="relative inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 shadow-sm hover:bg-gray-50">
		Pages
		<span class="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-green-500 px-1.5 text-[8px] font-semibold text-white leading-none  block">NEW</span>
	</span>
            </RouterLink>
                        <RouterLink v-if="showBadge" to="/empty-states" class="hidden md:flex">
             	<span class="relative inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 shadow-sm hover:bg-gray-50">
		Empty States
		<span class="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-green-500 px-1.5 text-[8px] font-semibold text-white leading-none  block">NEW</span>
	</span>
            </RouterLink>
       
            <Button as="a" href="https://github.com/Jitendra40/tailwindui-free" target="_blank"  class="gap-2 group border-yellow-200/50 hover:border-yellow-400/60 hover:bg-black transition-all ">
              <Star class="size-3 fill-yellow-400 text-yellow-500 animate-star" />
              <span class="font-medium text-whitegroup-hover:text-gray-900">GitHub</span>
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

<style scoped>
@keyframes star-pulse {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(234, 179, 8, 0)); }
  50% { transform: scale(1.2); filter: drop-shadow(0 0 3px rgba(234, 179, 8, 0.5)); }
}
.animate-star {
  animation: star-pulse 2s ease-in-out infinite;
}
</style>
