<script setup lang="ts">
import { computed } from 'vue'
import { navigationData } from '@/lib/navigation'
import { Check, ChevronRight } from 'lucide-vue-next'

const componentFiles = import.meta.glob('../components/**/*.vue')

const getComponentCount = (path: string) => {
  if (!path) return 0
  const folderName = path.substring(1).split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')
  
  // Count files that are in the specific component folder
  // case-insensitive check to handle CTAs vs Ctas vs ctas
  const count = Object.keys(componentFiles).filter(file => {
    return file.toLowerCase().includes(`/components/${folderName.toLowerCase()}/`)
  }).length

  return count || 0
}

const categories = computed(() => {
  return navigationData.flatMap(group => group.items).sort((a, b) => a.name.localeCompare(b.name))
})

</script>

<template>
  
  <div class="max-w-[1400px] mx-auto">
    <div class="relative overflow-hidden rounded-2xl bg-slate-950 py-10 text-center lg:py-16 shadow-2xl isolate ring-1 ring-white/10 mb-8">
      
      <!-- Techy Grid Background -->
      <div class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <!-- Gradient Glows -->
      <div class="absolute top-0 left-0 -z-10 h-64 w-64 bg-indigo-500/20 blur-[100px]"></div>
      <div class="absolute bottom-0 right-0 -z-10 h-64 w-64 bg-fuchsia-500/20 blur-[100px]"></div>
      
      <div class="mx-auto max-w-4xl px-6 relative z-10 space-y-6">
        <div class="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300 backdrop-blur-sm mb-4">
           <span class="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
           v4.0 Ready
        </div>

        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-tight">
          Free Open Source <br/> 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">Tailwind CSS v4 Components</span>
        </h1>
        
        <p class="mx-auto max-w-2xl text-base text-gray-400 leading-relaxed">
          A collection of free, copy-paste Tailwind CSS components for building modern web applications. From marketing pages to admin dashboards, find ready-to-use UI components that speed up your development. No installation required.
        </p>
        
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-4">
          <div class="flex items-center gap-2 text-sm font-semibold text-white">
            <div class="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 ring-1 ring-green-500/50 text-green-400">
              <Check class="h-3.5 w-3.5" />
            </div>
            No config
          </div>
          <div class="flex items-center gap-2 text-sm font-semibold text-white">
            <div class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 ring-1 ring-blue-500/50 text-blue-400">
              <Check class="h-3.5 w-3.5" />
            </div>
            No install
          </div>
          <div class="flex items-center gap-2 text-sm font-semibold text-white">
            <div class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 ring-1 ring-purple-500/50 text-purple-400">
              <Check class="h-3.5 w-3.5" />
            </div>
            No setup
          </div>
        </div>


      </div>
    </div>
    
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <RouterLink 
        v-for="category in categories" 
        :key="category.name"
        :to="category.href"
        class="group relative flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gray-300 hover:shadow-md hover:-translate-y-1"
      >
        <div class="flex items-start justify-between">
           <div class="flex flex-col">
              <span class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-transform group-hover:scale-110" :class="category.bg">
                <component :is="category.icon" class="h-6 w-6" :class="category.color" />
              </span>
              <h3 class="font-semibold text-gray-900 text-lg">{{ category.name }}</h3>
           </div>
        </div>
        
        <div class="mt-2 flex items-center justify-between">
          <p class="text-sm text-gray-500 font-medium">{{ getComponentCount(category.href) }} variants</p>
          <ChevronRight class="h-5 w-5 text-gray-300 transition-colors group-hover:text-gray-900" />
        </div>
      </RouterLink>
    </div>
  </div>
</template>
