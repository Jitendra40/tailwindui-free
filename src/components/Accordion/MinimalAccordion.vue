<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"


const htmlBlock = `
<div class="w-full max-w-2xl mx-auto space-y-1">
  <details class="group p-4">
    <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700 transition-colors">
      What payment methods do you accept?
      <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-3 text-sm text-gray-600 leading-relaxed">We accept all major credit cards, PayPal, and bank transfers for enterprise accounts.</p>
  </details>
  <details class="group p-4">
    <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700 transition-colors">
      How do I cancel my subscription?
      <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-3 text-sm text-gray-600 leading-relaxed">You can cancel your subscription anytime from your account settings. No questions asked.</p>
  </details>
  <details class="group p-4">
    <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700 transition-colors">
      Do you offer refunds?
      <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-3 text-sm text-gray-600 leading-relaxed">Yes, we offer a 30-day money-back guarantee for all new subscriptions.</p>
  </details>
</div>`
</script>


<template>
    <PreviewWrapper title="Minimal Accordion" description="Clean borderless accordion with simple chevron icon."
        :html-block="htmlBlock" default-viewport="full">
        <div class="w-full max-w-2xl mx-auto space-y-1">
            <details class="group p-4">
                <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    What payment methods do you accept?
                    <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-3 text-sm text-gray-600 leading-relaxed">We accept all major credit cards, PayPal, and bank transfers for enterprise accounts.</p>
            </details>
            <details class="group p-4">
                <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    How do I cancel my subscription?
                    <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-3 text-sm text-gray-600 leading-relaxed">You can cancel your subscription anytime from your account settings. No questions asked.</p>
            </details>
            <details class="group p-4">
                <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    Do you offer refunds?
                    <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-3 text-sm text-gray-600 leading-relaxed">Yes, we offer a 30-day money-back guarantee for all new subscriptions.</p>
            </details>
        </div>
    </PreviewWrapper>
</template>