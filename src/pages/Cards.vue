<script setup lang="ts">
import RealEstateCard from "@/components/Cards/RealEstate.vue"
import PharmaCard from "@/components/Cards/Pharma.vue"
import HRCard from "@/components/Cards/HR.vue"
import JobCard from "@/components/Cards/Job.vue"
import SalesCard from "@/components/Cards/Sales.vue"
import FinanceIPOCard from "@/components/Cards/FinanceIPOCard.vue"
import CRMLeadCard from "@/components/Cards/CRMLeadCard.vue"
import SiteVisitCard from "@/components/Cards/SiteVisitCard.vue"
import EcommerceProductCard from "@/components/Cards/EcommerceProductCard.vue"
import EducationCourseCard from "@/components/Cards/EducationCourseCard.vue"
import ContentVideoCard from "@/components/Cards/ContentVideoCard.vue"
import AdminUserCard from "@/components/Cards/AdminUserCard.vue"
import AIModelCard from "@/components/Cards/AIModelCard.vue"
import SecurityAlertCard from "@/components/Cards/SecurityAlertCard.vue"

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
    { id: 'finance', label: 'Finance: IPO' },
    { id: 'crm', label: 'CRM: Lead' },
    { id: 'visit', label: 'Real Estate: Visit' },
    { id: 'product', label: 'E-Commerce: Product' },
    { id: 'course', label: 'Education: Course' },
    { id: 'video', label: 'Content: Video' },
    { id: 'admin', label: 'Admin: User' },
    { id: 'ai', label: 'AI: Model' },
    { id: 'security', label: 'Security: Alert' },
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
      <div id="finance" class="scroll-mt-24">
        <FinanceIPOCard />
      </div>
      <div id="crm" class="scroll-mt-24">
        <CRMLeadCard />
      </div>
      <div id="visit" class="scroll-mt-24">
        <SiteVisitCard />
      </div>
      <div id="product" class="scroll-mt-24">
        <EcommerceProductCard />
      </div>
      <div id="course" class="scroll-mt-24">
        <EducationCourseCard />
      </div>
      <div id="video" class="scroll-mt-24">
        <ContentVideoCard />
      </div>
      <div id="admin" class="scroll-mt-24">
        <AdminUserCard />
      </div>
      <div id="ai" class="scroll-mt-24">
        <AIModelCard />
      </div>
      <div id="security" class="scroll-mt-24">
        <SecurityAlertCard />
      </div>
    </div>
  </div>
</template>
