<script>
	/** @type {{ children?: import("svelte").Snippet; mode?: "info" | "success" | "error" | "warning"; cls?: string | null }} */
	let { children, mode = "info", cls = null } = $props();
</script>

<div
	class="ons-panel ons-panel--no-title {cls}"
	class:ons-panel--info={mode === "info"}
	class:ons-panel--warn={mode === "warning"}
	class:ons-panel--error={mode === "error"}
	class:ons-panel--success={mode === "success"}
>
	<div class="ons-u-bg--tr">
		{#if mode === "warning"}<div class="ons-panel__icon" aria-hidden="true">!</div>{/if}
		<span class="ons-panel__assistive-text ons-u-vh"
			>{mode === "warning"
				? "Warning:"
				: mode === "success"
					? "Completed:"
					: mode === "error"
						? "Error:"
						: "Important information:"}</span
		>
		{#if mode === "success"}
			<span class="ons-panel__icon ons-u-fs-r"
				><svg
					class="ons-icon"
					viewBox="0 0 13 10"
					xmlns="http://www.w3.org/2000/svg"
					focusable="false"
					fill="currentColor"
					role="img"
					title="ons-icon-check"
				>
					<path
						d="M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z"
						transform="translate(-1.51 -3.04)"
					/>
				</svg></span
			>
		{/if}
		<div class="ons-panel__body">
			<div class="default-line-height" class:ons-u-fs-r={mode !== "warning"}>
				{@render children?.()}
			</div>
		</div>
	</div>
</div>
