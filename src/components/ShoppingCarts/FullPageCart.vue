<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
    <h1 class="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
    <form class="mt-12">
      <section aria-labelledby="cart-heading">
        <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>
        <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
            <!-- Item 1 -->
            <li class="flex py-6">
              <div class="flex-shrink-0 border border-gray-200 rounded-md bg-gray-100 flex items-center justify-center h-24 w-24 text-gray-400">
                  <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">
                        <a href="#" class="font-medium text-gray-700 hover:text-gray-800">Basic Tee</a>
                      </h3>
                    </div>
                    <div class="mt-1 flex text-sm">
                      <p class="text-gray-500">Sienna</p>
                      <p class="ml-4 border-l border-gray-200 pl-4 text-gray-500">Large</p>
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-900">$32.00</p>
                  </div>
                  <div class="mt-4 sm:mt-0 sm:pr-9">
                    <label for="quantity-0" class="sr-only">Quantity, Basic Tee</label>
                    <select id="quantity-0" name="quantity-0" class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                    <div class="absolute right-0 top-0">
                      <button type="button" class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Remove</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
        </ul>
      </section>

      <!-- Order summary -->
      <section aria-labelledby="summary-heading" class="mt-10">
        <h2 id="summary-heading" class="sr-only">Order summary</h2>
        <div>
          <dl class="space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-base font-medium text-gray-900">Subtotal</dt>
              <dd class="ml-4 text-base font-medium text-gray-900">$32.00</dd>
            </div>
          </dl>
          <p class="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
        </div>
        <div class="mt-10">
          <button type="submit" class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>
        </div>
        <div class="mt-6 text-center text-sm text-gray-500">
          <p>
            or
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </section>
    </form>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Full Page Cart" description="Detailed cart page layout." :html-block="htmlBlock">
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 class="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
        <form class="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>
            <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
                <!-- Item 1 -->
                <li class="flex py-6">
                  <div class="flex-shrink-0 border border-gray-200 rounded-md bg-gray-100 flex items-center justify-center h-24 w-24 text-gray-400">
                      <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div class="flex justify-between">
                          <h3 class="text-sm">
                            <a href="#" class="font-medium text-gray-700 hover:text-gray-800">Basic Tee</a>
                          </h3>
                        </div>
                        <div class="mt-1 flex text-sm">
                          <p class="text-gray-500">Sienna</p>
                          <p class="ml-4 border-l border-gray-200 pl-4 text-gray-500">Large</p>
                        </div>
                        <p class="mt-1 text-sm font-medium text-gray-900">$32.00</p>
                      </div>
                      <div class="mt-4 sm:mt-0 sm:pr-9">
                        <label for="quantity-0" class="sr-only">Quantity, Basic Tee</label>
                        <select id="quantity-0" name="quantity-0" class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div class="absolute right-0 top-0">
                          <button type="button" class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Remove</span>
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
            </ul>
          </section>

          <!-- Order summary -->
          <section aria-labelledby="summary-heading" class="mt-10">
            <h2 id="summary-heading" class="sr-only">Order summary</h2>
            <div>
              <dl class="space-y-4">
                <div class="flex items-center justify-between">
                  <dt class="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd class="ml-4 text-base font-medium text-gray-900">$32.00</dd>
                </div>
              </dl>
              <p class="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
            </div>
            <div class="mt-10">
              <button type="submit" class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>
            </div>
            <div class="mt-6 text-center text-sm text-gray-500">
              <p>
                or
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  </PreviewWrapper>
</template>
