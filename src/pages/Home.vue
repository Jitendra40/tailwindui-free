<script setup lang="ts">
import { ArrowRight, Component, Zap, Layout, Play } from 'lucide-vue-next'
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-16 py-8">
    
    <!-- Hero Section -->
    <div class="space-y-6 text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:space-y-0">
      <div class="max-w-2xl space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          v2.0 Now Available
        </div>
        
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Build <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Premium</span> Interfaces <br/> with Ease.
        </h1>
        
        <p class="text-lg text-gray-600 leading-relaxed max-w-xl">
          A collection of professionally designed, copy-paste components for building high-quality admin dashboards and web applications.
        </p>

        <div class="flex flex-wrap items-center gap-4 pt-2">
          <a href="/detail-lists" class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all bg-gray-900 rounded-lg hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center">
            Explore Components
            <ArrowRight class="w-4 h-4 ml-2" />
          </a>
           <a href="https://github.com/tailwindlabs/tailwindcss" target="_blank" class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 transition-all bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 text-center text-center">
            View on GitHub
          </a>
        </div>
      </div>

      <!-- Hero Visual -->
      <div class="hidden lg:block relative">
        <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20"></div>
        <div class="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-6 w-[400px] space-y-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
           <!-- Mock UI Elements -->
           <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                 <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Layout class="w-5 h-5" />
                 </div>
                 <div>
                    <div class="h-2.5 w-24 bg-gray-200 rounded mb-1"></div>
                    <div class="h-2 w-16 bg-gray-100 rounded"></div>
                 </div>
              </div>
              <div class="px-2 py-1 rounded bg-green-50 text-green-700 text-xs font-bold">Active</div>
           </div>
           <div class="h-px bg-gray-100"></div>
           <div class="space-y-3">
              <div class="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
                 <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div class="h-2 w-20 bg-gray-200 rounded"></div>
                 </div>
                 <div class="h-2 w-8 bg-gray-200 rounded"></div>
              </div>
               <div class="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
                 <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-purple-500"></div>
                    <div class="h-2 w-24 bg-gray-200 rounded"></div>
                 </div>
                 <div class="h-2 w-8 bg-gray-200 rounded"></div>
              </div>
           </div>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
          <Component class="w-6 h-6" />
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Modular Components</h3>
        <p class="text-sm text-gray-600 leading-relaxed">
          Independent, reusable components that drop directly into your project without complex dependencies.
        </p>
      </div>

       <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
        <div class="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
          <Zap class="w-6 h-6" />
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Modern Aesthetics</h3>
        <p class="text-sm text-gray-600 leading-relaxed">
          Designed with current trends in mind: subtle shadows, vibrant accents, and smooth animations.
        </p>
      </div>

       <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
        <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
          <Play class="w-6 h-6" />
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Interactive Demos</h3>
        <p class="text-sm text-gray-600 leading-relaxed">
          Every component includes a live preview wrapper with source code viewing and copying.
        </p>
      </div>
    </div>

  </div>
</template>
