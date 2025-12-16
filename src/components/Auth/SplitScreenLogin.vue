<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex min-h-[600px] flex-1">
  <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
        <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-sm leading-6 text-gray-500">
          Not a member?
          <a href="javascript:void(0)" class="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
        </p>
      </div>

      <div class="mt-10">
        <div>
          <form action="#" method="POST" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-700">Remember me</label>
              </div>

              <div class="text-sm leading-6">
                <a href="javascript:void(0)" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>
        </div>

        <div class="mt-10">
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-sm font-medium leading-6">
              <span class="bg-white px-6 text-gray-900">Or continue with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-4">
            <a href="javascript:void(0)" class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
              <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12.0003 20.4144C16.6467 20.4144 20.4144 16.6467 20.4144 12.0003C20.4144 7.35391 16.6467 3.58618 12.0003 3.58618C7.35391 3.58618 3.58618 7.35391 3.58618 12.0003C3.58618 16.6467 7.35391 20.4144 12.0003 20.4144Z" fill="currentColor" fill-opacity="0"/>
                <path d="M11.9968 20.9082C7.08638 20.9082 3.0924 16.9234 3.0924 12.0038C3.0924 7.08415 7.08638 3.09937 11.9968 3.09937C16.9164 3.09937 20.9012 7.08415 20.9012 12.0038C20.9012 16.9234 16.9164 20.9082 11.9968 20.9082Z" fill="white"/>
                <path d="M12 12.8753V10.2741H15.6888C15.8459 10.7486 15.9089 11.2468 15.867 11.7513C15.7744 13.9113 14.5297 15.9392 12.5645 16.7126L10.9634 15.4852C12.1864 14.9455 12.9839 13.7225 12.9839 12.338H12V12.8753Z" fill="#4285F4"/>
                <path d="M11.9968 20.9082C10.1582 20.9089 8.35821 20.3542 6.83008 19.3145L8.43126 18.0871C9.64259 18.8893 11.1645 19.1678 12.5564 18.8504C13.9483 18.533 15.1118 17.6433 15.7766 16.3888L17.3778 17.6163C16.2949 19.6462 14.2386 20.9103 11.9968 20.9082Z" fill="#34A853"/>
                <path d="M6.83363 19.3144L8.43481 18.087C7.62537 16.9587 7.42084 15.4831 7.89269 14.1625C8.36453 12.842 9.44426 11.8703 10.7518 11.5959V10.0538H9.08803C7.30909 10.9575 6.02492 12.6359 5.61868 14.5828C5.21245 16.5295 5.73357 18.5522 6.83363 19.3144Z" fill="#FBBC05"/>
                <path d="M9.08453 10.0538C10.0163 9.57685 11.085 9.49755 12.0631 9.83279C13.0413 10.168 13.8507 10.8913 14.3188 11.847L12 12.8718H12.9803C12.5714 11.4503 11.4057 10.3705 9.98418 10.0278C8.5627 9.68514 7.07064 10.1239 6.09668 11.1717L7.69786 12.3991C8.01777 11.4934 8.48784 10.669 9.08453 10.0538Z" fill="#EB4335"/>
              </svg>
              <span class="text-sm font-semibold leading-6">Google</span>
            </a>
            <a href="javascript:void(0)" class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
              <svg class="h-5 w-5 fill-[#24292F]" aria-hidden="true" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm font-semibold leading-6">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:flex lg:flex-1 w-full relative">
    <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="">
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Split Screen Login" description="Login form with a large feature image on the side." :html-block="htmlBlock" />
</template>
