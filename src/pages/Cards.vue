<script setup lang="ts">
import RealEstateCard from "@/components/Cards/RealEstate.vue"
import PharmaCard from "@/components/Cards/Pharma.vue"
import HRCard from "@/components/Cards/HR.vue"
import JobCard from "@/components/Cards/Job.vue"
import SalesCard from "@/components/Cards/Sales.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Cards</h1>
      <p class="text-gray-500">Niche-specific card examples for real-world applications.</p>
    </div>

    <div class="space-y-3">
      <RealEstateCard />
      <PharmaCard />
      <HRCard />
      <JobCard />
      <SalesCard />
    </div>
  </div>
</template>
