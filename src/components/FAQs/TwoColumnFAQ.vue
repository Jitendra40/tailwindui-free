<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white">
  <div class="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-5">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <p class="mt-4 text-base leading-7 text-gray-600">Canâ€™t find the answer youâ€™re looking for? Reach out to our <a href="javascript:void(0)" class="font-semibold text-indigo-600 hover:text-indigo-500">customer support</a> team.</p>
      </div>
      <div class="mt-10 lg:col-span-7 lg:mt-0">
        <dl class="space-y-10">
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
</div>
`
</script>

<template>
  <PreviewWrapper title="Two Column FAQ" description="Sidebar with questions on right." :html-block="htmlBlock">
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="lg:col-span-5">
            <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <p class="mt-4 text-base leading-7 text-gray-600">Canâ€™t find the answer youâ€™re looking for? Reach out to our <a href="javascript:void(0)" class="font-semibold text-indigo-600 hover:text-indigo-500">customer support</a> team.</p>
          </div>
          <div class="mt-10 lg:col-span-7 lg:mt-0">
            <dl class="space-y-10">
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
    </div>
  </PreviewWrapper>
</template>
