<script setup lang="ts">
import IpoApplication from "@/components/Steps/IpoApplication.vue"
import KycVerification from "@/components/Steps/KycVerification.vue"
import LeadQualification from "@/components/Steps/LeadQualification.vue"
import SubscriptionCheckout from "@/components/Steps/SubscriptionCheckout.vue"
import JobApplication from "@/components/Steps/JobApplication.vue"
import LoanApplication from "@/components/Steps/LoanApplication.vue"
import CourseEnrollment from "@/components/Steps/CourseEnrollment.vue"
import EventRegistration from "@/components/Steps/EventRegistration.vue"
import ProductOnboarding from "@/components/Steps/ProductOnboarding.vue"
import RealEstateVisit from "@/components/Steps/RealEstateVisit.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'ipo', label: 'IPO Application' },
    { id: 'kyc', label: 'KYC Verification' },
    { id: 'lead', label: 'Lead Qualification' },
    { id: 'subscription', label: 'Subscription Checkout' },
    { id: 'job', label: 'Job Application' },
    { id: 'loan', label: 'Loan Application' },
    { id: 'course', label: 'Course Enrollment' },
    { id: 'event', label: 'Event Registration' },
    { id: 'product', label: 'Product Onboarding' },
    { id: 'real-estate', label: 'Real Estate Visit' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-foreground">Steps & Wizards</h1>
      <p class="text-muted-foreground">Progress indicators for various industry workflows.</p>
    </div>

    <div class="grid grid-cols-1 gap-12">
      <div id="ipo" class="scroll-mt-24">
        <IpoApplication />
      </div>
      <div id="kyc" class="scroll-mt-24">
        <KycVerification />
      </div>
      <div id="lead" class="scroll-mt-24">
        <LeadQualification />
      </div>
      <div id="subscription" class="scroll-mt-24">
        <SubscriptionCheckout />
      </div>
      <div id="job" class="scroll-mt-24">
        <JobApplication />
      </div>
      <div id="loan" class="scroll-mt-24">
        <LoanApplication />
      </div>
      <div id="course" class="scroll-mt-24">
        <CourseEnrollment />
      </div>
      <div id="event" class="scroll-mt-24">
        <EventRegistration />
      </div>
      <div id="product" class="scroll-mt-24">
        <ProductOnboarding />
      </div>
      <div id="real-estate" class="scroll-mt-24">
        <RealEstateVisit />
      </div>
    </div>
  </div>
</template>
