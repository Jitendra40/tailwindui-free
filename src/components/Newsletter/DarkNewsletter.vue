<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-indigo-700 py-16 sm:py-24 lg:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
     <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div class="max-w-xl lg:max-w-lg">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter</h2>
            <p class="mt-4 text-lg leading-8 text-indigo-200">Non laboris consequat cupidatat laborum magna. Eiusmod quis culpa. Nulla veniam reprehenderit nisi officia voluptate incididunt.</p>
        </div>
        <div class="flex flex-col justify-center">
            <form class="max-w-md w-full flex gap-x-4">
                 <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email">
                <button type="submit" class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Subscribe</button>
            </form>
            <p class="mt-4 text-sm leading-6 text-indigo-200">We care about your data. Read our <a href="#" class="font-semibold text-white">privacy policy</a>.</p>
        </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Dark Newsletter" description="Newsletter with branded background." :html-block="htmlBlock">
    <div class="bg-indigo-700 py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
         <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div class="max-w-xl lg:max-w-lg">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter</h2>
                <p class="mt-4 text-lg leading-8 text-indigo-200">Non laboris consequat cupidatat laborum magna. Eiusmod quis culpa. Nulla veniam reprehenderit nisi officia voluptate incididunt.</p>
            </div>
            <div class="flex flex-col justify-center">
                <form class="max-w-md w-full flex gap-x-4">
                     <label for="email-address" class="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email">
                    <button type="submit" class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Subscribe</button>
                </form>
                <p class="mt-4 text-sm leading-6 text-indigo-200">We care about your data. Read our <a href="#" class="font-semibold text-white">privacy policy</a>.</p>
            </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
