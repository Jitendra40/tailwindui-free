<script setup lang="ts">
import SimpleProduct from "@/components/ProductCards/SimpleProduct.vue"
import ColorSwatches from "@/components/ProductCards/ColorSwatches.vue"
import QuickViewHover from "@/components/ProductCards/QuickViewHover.vue"
import ProductListCard from "@/components/ProductCards/ProductListCard.vue"
import HorizontalItem from "@/components/ProductCards/HorizontalItem.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Product' },
    { id: 'color-swatches', label: 'Color Swatches' },
    { id: 'quick-view', label: 'Quick View Hover' },
    { id: 'product-list', label: 'Product List Card' },
    { id: 'horizontal', label: 'Horizontal Item' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Product Cards</h1>
      <p class="text-gray-500">Various layouts for products in a grid or list.</p>
    </div>

    <div class="flex justify-center flex-wrap gap-10">
      <div id="simple" class="scroll-mt-24 w-full">
        <SimpleProduct />
      </div>
      <div id="color-swatches" class="scroll-mt-24 w-full">
        <ColorSwatches />
      </div>
      <div id="quick-view" class="scroll-mt-24 w-full">
        <QuickViewHover />
      </div>
      <div id="product-list" class="scroll-mt-24 w-full">
        <ProductListCard />
      </div>
      <div id="horizontal" class="scroll-mt-24 w-full">
        <HorizontalItem />
      </div>
    </div>
  </div>
</template>
