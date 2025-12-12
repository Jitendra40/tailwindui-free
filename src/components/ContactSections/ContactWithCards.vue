<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Support</h2>
    <p class="mt-2 text-lg leading-8 text-gray-600">Get help with your account, billing, or technical issues.</p>
  </div>
  <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    <div class="flex gap-x-6 rounded-2xl p-8 ring-1 ring-gray-200">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        </div>
        <div>
            <h3 class="text-base font-semibold leading-7 text-gray-900">Sales</h3>
            <p class="mt-2 leading-7 text-gray-600">Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.</p>
            <p class="mt-4">
                <a href="#" class="text-sm font-semibold leading-6 text-indigo-600">Contact sales <span aria-hidden="true">&rarr;</span></a>
            </p>
        </div>
    </div>
    <div class="flex gap-x-6 rounded-2xl p-8 ring-1 ring-gray-200">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>
        </div>
        <div>
            <h3 class="text-base font-semibold leading-7 text-gray-900">Technical Support</h3>
            <p class="mt-2 leading-7 text-gray-600">Quod cupiditate ad. Voluptas omnis at. Quia quo sit quam. Doloremque rem omnis.</p>
            <p class="mt-4">
                <a href="#" class="text-sm font-semibold leading-6 text-indigo-600">Get support <span aria-hidden="true">&rarr;</span></a>
            </p>
        </div>
    </div>
    <div class="flex gap-x-6 rounded-2xl p-8 ring-1 ring-gray-200">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        </div>
        <div>
            <h3 class="text-base font-semibold leading-7 text-gray-900">Media Inquiries</h3>
            <p class="mt-2 leading-7 text-gray-600">Eos cumque aut. Voluptatem cumque sit. Ut ut tamen amet reiciendis.</p>
            <p class="mt-4">
                <a href="#" class="text-sm font-semibold leading-6 text-indigo-600">Contact media <span aria-hidden="true">&rarr;</span></a>
            </p>
        </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Contact Cards" description="Grid of contact options." :html-block="htmlBlock">
    <div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Support</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Get help with your account, billing, or technical issues.</p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div class="flex gap-x-6 rounded-2xl p-8 ring-1 ring-gray-200">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </div>
            <div>
                <h3 class="text-base font-semibold leading-7 text-gray-900">Sales</h3>
                <p class="mt-2 leading-7 text-gray-600">Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.</p>
                <p class="mt-4">
                    <a href="#" class="text-sm font-semibold leading-6 text-indigo-600">Contact sales <span aria-hidden="true">&rarr;</span></a>
                </p>
            </div>
        </div>
        <div class="flex gap-x-6 rounded-2xl p-8 ring-1 ring-gray-200">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                </svg>
            </div>
            <div>
                <h3 class="text-base font-semibold leading-7 text-gray-900">Technical Support</h3>
                <p class="mt-2 leading-7 text-gray-600">Quod cupiditate ad. Voluptas omnis at. Quia quo sit quam. Doloremque rem omnis.</p>
                <p class="mt-4">
                    <a href="#" class="text-sm font-semibold leading-6 text-indigo-600">Get support <span aria-hidden="true">&rarr;</span></a>
                </p>
            </div>
        </div>
        <div class="flex gap-x-6 rounded-2xl p-8 ring-1 ring-gray-200">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
            </div>
            <div>
                <h3 class="text-base font-semibold leading-7 text-gray-900">Media Inquiries</h3>
                <p class="mt-2 leading-7 text-gray-600">Eos cumque aut. Voluptatem cumque sit. Ut ut tamen amet reiciendis.</p>
                <p class="mt-4">
                    <a href="#" class="text-sm font-semibold leading-6 text-indigo-600">Contact media <span aria-hidden="true">&rarr;</span></a>
                </p>
            </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
