<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

defineProps<{ isFullScreen?: boolean }>()

const htmlBlock = `
<!DOCTYPE html>
<html lang="en" class="h-full bg-gray-50">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Two-Factor Authentication</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style> body { font-family: 'Inter', sans-serif; } </style>
</head>
<body class="h-full">
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="TailwindUI Free">
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Two-factor authentication</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Check your email for the verification code.
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="code" class="block text-sm font-medium leading-6 text-gray-900">Verification Code</label>
                        <div class="mt-2 flex gap-4 justify-between">
                            <input type="text" class="block w-12 h-14 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl font-bold leading-6" maxlength="1" value="4">
                            <input type="text" class="block w-12 h-14 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl font-bold leading-6" maxlength="1" value="2">
                            <input type="text" class="block w-12 h-14 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl font-bold leading-6" maxlength="1" value="">
                            <input type="text" class="block w-12 h-14 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl font-bold leading-6" maxlength="1" value="">
                            <input type="text" class="block w-12 h-14 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl font-bold leading-6" maxlength="1" value="">
                            <input type="text" class="block w-12 h-14 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl font-bold leading-6" maxlength="1" value="">
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Verify</button>
                    </div>
                </form>

                <div class="mt-6">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="bg-white px-2 text-gray-500">Or</span>
                        </div>
                    </div>

                    <div class="mt-6 text-center">
                         <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Resend verification code</a>
                    </div>
                </div>
            </div>
            
             <p class="mt-10 text-center text-sm text-gray-500">
                Contact us if you are having trouble logging in.
            </p>
        </div>
    </div>
</body>
</html>
`
</script>

<template>
  <PreviewWrapper title="Two-Factor Verification" description="Code entry screen for 2FA." :html-block="htmlBlock" :fullScreen="isFullScreen">
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
  </PreviewWrapper>
</template>
