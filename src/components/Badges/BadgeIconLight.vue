<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `<div class="flex flex-wrap items-center justify-center gap-3">
			<span
				class="inline-flex items-center gap-1 rounded-full bg-fuchsia-50 px-3 py-1 text-sm font-semibold text-fuchsia-700 ring-1 ring-fuchsia-100">
				<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
					<path fill="currentColor"
						d="M4.353 4.334a.476.476 0 0 1 .673.01a.53.53 0 0 1-.011.742A6.98 6.98 0 0 0 3 10c0 1.99.83 3.786 2.164 5.06a.53.53 0 0 1 .023.753a.475.475 0 0 1-.662.02A7.98 7.98 0 0 1 2 10c0-2.214.9-4.218 2.353-5.666m10.632.752a.53.53 0 0 1-.01-.742a.476.476 0 0 1 .672-.01A7.98 7.98 0 0 1 18 10c0 2.3-.97 4.374-2.525 5.833a.475.475 0 0 1-.662-.02a.53.53 0 0 1 .023-.752A6.98 6.98 0 0 0 17 10a6.98 6.98 0 0 0-2.015-4.915M6.132 6.09a.464.464 0 0 1 .656.016c.208.208.187.55-.018.76A4.5 4.5 0 0 0 5.5 10c0 1.29.543 2.454 1.414 3.275c.22.207.25.561.035.776a.463.463 0 0 1-.638.028A5.5 5.5 0 0 1 4.5 10a5.48 5.48 0 0 1 1.632-3.91m7.098.776c-.205-.21-.226-.552-.018-.76a.464.464 0 0 1 .656-.016A5.48 5.48 0 0 1 15.5 10a5.5 5.5 0 0 1-1.81 4.08a.463.463 0 0 1-.64-.03c-.214-.214-.184-.568.036-.775A4.5 4.5 0 0 0 14.5 10a4.5 4.5 0 0 0-1.27-3.134M10 8.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5" />
				</svg>
				Live</span>
			<span
				class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">Paid</span>
			<span
				class="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700 ring-1 ring-sky-100">
				<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<g fill="none" fill-rule="evenodd">
						<path
							d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
						<path fill="currentColor"
							d="M19 4a3 3 0 0 1 2.995 2.824L22 7v10a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7a3 3 0 0 1 2.824-2.995L5 4zm1 6H4v7a1 1 0 0 0 .883.993L5 18h14a1 1 0 0 0 .993-.883L20 17zM9.293 11.464a1 1 0 0 1 1.497 1.32l-.083.095l-.121.121H15a1 1 0 0 1 .117 1.993L15 15h-4.414l.12.121a1 1 0 0 1-1.32 1.498l-.093-.084l-1.829-1.828a1 1 0 0 1-.083-1.32l.083-.094zM19 6H5a1 1 0 0 0-1 1v1h16V7a1 1 0 0 0-1-1" />
					</g>
				</svg>

				Refund</span>
			<span
				class="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700 ring-1 ring-rose-100">
				<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path fill="currentColor"
						d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />
				</svg>

				Failed</span>
			<span
				class="inline-flex items-center gap-1 rounded-full bg-lime-50 px-3 py-1 text-sm font-semibold text-lime-800 ring-1 ring-lime-100">
				<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z" /></svg>
				Success</span>
			<span
				class="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-800 ring-1 ring-amber-100">
				<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M10 20.777a9 9 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a9 9 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A9 9 0 0 1 10 3.223" />
				</svg>
				In Progress</span>
		</div>`
</script>

<template>
	<PreviewWrapper title="Badge with icons" :html-block="htmlBlock" default-viewport="full">
		<div class="flex flex-wrap items-center justify-center gap-3">
			<span
				class="inline-flex items-center gap-1 rounded-full bg-fuchsia-50 px-3 py-1 text-sm font-semibold text-fuchsia-700 ring-1 ring-fuchsia-100">
				<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
					<path fill="currentColor"
						d="M4.353 4.334a.476.476 0 0 1 .673.01a.53.53 0 0 1-.011.742A6.98 6.98 0 0 0 3 10c0 1.99.83 3.786 2.164 5.06a.53.53 0 0 1 .023.753a.475.475 0 0 1-.662.02A7.98 7.98 0 0 1 2 10c0-2.214.9-4.218 2.353-5.666m10.632.752a.53.53 0 0 1-.01-.742a.476.476 0 0 1 .672-.01A7.98 7.98 0 0 1 18 10c0 2.3-.97 4.374-2.525 5.833a.475.475 0 0 1-.662-.02a.53.53 0 0 1 .023-.752A6.98 6.98 0 0 0 17 10a6.98 6.98 0 0 0-2.015-4.915M6.132 6.09a.464.464 0 0 1 .656.016c.208.208.187.55-.018.76A4.5 4.5 0 0 0 5.5 10c0 1.29.543 2.454 1.414 3.275c.22.207.25.561.035.776a.463.463 0 0 1-.638.028A5.5 5.5 0 0 1 4.5 10a5.48 5.48 0 0 1 1.632-3.91m7.098.776c-.205-.21-.226-.552-.018-.76a.464.464 0 0 1 .656-.016A5.48 5.48 0 0 1 15.5 10a5.5 5.5 0 0 1-1.81 4.08a.463.463 0 0 1-.64-.03c-.214-.214-.184-.568.036-.775A4.5 4.5 0 0 0 14.5 10a4.5 4.5 0 0 0-1.27-3.134M10 8.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5" />
				</svg>
				Live</span>
			<span
				class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">Paid</span>
			<span
				class="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700 ring-1 ring-sky-100">
				<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<g fill="none" fill-rule="evenodd">
						<path
							d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
						<path fill="currentColor"
							d="M19 4a3 3 0 0 1 2.995 2.824L22 7v10a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7a3 3 0 0 1 2.824-2.995L5 4zm1 6H4v7a1 1 0 0 0 .883.993L5 18h14a1 1 0 0 0 .993-.883L20 17zM9.293 11.464a1 1 0 0 1 1.497 1.32l-.083.095l-.121.121H15a1 1 0 0 1 .117 1.993L15 15h-4.414l.12.121a1 1 0 0 1-1.32 1.498l-.093-.084l-1.829-1.828a1 1 0 0 1-.083-1.32l.083-.094zM19 6H5a1 1 0 0 0-1 1v1h16V7a1 1 0 0 0-1-1" />
					</g>
				</svg>

				Refund</span>
			<span
				class="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700 ring-1 ring-rose-100">
				<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path fill="currentColor"
						d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />
				</svg>

				Failed</span>
			<span
				class="inline-flex items-center gap-1 rounded-full bg-lime-50 px-3 py-1 text-sm font-semibold text-lime-800 ring-1 ring-lime-100">
				<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z" /></svg>
				Success</span>
			<span
				class="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-800 ring-1 ring-amber-100">
				<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M10 20.777a9 9 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a9 9 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A9 9 0 0 1 10 3.223" />
				</svg>
				In Progress</span>
		</div>
	</PreviewWrapper>
</template>

