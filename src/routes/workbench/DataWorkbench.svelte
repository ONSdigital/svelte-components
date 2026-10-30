<script>
	import DataCard from "$lib/components/DataCard/DataCard.svelte";
	import Table from "$lib/components/Table/Table.svelte";
	import {
		Chart,
		BarChart,
		ColumnChart,
		LineChart,
		ScatterChart,
		DotPlotChart
	} from "@onsvisual/svelte-charts";

	let mounted = $state(true);
	let seriesMode = $state("trend");
	let cardMode = $state("sparkline");
	let cardValue = $state(0);
	const series = $derived(
		seriesMode === "empty"
			? []
			: seriesMode === "single"
				? [{ x: 2025, y: 0 }]
				: seriesMode === "flat"
					? [
							{ x: 2022, y: 5 },
							{ x: 2025, y: 5 }
						]
					: [
							{ x: 2022, y: 10 },
							{ x: 2023, y: 30 },
							{ x: 2024, y: 20 },
							{ x: 2025, y: 40 }
						]
	);
	let alternate = $state(false);
	let inferred = $state(false);
	let compact = $state(false);
	let responsive = $state(true);
	let fixedHeight = $state(false);
	const rows = $derived(
		alternate
			? [
					{ region: "South", value: 30 },
					{ region: "Central", value: -5 },
					{ region: "East", value: 0 }
				]
			: [
					{ region: "West", value: 12.5 },
					{ region: "East", value: 0 },
					{ region: "North", value: null }
				]
	);
	const columns = [
		{ key: "region", label: "Region" },
		{ key: "value", label: "Value", numeric: true, dp: 1 }
	];
	/** @type {"bar" | "column" | "line" | "scatter" | "dotplot"} */
	let chartType = $state("bar");
	let useWrapper = $state(false);
	let alternateChart = $state(false);
	const chartComponents = {
		bar: BarChart,
		column: ColumnChart,
		line: LineChart,
		scatter: ScatterChart,
		dotplot: DotPlotChart
	};
	const Preview = $derived(chartComponents[chartType]);
	const chartRows = $derived([
		{ year: 2022, value: 10 },
		{ year: 2023, value: alternateChart ? 15 : 30 },
		{ year: 2024, value: 20 },
		{ year: 2025, value: alternateChart ? 25 : 40 }
	]);
	const horizontal = $derived(chartType === "bar" || chartType === "dotplot");
	const wrapperRows = $derived(
		chartRows.map((row) => ({
			x: horizontal ? row.value : row.year,
			y: horizontal ? String(row.year) : row.value
		}))
	);
</script>

<section class="data-workbench" aria-labelledby="data-workbench-heading">
	<h2 id="data-workbench-heading">Charts And Data Display</h2>
	<label><input type="checkbox" bind:checked={mounted} /> Mount data components</label>
	{#if mounted}
		<section aria-labelledby="datacard-heading">
			<h3 id="datacard-heading">DataCard And Sparkline</h3>
			<div class="settings">
				<label for="card-mode">Card mode</label>
				<select id="card-mode" bind:value={cardMode}
					><option value="sparkline">Sparkline</option><option value="number">Number</option
					></select
				>
				<label for="series-mode">Series</label>
				<select id="series-mode" bind:value={seriesMode}
					><option value="trend">Trend</option><option value="flat">Constant</option><option
						value="single">Single point</option
					><option value="empty">Empty</option></select
				>
				<label for="card-value">Value</label><input
					id="card-value"
					type="number"
					bind:value={cardValue}
				/>
			</div>
			<div class="card-example">
				<DataCard
					title="Illustrative indicator"
					subtitle="2022 to 2025"
					mode={cardMode === "sparkline" ? "sparkline" : "number"}
					value={cardValue}
					data={series}
					caption="Sample series"
					source="Source: illustrative data"
				/>
			</div>
		</section>
		<section aria-labelledby="table-heading">
			<h3 id="table-heading">Table</h3>
			<div class="settings">
				<label><input type="checkbox" bind:checked={alternate} /> Alternate rows</label>
				<label><input type="checkbox" bind:checked={inferred} /> Infer columns</label>
				<label><input type="checkbox" bind:checked={compact} /> Compact table</label>
				<label><input type="checkbox" bind:checked={responsive} /> Responsive table</label>
				<label><input type="checkbox" bind:checked={fixedHeight} /> Fixed table height</label>
			</div>
			<div class="table-example">
				<Table
					title="Illustrative regional values"
					data={rows}
					columns={inferred ? undefined : columns}
					sortable
					rowHover
					{compact}
					{responsive}
					height={fixedHeight ? 220 : "auto"}
				/>
			</div>
		</section>
		<section aria-labelledby="chart-preview-heading">
			<h3 id="chart-preview-heading">Chart Previews</h3>
			<div class="settings">
				<label for="chart-type">Chart type</label>
				<select id="chart-type" bind:value={chartType}
					><option value="bar">BarChart</option><option value="column">ColumnChart</option><option
						value="line">LineChart</option
					><option value="scatter">ScatterChart</option><option value="dotplot">DotPlotChart</option
					></select
				>
				<label><input type="checkbox" bind:checked={useWrapper} /> Use Chart wrapper</label>
				<label><input type="checkbox" bind:checked={alternateChart} /> Alternate chart data</label>
			</div>
			<div class="chart-example">
				<h4>Illustrative annual values</h4>
				{#key `${chartType}-${useWrapper}`}
					{#if useWrapper}
						<Chart
							type={chartType}
							data={wrapperRows}
							options={{
								id: "wb-chart-wrapper",
								"padding-left": "55",
								"padding-right": "20",
								"padding-top": "8",
								"padding-bottom": "28"
							}}
						/>
					{:else}
						<Preview
							data={chartRows}
							xKey={horizontal ? "value" : "year"}
							yKey={horizontal ? "year" : "value"}
							padding={{ top: 8, bottom: 28, left: 55, right: 20 }}
						/>
					{/if}
				{/key}
				<p class="ons-u-fs-s">Source: illustrative data</p>
			</div>
		</section>
	{/if}
</section>

<style>
	.data-workbench {
		margin-top: 2rem;
		min-width: 0;
	}
	.data-workbench > section {
		border-top: 1px solid #b1b4b6;
		padding: 1.5rem 0;
		min-width: 0;
	}
	.settings {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}
	.settings input[type="number"] {
		width: 7rem;
	}
	.card-example {
		max-width: 32rem;
	}
	.table-example,
	.chart-example {
		min-width: 0;
		max-width: 100%;
	}
	.table-example {
		overflow-x: auto;
	}
</style>
