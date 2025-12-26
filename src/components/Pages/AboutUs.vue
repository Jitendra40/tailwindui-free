<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

defineProps<{ isFullScreen?: boolean }>()

const htmlBlock = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Our Story</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style> body { font-family: 'Inter', sans-serif; } </style>
</head>
<body class="bg-white">

    <!-- Header -->
    <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">TailwindUI Free</span>
             <svg  class="h-6 w-auto mx-auto"  viewBox="0 0 155.68 30">
  <g>
    <path d="M37.47,25.26V4.64h5.67c1.48,0,2.6.41,3.35,1.24s1.12,2.03,1.12,3.62v9.66c0,1.95-.34,3.46-1.03,4.52s-1.88,1.59-3.59,1.59h-5.53ZM41.62,21.62h.71c.76,0,1.14-.37,1.14-1.1v-10.64c0-.69-.09-1.13-.28-1.33s-.56-.3-1.12-.3h-.46v13.37Z"/>
    <path d="M54.08,25.45c-1.72,0-2.98-.48-3.8-1.45s-1.22-2.38-1.22-4.26V4.64h4.01v14.94c0,.34.02.67.06.99s.13.58.27.78.37.3.68.3.55-.1.69-.3.23-.46.26-.78.05-.65.05-1V4.64h4.01v15.11c0,1.88-.41,3.29-1.22,4.26s-2.08,1.45-3.8,1.45Z"/>
    <path d="M60.68,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M78.58,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M98.98,25.26v-6.79l-3.29-13.84h4.09l1.15,6.98,1.15-6.98h4.08l-3.28,13.84v6.79h-3.89Z"/>
    <path d="M112.82,25.26V4.64h4.12v17.11h4.24v3.52h-8.37Z"/>
    <path d="M127.29,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM127.32,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
    <path d="M138.29,25.45c-2.95,0-4.42-2.11-4.42-6.33v-8.89c0-3.85,1.69-5.78,5.06-5.78,1.39,0,2.46.28,3.2.84s1.25,1.37,1.54,2.44.42,2.38.42,3.91h-4.03v-1.83c0-.45-.06-.82-.18-1.12s-.37-.45-.76-.45c-.48,0-.79.16-.94.48s-.23.67-.23,1.05v10c0,.55.07,1.01.22,1.35s.43.52.85.52.73-.17.87-.52.22-.81.22-1.38v-2.94h-1.1v-3.56h5.04v12.01h-1.65l-.7-1.73c-.72,1.28-1.85,1.92-3.4,1.92Z"/>
    <path d="M150.59,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM150.63,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
  </g>
  <rect x="4.39" y="4.39" width="21.21" height="21.21" transform="translate(15 -6.21) rotate(45)"/>
</svg>
            </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
        </nav>
    </header>

    <main class="isolate">
        <!-- Hero Section -->
        <div class="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
            <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true"></div>
            <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 class="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">We’re changing the way people connect.</h1>
                    <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p class="text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Sit amet velit consectetur velit via lorem.</p>
                    </div>
                   <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" alt="" class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36">
                </div>
            </div>
            <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
        </div>

        <!-- Mission Section -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
            </div>
            <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
                    <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
                    <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
                    <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
                    <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
                </div>
                <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-600">Offices worldwide</dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-gray-900">12</dd>
                    </div>
                    <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-600">Full-time colleagues</dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-gray-900">300+</dd>
                    </div>
                    <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-600">Hours per week</dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-gray-900">40</dd>
                    </div>
                    <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-600">Paid time off</dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-gray-900">Unlimited</dd>
                    </div>
                </dl>
            </div>
        </div>

        <!-- Image Section -->
        <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="aspect-[5/2] w-full object-cover xl:rounded-3xl">
        </div>

        <!-- Team Section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 mb-24">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">Sit facilis neque ab nulla vel. Suscipit eum quasi est. Seki odio nostrud voluptatem suscipit non.</p>
            </div>
            <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <li>
                    <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="">
                    <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Leonard Krasner</h3>
                    <p class="text-base leading-7 text-gray-600">Senior Designer</p>
                </li>
                 <li>
                    <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=1500&q=80" alt="">
                    <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Floyd Miles</h3>
                    <p class="text-base leading-7 text-gray-600">Principal Engineer</p>
                </li>
                 <li>
                    <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="">
                    <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">Emily Selman</h3>
                    <p class="text-base leading-7 text-gray-600">VP, User Experience</p>
                </li>
            </ul>
        </div>
    </main>
    
    <!-- Footer -->
    <footer class="bg-gray-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-8">
                      <svg  class="h-6 w-auto mx-auto"  viewBox="0 0 155.68 30">
  <g>
    <path d="M37.47,25.26V4.64h5.67c1.48,0,2.6.41,3.35,1.24s1.12,2.03,1.12,3.62v9.66c0,1.95-.34,3.46-1.03,4.52s-1.88,1.59-3.59,1.59h-5.53ZM41.62,21.62h.71c.76,0,1.14-.37,1.14-1.1v-10.64c0-.69-.09-1.13-.28-1.33s-.56-.3-1.12-.3h-.46v13.37Z"/>
    <path d="M54.08,25.45c-1.72,0-2.98-.48-3.8-1.45s-1.22-2.38-1.22-4.26V4.64h4.01v14.94c0,.34.02.67.06.99s.13.58.27.78.37.3.68.3.55-.1.69-.3.23-.46.26-.78.05-.65.05-1V4.64h4.01v15.11c0,1.88-.41,3.29-1.22,4.26s-2.08,1.45-3.8,1.45Z"/>
    <path d="M60.68,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M78.58,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M98.98,25.26v-6.79l-3.29-13.84h4.09l1.15,6.98,1.15-6.98h4.08l-3.28,13.84v6.79h-3.89Z"/>
    <path d="M112.82,25.26V4.64h4.12v17.11h4.24v3.52h-8.37Z"/>
    <path d="M127.29,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM127.32,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
    <path d="M138.29,25.45c-2.95,0-4.42-2.11-4.42-6.33v-8.89c0-3.85,1.69-5.78,5.06-5.78,1.39,0,2.46.28,3.2.84s1.25,1.37,1.54,2.44.42,2.38.42,3.91h-4.03v-1.83c0-.45-.06-.82-.18-1.12s-.37-.45-.76-.45c-.48,0-.79.16-.94.48s-.23.67-.23,1.05v10c0,.55.07,1.01.22,1.35s.43.52.85.52.73-.17.87-.52.22-.81.22-1.38v-2.94h-1.1v-3.56h5.04v12.01h-1.65l-.7-1.73c-.72,1.28-1.85,1.92-3.4,1.92Z"/>
    <path d="M150.59,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM150.63,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
  </g>
  <rect x="4.39" y="4.39" width="21.21" height="21.21" transform="translate(15 -6.21) rotate(45)"/>
</svg>
                    <p class="text-sm leading-6 text-gray-300">Making the world a better place through constructing elegant hierarchies.</p>
                </div>
                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6 text-white">Solutions</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li><a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Marketing</a></li>
                                <li><a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Analytics</a></li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li><a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Pricing</a></li>
                                <li><a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Documentation</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                <p class="text-xs leading-5 text-gray-400">&copy; 2025 TailwindUI Free, Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>
`;
</script>

<template>
  <PreviewWrapper
    title="About Us Page"
    description="A comprehensive About Us page structure with team, stats, and mission."
    :html-block="htmlBlock"
    default-viewport="full"
    :fullScreen="isFullScreen"
  >
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
    <div class="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
