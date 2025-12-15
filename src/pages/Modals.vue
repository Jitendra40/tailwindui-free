<script setup lang="ts">
import SimpleModal from "@/components/Modals/SimpleModal.vue"
import DestructiveModal from "@/components/Modals/DestructiveModal.vue"
import FormModal from "@/components/Modals/FormModal.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Modal' },
    { id: 'destructive', label: 'Destructive Modal' },
    { id: 'form', label: 'Form Modal' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Modals</h1>
      <p class="text-gray-500">Dialog windows that interrupt the workflow to focus on a distinct tasks.</p>
    </div>

    <div class="space-y-8">
      <div id="simple" class="scroll-mt-24">
        <SimpleModal />
      </div>
      <div id="destructive" class="scroll-mt-24">
        <DestructiveModal />
      </div>
      <div id="form" class="scroll-mt-24">
        <FormModal />
      </div>
    </div>
  </div>
</template>
