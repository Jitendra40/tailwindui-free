<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"


const htmlBlock = `
<div class="w-full max-w-2xl mx-auto space-y-2">
  <details class="group border-l-2 border-l-blue-500 border border-gray-200 rounded-md p-4 bg-white hover:bg-gray-50 transition-colors">
    <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
      <span class="flex items-center gap-3">
        <svg class='w-4 h-4 text-blue-500 transition-transform duration-200 group-open:rotate-90' fill='none' stroke='currentColor' stroke-width='2.5' viewBox='0 0 24 24'>
          <path stroke-linecap='round' stroke-linejoin='round' d='M9 5l7 7-7 7' />
        </svg>
        Getting Started
      </span>
    </summary>
    <p class="mt-3 ml-7 text-sm text-gray-600 leading-relaxed">Quick start guide to help you set up your account and configure basic settings in minutes.</p>
  </details>
  <details class="group border-l-2 border-l-emerald-500 border border-gray-200 rounded-md p-4 bg-white hover:bg-gray-50 transition-colors" open>
    <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
      <span class="flex items-center gap-3">
        <svg class='w-4 h-4 text-emerald-500 transition-transform duration-200 group-open:rotate-90' fill='none' stroke='currentColor' stroke-width='2.5' viewBox='0 0 24 24'>
          <path stroke-linecap='round' stroke-linejoin='round' d='M9 5l7 7-7 7' />
        </svg>
        Advanced Features
      </span>
    </summary>
    <p class="mt-3 ml-7 text-sm text-gray-600 leading-relaxed">Explore powerful automation, custom workflows, and integrations with your favorite tools.</p>
  </details>
  <details class="group border-l-2 border-l-purple-500 border border-gray-200 rounded-md p-4 bg-white hover:bg-gray-50 transition-colors">
    <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
      <span class="flex items-center gap-3">
        <svg class='w-4 h-4 text-purple-500 transition-transform duration-200 group-open:rotate-90' fill='none' stroke='currentColor' stroke-width='2.5' viewBox='0 0 24 24'>
          <path stroke-linecap='round' stroke-linejoin='round' d='M9 5l7 7-7 7' />
        </svg>
        API Documentation
      </span>
    </summary>
    <p class="mt-3 ml-7 text-sm text-gray-600 leading-relaxed">Complete REST API reference with code examples in multiple programming languages.</p>
  </details>
</div>`
</script>


<template>
    <PreviewWrapper title="Chevron Rotate Accordion"
        description="Accordion with a rotating arrow icon, similar to Shadcn/Radix." :html-block="htmlBlock"
        default-viewport="full">
        <div class="w-full max-w-2xl mx-auto space-y-2">
            <details class="group border-l-2 border-l-blue-500 border border-gray-200 rounded-md p-4 bg-white hover:bg-gray-50 transition-colors">
                <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    <span class="flex items-center gap-3">
                        <svg class='w-4 h-4 text-blue-500 transition-transform duration-200 group-open:rotate-90' fill='none' stroke='currentColor' stroke-width='2.5' viewBox='0 0 24 24'>
                            <path stroke-linecap='round' stroke-linejoin='round' d='M9 5l7 7-7 7' />
                        </svg>
                        Getting Started
                    </span>
                </summary>
                <p class="mt-3 ml-7 text-sm text-gray-600 leading-relaxed">Quick start guide to help you set up your account and configure basic settings in minutes.</p>
            </details>
            <details class="group border-l-2 border-l-emerald-500 border border-gray-200 rounded-md p-4 bg-white hover:bg-gray-50 transition-colors" open>
                <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    <span class="flex items-center gap-3">
                        <svg class='w-4 h-4 text-emerald-500 transition-transform duration-200 group-open:rotate-90' fill='none' stroke='currentColor' stroke-width='2.5' viewBox='0 0 24 24'>
                            <path stroke-linecap='round' stroke-linejoin='round' d='M9 5l7 7-7 7' />
                        </svg>
                        Advanced Features
                    </span>
                </summary>
                <p class="mt-3 ml-7 text-sm text-gray-600 leading-relaxed">Explore powerful automation, custom workflows, and integrations with your favorite tools.</p>
            </details>
            <details class="group border-l-2 border-l-purple-500 border border-gray-200 rounded-md p-4 bg-white hover:bg-gray-50 transition-colors">
                <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    <span class="flex items-center gap-3">
                        <svg class='w-4 h-4 text-purple-500 transition-transform duration-200 group-open:rotate-90' fill='none' stroke='currentColor' stroke-width='2.5' viewBox='0 0 24 24'>
                            <path stroke-linecap='round' stroke-linejoin='round' d='M9 5l7 7-7 7' />
                        </svg>
                        API Documentation
                    </span>
                </summary>
                <p class="mt-3 ml-7 text-sm text-gray-600 leading-relaxed">Complete REST API reference with code examples in multiple programming languages.</p>
            </details>
        </div>
    </PreviewWrapper>
</template>