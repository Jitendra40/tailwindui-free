<script setup lang="ts">
import CartDropdown from "@/components/ShoppingCarts/CartDropdown.vue"
import SlideOver from "@/components/ShoppingCarts/SlideOver.vue"
import FullPageCart from "@/components/ShoppingCarts/FullPageCart.vue"
import CartSummary from "@/components/ShoppingCarts/CartSummary.vue"
import EmptyCart from "@/components/ShoppingCarts/EmptyCart.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Shopping Carts</h1>
      <p class="text-gray-500">Cart pages, sidebars, and dropdowns.</p>
    </div>

    <div class="grid gap-10">
      <CartDropdown />
      <SlideOver />
      <div class="border rounded-lg overflow-hidden">
         <FullPageCart />
      </div>
      <CartSummary />
      <EmptyCart />
    </div>
  </div>
</template>
