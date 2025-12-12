<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<section class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">Testimonials</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We have worked with thousands of amazing people</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <!-- Review 1 -->
        <div class="flex flex-col gap-y-4 rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
            <figcaption class="flex items-center gap-x-6">
                <img class="h-14 w-14 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <div class="text-base">
                <div class="font-semibold text-gray-900">Leslie Alexander</div>
                <div class="mt-1 text-gray-500">CEO of Workcation</div>
                </div>
            </figcaption>
             <blockquote class="text-gray-900 leading-7 text-sm">
                <p>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”</p>
             </blockquote>
        </div>
         <!-- Review 2 -->
        <div class="flex flex-col gap-y-4 rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
            <figcaption class="flex items-center gap-x-6">
                <img class="h-14 w-14 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <div class="text-base">
                <div class="font-semibold text-gray-900">Lindsay Walton</div>
                <div class="mt-1 text-gray-500">Designer of Dribble</div>
                </div>
            </figcaption>
             <blockquote class="text-gray-900 leading-7 text-sm">
                <p>“Voluptas numquam delectus nihil. Aut enim doloremque et ipsam. Laborum quis quam. Dolorum et ut quod quia.”</p>
             </blockquote>
        </div>
      </dl>
    </div>
  </div>
</section>
`
</script>

<template>
  <PreviewWrapper title="Grid Reviews" description="Grid of detailed reviews." :html-block="htmlBlock">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Testimonials</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We have worked with thousands of amazing people</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <!-- Review 1 -->
            <div class="flex flex-col gap-y-4 rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
                <figcaption class="flex items-center gap-x-6">
                    <img class="h-14 w-14 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    <div class="text-base">
                    <div class="font-semibold text-gray-900">Leslie Alexander</div>
                    <div class="mt-1 text-gray-500">CEO of Workcation</div>
                    </div>
                </figcaption>
                 <blockquote class="text-gray-900 leading-7 text-sm">
                    <p>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”</p>
                 </blockquote>
            </div>
             <!-- Review 2 -->
            <div class="flex flex-col gap-y-4 rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
                <figcaption class="flex items-center gap-x-6">
                    <img class="h-14 w-14 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    <div class="text-base">
                    <div class="font-semibold text-gray-900">Lindsay Walton</div>
                    <div class="mt-1 text-gray-500">Designer of Dribble</div>
                    </div>
                </figcaption>
                 <blockquote class="text-gray-900 leading-7 text-sm">
                    <p>“Voluptas numquam delectus nihil. Aut enim doloremque et ipsam. Laborum quis quam. Dolorum et ut quod quia.”</p>
                 </blockquote>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
