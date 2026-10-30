<script>
	import { scaleLinear } from "d3-scale";
	import { line } from "d3-shape";

	/** @typedef {Record<string, number>} Point */
	/** @type {{ data: Point[]; xKey?: string; yKey?: string }} */
	let { data, xKey = "x", yKey = "y" } = $props();

	/** @param {Point[]} data @param {string} key */
	function minMax(data, key) {
		if (!data.length) return [0, 1];
		const values = data.map((d) => d[key]);
		return [Math.min(...values), Math.max(...values)];
	}

	const xDomain = $derived(data.length ? [data[0][xKey], data[data.length - 1][xKey]] : [0, 1]);
	const yDomain = $derived(minMax(data, yKey));

	const xScale = $derived(scaleLinear().domain(xDomain).range([0, 100]));
	const yScale = $derived(scaleLinear().domain(yDomain).range([100, 0]));
	const lineFn = $derived(
		line()
			.x(/** @param {Point} point */ (point) => xScale(point[xKey]))
			.y(/** @param {Point} point */ (point) => yScale(point[yKey]))
	);
</script>

{#if data.length}
	<div class="sparkline-container">
		<div
			class="sparkline-point"
			style={`right: 0; top: ${yScale(data[data.length - 1][yKey])}%;`}
		></div>
		<svg
			class="sparkline-chart"
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<path class="sparkline" d={lineFn(data)} />
		</svg>
	</div>
	<div class="x-ticks">
		{#each [data[0], data[data.length - 1]] as tick, i (i)}
			<div class="x-tick x-tick--{i === 0 ? 'start' : 'end'}">
				<span class="ons-u-fs-s">{tick[xKey]}</span><br /><span class="x-tick--value"
					>{tick[yKey]}</span
				>
			</div>
		{/each}
	</div>
{:else}
	<p class="ons-u-fs-s">No data available</p>
{/if}

<style>
	.sparkline-container {
		display: block;
		height: 100px;
		width: 100%;
		position: relative;
	}
	.sparkline-chart {
		display: block;
		position: absolute;
		height: 100%;
		width: 100%;
		overflow: visible;
	}
	.sparkline-point {
		position: absolute;
		display: inline-block;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--ons-color-branded);
		transform: translate(50%, -50%);
	}
	.sparkline {
		fill: none;
		stroke: var(--ons-color-branded);
		stroke-width: 2.5px;
		vector-effect: non-scaling-stroke;
	}
	.x-ticks {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 6px;
	}
	.x-tick {
		position: relative;
		padding-top: 10px;
		line-height: 1.1;
	}
	.x-tick--value {
		color: var(--ons-color-branded);
		font-size: 1.25rem;
		font-weight: bold;
	}
	.x-tick::before {
		position: absolute;
		content: " ";
		height: 10px;
		top: 0;
	}
	.x-tick--end {
		text-align: right;
	}
	.x-tick--start::before {
		border-left: 1px solid var(--ons-color-borders);
	}
	.x-tick--end::before {
		right: 0;
		border-right: 1px solid var(--ons-color-borders);
	}
</style>
