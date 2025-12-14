<script setup lang="ts">
import { useTOC } from '@/composables/useTOC'
import { onUnmounted, watch, nextTick } from 'vue'

const { items, activeId, setActiveId } = useTOC()

let observer: IntersectionObserver | null = null

const setupObserver = () => {
  if (observer) observer.disconnect()
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id)
      }
    })
  }, {
    rootMargin: '-20% 0px -50% 0px',
    threshold: 0.1
  })

  items.value.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) observer?.observe(el)
  })
}

// Watch for items changing (page navigation)
watch(items, () => {
  nextTick(() => {
    setupObserver()
  })
}, { deep: true, immediate: true }) // immediate true might miss DOM elements if they aren't mounted yet? 
// No, items are set in onMounted of the page, so by the time watch triggers, page DOM should be largely there, but nextTick is safe.

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const scrollToSection = (e: Event, id: string) => {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) {
    // Offset for fixed header
    const headerOffset = 80
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
    setActiveId(id)
  }
}
</script>

<template>
  <aside v-if="items.length > 0" class="hidden xl:block w-64 shrink-0 border-l border-zinc-200 pl-6 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
    <h3 class="font-semibold text-sm text-zinc-900 mb-4">On this page</h3>
    <nav class="flex flex-col space-y-3">
      <a 
        v-for="item in items" 
        :key="item.id" 
        :href="`#${item.id}`"
        @click="scrollToSection($event, item.id)"
        class="text-sm transition-colors duration-200 hover:text-indigo-600 block border-l-2 pl-3 -ml-px"
        :class="activeId === item.id ? 'border-indigo-600 text-indigo-600 font-medium' : 'border-transparent text-zinc-500'"
      >
        {{ item.label }}
      </a>
    </nav>
  </aside>
</template>
