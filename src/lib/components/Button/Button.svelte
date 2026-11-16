<script>
	import { createEventDispatcher } from "svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";
	import { contrastColor, darkenColor } from "../../js/utils";

	/** @type {import("svelte").EventDispatcher<{ click: MouseEvent }>} */
	const dispatch = createEventDispatcher();

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {import("svelte").Snippet} [iconSlot] Custom icon content, used instead of the `icon` prop (snippet)
	 * @property {"button" | "submit" | "reset"} [type] Type of button
	 * @property {"primary" | "secondary" | "ghost"} [variant] Style variant of button
	 * @property {string | null} [href] Href of button (renders button as a link)
	 * @property {string | null} [download] File name if link is used for a file download (only if href is also specified)
	 * @property {string | null} [rel] HTML "rel" attribute for hyperlinks (Eg. rel="nofollow")
	 * @property {boolean} [noScroll] Don't scroll when link is followed (only if href is also specified)
	 * @property {boolean} [small] Make button smaller
	 * @property {"arrow" | "carret" | "chevron" | "code" | "cog" | "copy" | "cross" | "delete" | "download" | "edit" | "edit-text" | "expand" | "external" | "minus" | "pin" | "plus" | "print" | "save" | "saveas" | "search" | "shrink" | "signout" | "tick" | "upload" | null} [icon] Icon on button, eg. "arrow", "search"
	 * @property {"before" | "after"} [iconPosition] Position of icon
	 * @property {number} [iconRotation] Rotation of icon in degrees (clockwise)
	 * @property {boolean} [disabled] Show button as disabled
	 * @property {boolean} [hideLabel] Visually hide the button text (for icon-only buttons)
	 * @property {string | null} [arialabel] Aria label for button
	 * @property {string | null} [color] Set a colour for the button
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the component
	 * @property {(event: MouseEvent) => void} [onClick] Callback for the `click` event, called with the same value as the event's `detail`
	 */
	/** @type {Props} */
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
