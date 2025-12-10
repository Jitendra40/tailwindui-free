import { computed, ref } from "vue"

export const VIEWPORT_SIZES = ["Mobile", "small", "medium", "large", "full"] as const
export type ViewportSize = typeof VIEWPORT_SIZES[number]

const viewportWidths: Record<ViewportSize, string> = {
	Mobile: "max-w-xs",
	small: "max-w-sm",
	medium: "max-w-lg",
	large: "max-w-2xl",
	full: "w-full",
}

export function usePreviewControls(htmlBlock: string, defaultViewport: ViewportSize = "full") {
	const showPreview = ref(true)
	const showCode = ref(false)
	const copied = ref(false)
	const activeViewport = ref<ViewportSize>(defaultViewport)

	const previewWidthClass = computed(() => viewportWidths[activeViewport.value] ?? viewportWidths.full)

	const setPreview = () => {
		showPreview.value = true
		showCode.value = false
	}

	const setCode = () => {
		showPreview.value = false
		showCode.value = true
	}

	const copyMarkup = async () => {
		try {
			await navigator.clipboard.writeText(htmlBlock)
			copied.value = true
			setTimeout(() => {
				copied.value = false
			}, 1200)
		} catch (error) {
			console.error("Copy failed", error)
		}
	}

	return {
		showPreview,
		showCode,
		copied,
		activeViewport,
		previewWidthClass,
		setPreview,
		setCode,
		copyMarkup,
		htmlBlock,
	}
}
