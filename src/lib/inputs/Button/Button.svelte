<script>
	import { createEventDispatcher } from "svelte";
	import Icon from "$lib/decorators/Icon/Icon.svelte";
	import { contrastColor, darkenColor } from "../../js/utils";

	const dispatch = createEventDispatcher();

	/**
	 * Type of button
	 * @type {"button"|"submit"|"reset"}
	 */
	export let type = "button";
	/**
	 * Style variant of button
	 * @type {"primary"|"secondary"|"ghost"}
	 */
	export let variant = "primary";
	/**
	 * Href of button (renders button as a link)
	 * @type {string|null}
	 */
	export let href = null;
	/**
	 * File name if link is used for a file download (only if href is also specified)
	 * @type {string|null}
	 */
	export let download = null;
	/**
	 * Don't scroll when link is followed (only if href is also specified)
	 * @type {boolean}
	 */
	export let noScroll = false;
	/**
	 * Make button smaller
	 * @type {boolean}
	 */
	export let small = false;
	/**
	 * Icon on button, eg. "arrow", "search"
	 * @type {"arrow"|"carret"|"chevron"|"code"|"cog"|"cross"|"download"|"expand"|"external"|"pin"|"print"|"search"|"shrink"|"signout"|"tick"|null}
	 */
	export let icon = null;
	/**
	 * Position of icon
	 * @type {"before"|"after"}
	 */
	export let iconPosition = "before";
	/**
	 * Rotation of icon in degrees (clockwise)
	 * @type {number}
	 */
	export let iconRotation = 0;
	/**
	 * Show button as disabled
	 * @type {boolean}
	 */
	export let disabled = false;
	/**
	 * Visually hide the button text (for icon-only buttons)
	 * @type {boolean}
	 */
	export let hideLabel = false;
	/**
	 * Aria label for button
	 * @type {string|null}
	 */
	export let arialabel = null;
	/**
	 * Set a colour for the button
	 * @type {string|null}
	 */
	export let color = null;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string|null}
	 */
	export let cls = null;
</script>

{#if href}
	<a
		href={!disabled ? href : null}
		role="button"
		{download}
		class="ons-btn ons-btn--link ons-js-submit-btn {cls}"
		class:ons-btn--small={small}
		class:ons-btn--secondary={variant === "secondary"}
		class:ons-btn--ghost={variant === "ghost"}
		class:ons-btn--disabled={disabled}
		on:click={(e) => dispatch("click", e)}
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
				<slot name="icon">
					{#if icon}
						<Icon type={icon} marginRight={!hideLabel} rotation={iconRotation} />
					{/if}
				</slot>
			{/if}
			<span class="ons-btn__text" class:ons-u-vh={hideLabel}><slot /></span>
			{#if iconPosition === "after"}
				<slot name="icon">
					{#if icon}
						<Icon type={icon} marginLeft={!hideLabel} rotation={iconRotation} />
					{/if}
				</slot>
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
		on:click={(e) => dispatch("click", e)}
		aria-label={arialabel}
	>
		<span
			class="ons-btn__inner"
			style:background={color}
			style:color={color ? contrastColor(color) : null}
			style:box-shadow={color ? `0 0.1875rem 0 ${darkenColor(color)}` : null}
		>
			{#if iconPosition === "before"}
				<slot name="icon">
					{#if icon}
						<Icon type={icon} marginRight={!hideLabel} rotation={iconRotation} />
					{/if}
				</slot>
			{/if}
			<span class="ons-btn__text" class:ons-u-vh={hideLabel}><slot /></span>
			{#if iconPosition === "after"}
				<slot name="icon">
					{#if icon}
						<Icon type={icon} marginLeft={!hideLabel} rotation={iconRotation} />
					{/if}
				</slot>
			{/if}
		</span>
	</button>
{/if}
