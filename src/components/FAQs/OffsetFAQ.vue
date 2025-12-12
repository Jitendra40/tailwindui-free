<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We’re here to help</h2>
      <p class="mt-6 text-base leading-7 text-gray-600">Have questions? We’re happy to help.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        <div>
          <dt class="text-base font-semibold leading-7 text-gray-900">How do you make holy water?</dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
        </div>
         <div>
          <dt class="text-base font-semibold leading-7 text-gray-900">What's the best thing about Switzerland?</dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
        </div>
         <div>
          <dt class="text-base font-semibold leading-7 text-gray-900">Why do you never see elephants hiding in trees?</dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Offset FAQ" description="Three column grid." :html-block="htmlBlock">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We’re here to help</h2>
          <p class="mt-6 text-base leading-7 text-gray-600">Have questions? We’re happy to help.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div>
              <dt class="text-base font-semibold leading-7 text-gray-900">How do you make holy water?</dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
            </div>
             <div>
              <dt class="text-base font-semibold leading-7 text-gray-900">What's the best thing about Switzerland?</dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
            </div>
             <div>
              <dt class="text-base font-semibold leading-7 text-gray-900">Why do you never see elephants hiding in trees?</dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
