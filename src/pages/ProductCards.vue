<script setup lang="ts">
import SimpleProduct from "@/components/ProductCards/SimpleProduct.vue"
import ColorSwatches from "@/components/ProductCards/ColorSwatches.vue"
import QuickViewHover from "@/components/ProductCards/QuickViewHover.vue"
import ProductListCard from "@/components/ProductCards/ProductListCard.vue"
import HorizontalItem from "@/components/ProductCards/HorizontalItem.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Product Cards</h1>
      <p class="text-gray-500">Various layouts for products in a grid or list.</p>
    </div>

    <div class="flex justify-center flex-wrap gap-10">
      <SimpleProduct />
      <ColorSwatches />
      <QuickViewHover />
      <ProductListCard />
      <HorizontalItem />
    </div>
  </div>
</template>
