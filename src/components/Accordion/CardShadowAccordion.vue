<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"


const htmlBlock = `
<div class="w-full max-w-2xl mx-auto space-y-3">
  <details class="group rounded-lg shadow-sm p-5 border border-gray-200 bg-white hover:shadow transition-shadow">
    <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900">
      Enterprise Features
      <svg class='w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-4 text-sm text-gray-600 leading-relaxed">Advanced security, SSO, custom integrations, dedicated support, and SLA guarantees for large teams.</p>
  </details>
  <details class="group rounded-lg shadow-sm p-5 border border-gray-200 bg-white hover:shadow transition-shadow" open>
    <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900">
      Team Collaboration
      <svg class='w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-4 text-sm text-gray-600 leading-relaxed">Real-time collaboration, comments, mentions, and activity feeds to keep your team in sync.</p>
  </details>
  <details class="group rounded-lg shadow-sm p-5 border border-gray-200 bg-white hover:shadow transition-shadow">
    <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900">
      Analytics & Reporting
      <svg class='w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-4 text-sm text-gray-600 leading-relaxed">Comprehensive dashboards, custom reports, and data export capabilities for business intelligence.</p>
  </details>
</div>`
</script>


<template>
    <PreviewWrapper title="Card Shadow Accordion" description="Soft card accordion with rounded corners and shadow."
        :html-block="htmlBlock" default-viewport="full">
        <div class="w-full max-w-2xl mx-auto space-y-3">
            <details class="group rounded-lg shadow-sm p-5 border border-gray-200 bg-white hover:shadow transition-shadow">
                <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900">
                    Enterprise Features
                    <svg class='w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-4 text-sm text-gray-600 leading-relaxed">Advanced security, SSO, custom integrations, dedicated support, and SLA guarantees for large teams.</p>
            </details>
            <details class="group rounded-lg shadow-sm p-5 border border-gray-200 bg-white hover:shadow transition-shadow" open>
                <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900">
                    Team Collaboration
                    <svg class='w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-4 text-sm text-gray-600 leading-relaxed">Real-time collaboration, comments, mentions, and activity feeds to keep your team in sync.</p>
            </details>
            <details class="group rounded-lg shadow-sm p-5 border border-gray-200 bg-white hover:shadow transition-shadow">
                <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900">
                    Analytics & Reporting
                    <svg class='w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-4 text-sm text-gray-600 leading-relaxed">Comprehensive dashboards, custom reports, and data export capabilities for business intelligence.</p>
            </details>
        </div>
    </PreviewWrapper>
</template>