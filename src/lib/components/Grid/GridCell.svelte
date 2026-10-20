<script>
	import { getContext } from "svelte";
	/** @typedef {"narrow" | "medium" | "wide" | "wider" | "full"} GridWidth */
	/** @typedef {"narrow" | "medium" | "wide"} GridColumnWidth */

	/** @type {{ children?: import("svelte").Snippet; colspan?: number; cls?: string | null; colCls?: string | null }} */
	let { children, colspan = 1, cls = null, colCls = null } = $props();

	/** @type {Record<GridWidth, Record<GridColumnWidth, string[]>>} */
	const classes = {
		narrow: {
			narrow: ["6@xs", "4@l"],
			medium: ["6@l"],
			wide: []
		},
		medium: {
			narrow: ["6@xs", "4@m", "3@l"],
			medium: ["6@m"],
			wide: ["6@xl"]
		},
		wide: {
			narrow: ["6@xs", "3@m"],
			medium: ["6@m", "4@l"],
			wide: ["6@l"]
		},
		wider: {
			narrow: ["6@xs", "3@m", "2@xl"],
			medium: ["6@m", "4@l", "3@xl"],
			wide: ["6@l", "4@xl"]
		},
		full: {
			narrow: ["6@xs", "3@m", "2@xl"],
			medium: ["6@m", "4@l", "3@xl"],
			wide: ["6@l", "4@xl", "3@xxl"]
		}
	};

	/** @param {string[]} spans @param {number} colspan @returns {string[]} */
	function calcSpans(spans, colspan) {
		if (colspan === 1 || !Number.isInteger(colspan)) return spans;
		return spans
			.map((span) => ({ width: Number(span.slice(0, 1)) * colspan, suffix: span.slice(1) }))
			.filter((span) => span.width < 12)
			.map((span) => `${span.width}${span.suffix}`);
	}

	/** @type {() => GridWidth} */
	const getWidth = getContext("width") || (() => "wide");
	/** @type {() => GridColumnWidth | "full" | null} */
	const getColWidth = getContext("colWidth") || (() => null);
	/** @type {() => number | string | null} */
	const getRowHeight = getContext("rowHeight") || (() => null);

	let colWidth = $derived(getColWidth());
	let rowHeight = $derived(getRowHeight());
	let colClass = $derived.by(() => {
		const width = getWidth() || "wide";
		const selectedColWidth = getColWidth();
		return selectedColWidth && selectedColWidth !== "full"
			? calcSpans(classes?.[width]?.[selectedColWidth] || [], colspan)
					.map((c) => `ons-col-${c}`)
					.join(" ")
			: "";
	});
</script>

{#if colWidth}
	<div
		class="ons-grid__col {colCls || colClass} {cls}"
		style:height={typeof rowHeight === "number" ? `${rowHeight}px` : rowHeight}
	>
		{@render children?.()}
	</div>
{:else if colCls}
	<div
		class="ons-grid__col {colCls} {cls}"
		style:height={typeof rowHeight === "number" ? `${rowHeight}px` : rowHeight}
	>
		{@render children?.()}
	</div>
{:else}
	{@render children?.()}
{/if}
