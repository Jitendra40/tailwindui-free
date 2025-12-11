<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"


const htmlBlock = `
<div class="w-full max-w-2xl mx-auto space-y-2">
  <details class="group rounded-lg border border-gray-300 p-4 bg-gray-50 open:bg-blue-50 open:border-blue-300 transition-all duration-200">
    <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900 group-open:text-blue-900">
      Account & Billing
      <svg class='w-5 h-5 text-gray-500 group-open:text-blue-600 transition-all duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-3 text-sm text-gray-700 group-open:text-blue-800 leading-relaxed">Manage your subscription, payment methods, invoices, and billing preferences.</p>
  </details>
  <details class="group rounded-lg border border-gray-300 p-4 bg-gray-50 open:bg-emerald-50 open:border-emerald-300 transition-all duration-200" open>
    <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900 group-open:text-emerald-900">
      Security Settings
      <svg class='w-5 h-5 text-gray-500 group-open:text-emerald-600 transition-all duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-3 text-sm text-gray-700 group-open:text-emerald-800 leading-relaxed">Enable two-factor authentication, manage API keys, and review login activity.</p>
  </details>
  <details class="group rounded-lg border border-gray-300 p-4 bg-gray-50 open:bg-purple-50 open:border-purple-300 transition-all duration-200">
    <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900 group-open:text-purple-900">
      Notifications
      <svg class='w-5 h-5 text-gray-500 group-open:text-purple-600 transition-all duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-3 text-sm text-gray-700 group-open:text-purple-800 leading-relaxed">Customize email alerts, push notifications, and communication preferences.</p>
  </details>
</div>`
</script>


<template>
    <PreviewWrapper title="Filled / Highlight Accordion"
        description="Accordion with active background highlight for open state." :html-block="htmlBlock"
        default-viewport="full">
        <div class="w-full max-w-2xl mx-auto space-y-2">
            <details class="group rounded-lg border border-gray-300 p-4 bg-gray-50 open:bg-blue-50 open:border-blue-300 transition-all duration-200">
                <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900 group-open:text-blue-900">
                    Account & Billing
                    <svg class='w-5 h-5 text-gray-500 group-open:text-blue-600 transition-all duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-3 text-sm text-gray-700 group-open:text-blue-800 leading-relaxed">Manage your subscription, payment methods, invoices, and billing preferences.</p>
            </details>
            <details class="group rounded-lg border border-gray-300 p-4 bg-gray-50 open:bg-emerald-50 open:border-emerald-300 transition-all duration-200" open>
                <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900 group-open:text-emerald-900">
                    Security Settings
                    <svg class='w-5 h-5 text-gray-500 group-open:text-emerald-600 transition-all duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-3 text-sm text-gray-700 group-open:text-emerald-800 leading-relaxed">Enable two-factor authentication, manage API keys, and review login activity.</p>
            </details>
            <details class="group rounded-lg border border-gray-300 p-4 bg-gray-50 open:bg-purple-50 open:border-purple-300 transition-all duration-200">
                <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900 group-open:text-purple-900">
                    Notifications
                    <svg class='w-5 h-5 text-gray-500 group-open:text-purple-600 transition-all duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-3 text-sm text-gray-700 group-open:text-purple-800 leading-relaxed">Customize email alerts, push notifications, and communication preferences.</p>
            </details>
        </div>
    </PreviewWrapper>
</template>