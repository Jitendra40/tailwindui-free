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
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-foreground">Steps & Wizards</h1>
      <p class="text-muted-foreground">Progress indicators for various industry workflows.</p>
    </div>

    <div class="grid grid-cols-1 gap-12">
      <IpoApplication />
      <KycVerification />
      <LeadQualification />
      <SubscriptionCheckout />
      <JobApplication />
      <LoanApplication />
      <CourseEnrollment />
      <EventRegistration />
      <ProductOnboarding />
      <RealEstateVisit />
    </div>
  </div>
</template>
