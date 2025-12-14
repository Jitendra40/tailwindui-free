<script setup lang="ts">
import BasicSkipLink from "@/components/SkipLink/BasicSkipLink.vue"
import SlideSkipLink from "@/components/SkipLink/SlideSkipLink.vue"
import FixedSkipLink from "@/components/SkipLink/FixedSkipLink.vue"
import GhostSkipLink from "@/components/SkipLink/GhostSkipLink.vue"
import ButtonSkipLink from "@/components/SkipLink/ButtonSkipLink.vue"
import PreviewWrapper from "@/components/PreviewWrapper.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'basic', label: 'Basic Pop-in' },
    { id: 'slide', label: 'Full Width Slide' },
    { id: 'fixed', label: 'Fixed Position' },
    { id: 'ghost', label: 'Ghost Style' },
    { id: 'button', label: 'Center Button' },
  ])
})

const basicCode = `<div class="relative h-16 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300">
  <span class="text-sm text-gray-500 absolute">Tab into this area to see the link</span>
  <a href="#" class="absolute z-50 px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-lg outline-none focus:outline-none transition-transform duration-200 transform -translate-y-20 focus:translate-y-0">
    Skip to content
  </a>
</div>`

const slideCode = `<div class="relative h-16 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300 overflow-hidden">
  <a href="#" class="absolute top-0 left-0 w-full bg-indigo-600 text-white text-center py-2 font-medium transition-transform transform -translate-y-full focus:translate-y-0 outline-none">
    Skip to main content
  </a>
</div>`

const fixedCode = `<a href="#" class="fixed top-4 left-4 z-50 px-4 py-2 bg-white text-indigo-600 border border-indigo-600 font-medium rounded-md shadow-lg outline-none opacity-0 focus:opacity-100 pointer-events-none focus:pointer-events-auto transition-opacity">
  Skip to navigation
</a>`

const ghostCode = `<div class="relative h-16 bg-gray-800 flex items-center justify-center border border-dashed border-gray-600">
  <a href="#" class="absolute z-50 px-4 py-2 text-white font-medium rounded-md outline-none border border-white/50 bg-white/10 backdrop-blur-sm transition-opacity opacity-0 focus:opacity-100">
    Skip to footer
  </a>
</div>`

const buttonCode = `<div class="relative h-16 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300">
  <a href="#" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-xl outline-none scale-0 focus:scale-100 transition-transform duration-200">
    Jump to Content
  </a>
</div>`
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Skip Link</h1>
      <p class="text-gray-500">Accessible navigation shortcuts for screen readers and keyboard users.</p>
      <p class="text-xs text-amber-600 font-medium mt-2">Note: Click inside the dashed boxes and press TAB to reveal the links.</p>
    </div>

    <div class="grid gap-10">
      <div id="basic" class="scroll-mt-24">
        <PreviewWrapper title="Basic Pop-in" description="Drops down when focused." :html-block="basicCode">
          <BasicSkipLink />
        </PreviewWrapper>
      </div>

      <div id="slide" class="scroll-mt-24">
        <PreviewWrapper title="Full Width Slide" description="Slides down from the top." :html-block="slideCode">
          <SlideSkipLink />
        </PreviewWrapper>
      </div>

      <div id="fixed" class="scroll-mt-24">
        <PreviewWrapper title="Fixed Position" description="Appears fixed in the viewport corner (Click then Tab)." :html-block="fixedCode">
          <FixedSkipLink />
        </PreviewWrapper>
      </div>

      <div id="ghost" class="scroll-mt-24">
        <PreviewWrapper title="Ghost Style" description="Subtle style for dark backgrounds." :html-block="ghostCode">
          <GhostSkipLink />
        </PreviewWrapper>
      </div>

      <div id="button" class="scroll-mt-24">
        <PreviewWrapper title="Center Button" description="Prominent call to action style." :html-block="buttonCode">
          <ButtonSkipLink />
        </PreviewWrapper>
      </div>
    </div>
  </div>
</template>
