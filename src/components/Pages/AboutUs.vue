<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
    <p class="text-base font-semibold leading-7 text-indigo-600">Get the help you need</p>
    <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Support center</h2>
    <p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
  </div>
</div>
`;
</script>

<template>
  <PreviewWrapper
    title="About Us Hero"
    description="A simple hero section for an About Us page."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-base font-semibold leading-7 text-indigo-600">Get the help you need</p>
        <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Support center</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
      </div>
    </div>
  </PreviewWrapper>
</template>
