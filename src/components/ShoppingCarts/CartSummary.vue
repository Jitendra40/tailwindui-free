<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<section aria-labelledby="summary-heading" class="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
  <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

  <dl class="mt-6 space-y-4">
    <div class="flex items-center justify-between">
      <dt class="text-sm text-gray-600">Subtotal</dt>
      <dd class="text-sm font-medium text-gray-900">$99.00</dd>
    </div>
    <div class="flex items-center justify-between border-t border-gray-200 pt-4">
      <dt class="flex items-center text-sm text-gray-600">
        <span>Shipping estimate</span>
        <a href="javascript:void(0)" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
          <span class="sr-only">Learn more about how shipping is calculated</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 111.06-1.06 5.345 5.345 0 010 7.12.75.75 0 01-1.06-1.06 3.845 3.845 0 000-5zm2.44 6.44a.75.75 0 00-1.06-1.06 6.345 6.345 0 000 8.48.75.75 0 001.06-1.06 4.845 4.845 0 010-6.36z" clip-rule="evenodd" />
            <!-- Simplified Question Mark Icon -->
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 111.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </a>
      </dt>
      <dd class="text-sm font-medium text-gray-900">$5.00</dd>
    </div>
    <div class="flex items-center justify-between border-t border-gray-200 pt-4">
      <dt class="flex text-sm text-gray-600">
        <span>Tax estimate</span>
        <a href="javascript:void(0)" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
          <span class="sr-only">Learn more about how tax is calculated</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 111.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </a>
      </dt>
      <dd class="text-sm font-medium text-gray-900">$8.32</dd>
    </div>
    <div class="flex items-center justify-between border-t border-gray-200 pt-4">
      <dt class="text-base font-medium text-gray-900">Order total</dt>
      <dd class="text-base font-medium text-gray-900">$112.32</dd>
    </div>
  </dl>

  <div class="mt-6">
    <button type="submit" class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>
  </div>
</section>
`
</script>

<template>
  <PreviewWrapper title="Cart Summary" description="Order summary box with calculations." :html-block="htmlBlock">
    <div class="max-w-md mx-auto">
      <section aria-labelledby="summary-heading" class="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

        <dl class="mt-6 space-y-4">
          <div class="flex items-center justify-between">
            <dt class="text-sm text-gray-600">Subtotal</dt>
            <dd class="text-sm font-medium text-gray-900">$99.00</dd>
          </div>
          <div class="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt class="flex items-center text-sm text-gray-600">
              <span>Shipping estimate</span>
              <a href="javascript:void(0)" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Learn more about how shipping is calculated</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 111.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </dt>
            <dd class="text-sm font-medium text-gray-900">$5.00</dd>
          </div>
          <div class="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt class="flex text-sm text-gray-600">
              <span>Tax estimate</span>
              <a href="javascript:void(0)" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Learn more about how tax is calculated</span>
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 111.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </dt>
            <dd class="text-sm font-medium text-gray-900">$8.32</dd>
          </div>
          <div class="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt class="text-base font-medium text-gray-900">Order total</dt>
            <dd class="text-base font-medium text-gray-900">$112.32</dd>
          </div>
        </dl>

        <div class="mt-6">
          <button type="submit" class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>
        </div>
      </section>
    </div>
  </PreviewWrapper>
</template>
