<script>
	import { getContext } from "svelte";

	/**
	 * (If used in grid) How many columns the card should span across
	 * @type {number}
	 */
	export let colspan = 1;

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

	function calcSpans(cls, colspan) {
		if (colspan === 1 || !Number.isInteger(colspan)) return cls;
		return cls
			.map((c) => [+c.slice(0, 1) * colspan, c.slice(1)])
			.filter((c) => c[0] < 12)
			.map((c) => `${c[0]}${c[1]}`);
	}

	const width = getContext("width") || "wide";
	const colWidth = getContext("colWidth") || null;
	const rowHeight = getContext("rowHeight") || null;
	const colClass = colWidth
		? calcSpans(classes?.[width]?.[colWidth] || [], colspan)
				.map((c) => `ons-col-${c}`)
				.join(" ")
		: "";
</script>

{#if colWidth}
	<div
		class="ons-grid__col {colClass}"
		style:height={typeof rowHeight === "number" ? `${rowHeight}px` : rowHeight}
	>
		<slot />
	</div>
{:else}
	<slot />
{/if}
