<script setup lang="ts">
import RealEstateCard from "@/components/Cards/RealEstate.vue"
import PharmaCard from "@/components/Cards/Pharma.vue"
import HRCard from "@/components/Cards/HR.vue"
import JobCard from "@/components/Cards/Job.vue"
import SalesCard from "@/components/Cards/Sales.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'pharma', label: 'Pharma' },
    { id: 'hr', label: 'HR' },
    { id: 'job', label: 'Job' },
    { id: 'sales', label: 'Sales' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Cards</h1>
      <p class="text-gray-500">Niche-specific card examples for real-world applications.</p>
    </div>

    <div class="space-y-8">
      <div id="real-estate" class="scroll-mt-24">
        <RealEstateCard />
      </div>
      <div id="pharma" class="scroll-mt-24">
        <PharmaCard />
      </div>
      <div id="hr" class="scroll-mt-24">
        <HRCard />
      </div>
      <div id="job" class="scroll-mt-24">
        <JobCard />
      </div>
      <div id="sales" class="scroll-mt-24">
        <SalesCard />
      </div>
    </div>
  </div>
</template>
