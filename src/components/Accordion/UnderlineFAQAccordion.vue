<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"


const htmlBlock = `
<div class="w-full max-w-2xl mx-auto divide-y divide-gray-200 border-b border-gray-200">
  <details class="group py-5">
    <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700">
      How long does shipping take?
      <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-4 text-sm text-gray-600 leading-relaxed">Standard shipping takes 3-5 business days. Express options available at checkout.</p>
  </details>
  <details class="group py-5" open>
    <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700">
      What is your return policy?
      <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-4 text-sm text-gray-600 leading-relaxed">We accept returns within 60 days of purchase for a full refund. Items must be unused and in original packaging.</p>
  </details>
  <details class="group py-5">
    <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700">
      Do you ship internationally?
      <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </summary>
    <p class="mt-4 text-sm text-gray-600 leading-relaxed">Yes, we ship to over 100 countries worldwide. Rates and delivery times vary by location.</p>
  </details>
</div>`
</script>


<template>
    <PreviewWrapper title="Underline / FAQ Accordion"
        description="Accordion with separated sections using underline style." :html-block="htmlBlock"
        default-viewport="full">
        <div class="w-full max-w-2xl mx-auto divide-y divide-gray-200 border-b border-gray-200">
            <details class="group py-5">
                <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700">
                    How long does shipping take?
                    <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-4 text-sm text-gray-600 leading-relaxed">Standard shipping takes 3-5 business days. Express options available at checkout.</p>
            </details>
            <details class="group py-5" open>
                <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700">
                    What is your return policy?
                    <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-4 text-sm text-gray-600 leading-relaxed">We accept returns within 60 days of purchase for a full refund. Items must be unused and in original packaging.</p>
            </details>
            <details class="group py-5">
                <summary class="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900 hover:text-gray-700">
                    Do you ship internationally?
                    <svg class='w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                </summary>
                <p class="mt-4 text-sm text-gray-600 leading-relaxed">Yes, we ship to over 100 countries worldwide. Rates and delivery times vary by location.</p>
            </details>
        </div>
    </PreviewWrapper>
</template>