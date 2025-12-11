<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="max-w-2xl mx-auto space-y-3">
  <details class="group rounded-xl border border-gray-200 bg-white shadow-sm open:ring-1 open:ring-blue-500/20 transition-all">
    <summary class="flex cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-900 marker:hidden">
      <span>How does the free trial work?</span>
      <span class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-500 transition-all group-hover:bg-gray-100 group-open:bg-blue-600 group-open:text-white group-open:rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </summary>
    <div class="px-4 pb-4 pt-1">
      <p class="text-sm text-gray-600 leading-relaxed">You get 14 days of full access to all features. No credit card required. At the end of the trial, you can choose a plan or stay on the free tier.</p>
    </div>
  </details>

  <details class="group rounded-xl border border-gray-200 bg-white shadow-sm open:ring-1 open:ring-blue-500/20 transition-all" open>
    <summary class="flex cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-900 marker:hidden">
      <span>Can I change plans later?</span>
      <span class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-500 transition-all group-hover:bg-gray-100 group-open:bg-blue-600 group-open:text-white group-open:rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </summary>
    <div class="px-4 pb-4 pt-1">
      <p class="text-sm text-gray-600 leading-relaxed">Yes, you can upgrade or downgrade your plan at any time from your account settings. Prorated charges will apply immediately.</p>
      <div class="mt-3 flex gap-3">
        <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-700">View pricing</a>
        <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-700">Contact sales</a>
      </div>
    </div>
  </details>
  
  <details class="group rounded-xl border border-gray-200 bg-white shadow-sm open:ring-1 open:ring-blue-500/20 transition-all">
    <summary class="flex cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-900 marker:hidden">
      <span>Is my data secure?</span>
      <span class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-500 transition-all group-hover:bg-gray-100 group-open:bg-blue-600 group-open:text-white group-open:rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </summary>
    <div class="px-4 pb-4 pt-1">
      <p class="text-sm text-gray-600 leading-relaxed">We use industry-standard encryption for data in transit and at rest. We are SOC 2 compliant.</p>
    </div>
  </details>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Standard Accordion"
    description="Clean, bordered accordion with circular toggle indicators."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="max-w-2xl mx-auto space-y-3">
      <details class="group rounded-xl border border-gray-200 bg-white shadow-sm open:ring-1 open:ring-blue-500/20 transition-all">
        <summary class="flex cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-900 marker:hidden">
          <span>How does the free trial work?</span>
          <span class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-500 transition-all group-hover:bg-gray-100 group-open:bg-blue-600 group-open:text-white group-open:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </summary>
        <div class="px-4 pb-4 pt-1">
          <p class="text-sm text-gray-600 leading-relaxed">You get 14 days of full access to all features. No credit card required. At the end of the trial, you can choose a plan or stay on the free tier.</p>
        </div>
      </details>
    
      <details class="group rounded-xl border border-gray-200 bg-white shadow-sm open:ring-1 open:ring-blue-500/20 transition-all" open>
        <summary class="flex cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-900 marker:hidden">
          <span>Can I change plans later?</span>
          <span class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-500 transition-all group-hover:bg-gray-100 group-open:bg-blue-600 group-open:text-white group-open:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </summary>
        <div class="px-4 pb-4 pt-1">
          <p class="text-sm text-gray-600 leading-relaxed">Yes, you can upgrade or downgrade your plan at any time from your account settings. Prorated charges will apply immediately.</p>
          <div class="mt-3 flex gap-3">
            <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-700">View pricing</a>
            <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-700">Contact sales</a>
          </div>
        </div>
      </details>
      
      <details class="group rounded-xl border border-gray-200 bg-white shadow-sm open:ring-1 open:ring-blue-500/20 transition-all">
        <summary class="flex cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-900 marker:hidden">
          <span>Is my data secure?</span>
          <span class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-500 transition-all group-hover:bg-gray-100 group-open:bg-blue-600 group-open:text-white group-open:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </summary>
        <div class="px-4 pb-4 pt-1">
          <p class="text-sm text-gray-600 leading-relaxed">We use industry-standard encryption for data in transit and at rest. We are SOC 2 compliant.</p>
        </div>
      </details>
    </div>
  </PreviewWrapper>
</template>
