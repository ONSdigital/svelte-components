<script>
	import { formatter, isNumeric, ascending, descending } from "../../js/utils.js";

	/**
	 * An optional title for the table
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Make the chart smaller/more compact
	 * @type {boolean}
	 */
	export let compact = false;
	/**
	 * Make the chart responsive (changes layout on narrow screens)
	 * @type {boolean}
	 */
	export let responsive = false;
	/**
	 * Highlight rows on hover
	 * @type {boolean}
	 */
	export let rowHover = false;
	/**
	 * Maximum height of table (in pixels). The header row becomes sticky unless the value is "auto" (default).
	 * @type {number|"auto"}
	 */
	export let height = "auto";
	/**
	 * Rows of data
	 * @type {object[]}
	 */
	export let data = [];
	/**
	 * Optional metadata for formatting columns. Array of {key, label, sortable?, numeric?, dp?} objects
	 * @type {object[]}
	 */
	export let columns =
		Array.isArray(data) && data[0] ? Object.keys(data[0]).map((key) => ({ key, label: key })) : [];
	let _data = [...data];
	let sort = columns.map((c) => "none");
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";

	$: sortable = columns.map((d) => d.sortable).includes(true);
	$: formatters = columns.map((d) => formatter(d.dp));
</script>

<div
	class={cls}
	style:overflow={typeof height === "number" ? "auto" : null}
	style:height={typeof height === "number" ? `${height}px` : null}
	style:display={typeof height !== "number" ? "contents" : null}
>
	<table
		class="ons-table"
		class:ons-table--sortable={sortable}
		class:ons-table--compact={compact}
		class:ons-table--responsive={responsive}
		class:ons-table--row-hover={rowHover}
		class:sticky-header={typeof height === "number"}
		data-aria-sort={sortable ? "Sort by" : null}
		data-aria-asc={sortable ? "ascending" : null}
		data-aria-desc={sortable ? "descending" : null}
	>
		{#if title}<caption class="ons-table__caption">{title}</caption>{/if}
		<thead class="ons-table__head">
			<tr class="ons-table__row">
				{#each columns as col, i}
					{#if col.sortable}
						<th
							scope="col"
							class="ons-table__header"
							class:ons-table__header--numeric={col.numeric}
							aria-sort={sort[i]}
						>
							<button
								aria-label="Sort by {col.label}"
								type="button"
								data-index={i}
								class="ons-table__sort-button"
								on:click={() => {
									sort = sort.map((c, j) =>
										j === i && c === "ascending" ? "descending" : j === i ? "ascending" : "none"
									);
									_data = _data.sort((a, b) =>
										sort[i] === "ascending"
											? ascending(a[col.key], b[col.key])
											: descending(a[col.key], b[col.key])
									);
								}}
							>
								{col.label}<svg
									id="sort-sprite-id-0"
									class="ons-icon"
									viewBox="0 0 12 19"
									xmlns="http://www.w3.org/2000/svg"
									focusable="false"
									fill="currentColor"
									role="img"
									title="ons-icon-sort-sprite"
								>
									<path
										class="ons-topTriangle"
										d="M6 0l6 7.2H0L6 0zm0 18.6l6-7.2H0l6 7.2zm0 3.6l6 7.2H0l6-7.2z"
									></path>
									<path class="ons-bottomTriangle" d="M6 18.6l6-7.2H0l6 7.2zm0 3.6l6 7.2H0l6-7.2z"
									></path>
								</svg>
							</button>
						</th>
					{:else}
						<th
							scope="col"
							class="ons-table__header"
							class:ons-table__header--numeric={col.numeric}
						>
							<span class="ons-table__header-text">{col.label}</span>
						</th>
					{/if}
				{/each}
			</tr>
		</thead>
		<tbody class="ons-table__body">
			{#each _data as row}
				<tr class="ons-table__row">
					{#each columns as col, i}
						<td
							class="ons-table__cell"
							class:ons-table__cell--numeric={col.numeric}
							data-th={col.label}
							>{@html col.numeric && isNumeric(row[col.key])
								? formatters[i](row[col.key])
								: row[col.key] || "&ndash;"}</td
						>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table.sticky-header thead.ons-table__head {
		position: sticky;
		top: 0;
		background: var(--ons-color-page-light);
		border-bottom: none;
	}
	table.sticky-header thead.ons-table__head th {
		box-shadow: 0px -2px var(--ons-color-borders) inset;
		border-bottom: none;
	}
</style>
