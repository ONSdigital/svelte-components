<script>
	import { createEventDispatcher } from "svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";
	import { contrastColor, darkenColor } from "../../js/utils";

	/** @type {import("svelte").EventDispatcher<{ click: MouseEvent }>} */
	const dispatch = createEventDispatcher();

	/** @type {{ children?: import("svelte").Snippet; iconSlot?: import("svelte").Snippet; type?: "button" | "submit" | "reset"; variant?: "primary" | "secondary" | "ghost"; href?: string | null; download?: string | null; rel?: string | null; noScroll?: boolean; small?: boolean; icon?: "arrow" | "carret" | "chevron" | "code" | "cog" | "copy" | "cross" | "delete" | "download" | "edit" | "edit-text" | "expand" | "external" | "minus" | "pin" | "plus" | "print" | "save" | "saveas" | "search" | "shrink" | "signout" | "tick" | "upload" | null; iconPosition?: "before" | "after"; iconRotation?: number; disabled?: boolean; hideLabel?: boolean; arialabel?: string | null; color?: string | null; cls?: string | null; onClick?: (event: MouseEvent) => void }} */
	let {
		children,
		iconSlot,
		type = "button",
		variant = "primary",
		href = null,
		download = null,
		rel = null,
		noScroll = false,
		small = false,
		icon = null,
		iconPosition = "before",
		iconRotation = 0,
		disabled = false,
		hideLabel = false,
		arialabel = null,
		color = null,
		cls = null,
		onClick = () => {}
	} = $props();

	/** @param {MouseEvent} event */
	function handleClick(event) {
		onClick(event);
		dispatch("click", event);
	}
</script>

{#if href}
	<a
		href={!disabled ? href : null}
		role="button"
		{download}
		{rel}
		class="ons-btn ons-btn--link ons-js-submit-btn {cls}"
		class:ons-btn--small={small}
		class:ons-btn--secondary={variant === "secondary"}
		class:ons-btn--ghost={variant === "ghost"}
		class:ons-btn--disabled={disabled}
		onclick={handleClick}
		aria-label={arialabel}
		data-sveltekit-noscroll={noScroll}
	>
		<span
			class="ons-btn__inner"
			style:background={color}
			style:color={color ? contrastColor(color) : null}
			style:box-shadow={color ? `0 0.1875rem 0 ${darkenColor(color)}` : null}
		>
			{#if iconPosition === "before"}
				{#if iconSlot}
					{@render iconSlot()}
				{:else if icon}
					<Icon type={icon} marginRight={!hideLabel} rotation={iconRotation} />
				{/if}
			{/if}
			<span class="ons-btn__text" class:ons-u-vh={hideLabel}>{@render children?.()}</span>
			{#if iconPosition === "after"}
				{#if iconSlot}
					{@render iconSlot()}
				{:else if icon}
					<Icon type={icon} marginLeft={!hideLabel} rotation={iconRotation} />
				{/if}
			{/if}
		</span>
	</a>
{:else}
	<button
		{type}
		class="ons-btn {cls}"
		class:ons-btn--small={small}
		class:ons-btn--secondary={variant === "secondary"}
		class:ons-btn--ghost={variant === "ghost"}
		class:ons-btn--disabled={disabled}
		{disabled}
		onclick={handleClick}
		aria-label={arialabel}
	>
		<span
			class="ons-btn__inner"
			style:background={color}
			style:color={color ? contrastColor(color) : null}
			style:box-shadow={color ? `0 0.1875rem 0 ${darkenColor(color)}` : null}
		>
			{#if iconPosition === "before"}
				{#if iconSlot}
					{@render iconSlot()}
				{:else if icon}
					<Icon type={icon} marginRight={!hideLabel} rotation={iconRotation} />
				{/if}
			{/if}
			<span class="ons-btn__text" class:ons-u-vh={hideLabel}>{@render children?.()}</span>
			{#if iconPosition === "after"}
				{#if iconSlot}
					{@render iconSlot()}
				{:else if icon}
					<Icon type={icon} marginLeft={!hideLabel} rotation={iconRotation} />
				{/if}
			{/if}
		</span>
	</button>
{/if}
