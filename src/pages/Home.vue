<script setup lang="ts">
import { ArrowRight, Component, Zap, Play } from 'lucide-vue-next'
</script>

<template>
  <div class="max-w-4xl mx-auto py-20 text-center space-y-12">
    
    <!-- Hero Section -->
    <div class="space-y-6">
      <h1 class="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
        Just <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">copy & paste</span> <br/> Tailwind CSS.
      </h1>
      
      <p class="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
        <a href="/inputs" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-gray-900 rounded-lg hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
          Get Started
          <ArrowRight class="w-5 h-5 ml-2" />
        </a>
         <a href="https://tailwindcss.com/docs/installation" target="_blank" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 transition-all bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300">
          Documentation
        </a>
      </div>
    </div>

    <!-- Simple Features (Optional, keeping it very high level as per request to remove details) -->
    <div class="pt-12 border-t border-gray-100">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div class="space-y-3">
             <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <Component class="w-5 h-5" />
             </div>
             <h3 class="font-bold text-gray-900">Modular Components</h3>
             <p class="text-sm text-gray-600">Independent, reusable components that drop directly into your project.</p>
          </div>
           <div class="space-y-3">
             <div class="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <Zap class="w-5 h-5" />
             </div>
             <h3 class="font-bold text-gray-900">Modern Aesthetics</h3>
             <p class="text-sm text-gray-600">Designed with modern trends: subtle shadows and vibrant accents.</p>
          </div>
           <div class="space-y-3">
             <div class="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Play class="w-5 h-5" />
             </div>
             <h3 class="font-bold text-gray-900">Interactive Demos</h3>
             <p class="text-sm text-gray-600">Live preview wrappers with instant source code copying.</p>
          </div>
      </div>
    </div>

  </div>
</template>
