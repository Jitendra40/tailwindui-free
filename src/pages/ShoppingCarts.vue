<script setup lang="ts">
import CartDropdown from "@/components/ShoppingCarts/CartDropdown.vue"
import SlideOver from "@/components/ShoppingCarts/SlideOver.vue"
import FullPageCart from "@/components/ShoppingCarts/FullPageCart.vue"
import CartSummary from "@/components/ShoppingCarts/CartSummary.vue"
import EmptyCart from "@/components/ShoppingCarts/EmptyCart.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'dropdown', label: 'Cart Dropdown' },
    { id: 'slide-over', label: 'Slide Over' },
    { id: 'full-page', label: 'Full Page Cart' },
    { id: 'summary', label: 'Cart Summary' },
    { id: 'empty', label: 'Empty Cart' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Shopping Carts</h1>
      <p class="text-gray-500">Cart pages, sidebars, and dropdowns.</p>
    </div>

    <div class="grid gap-10">
      <div id="dropdown" class="scroll-mt-24">
        <CartDropdown />
      </div>
      <div id="slide-over" class="scroll-mt-24">
        <SlideOver />
      </div>
      <div id="full-page" class="scroll-mt-24 border rounded-lg overflow-hidden">
         <FullPageCart />
      </div>
      <div id="summary" class="scroll-mt-24">
        <CartSummary />
      </div>
      <div id="empty" class="scroll-mt-24">
        <EmptyCart />
      </div>
    </div>
  </div>
</template>
