<script>
	import { createEventDispatcher } from "svelte";
	import Icon from "$lib/decorators/Icon/Icon.svelte";

	const dispatch = createEventDispatcher();

	/**
	 * Type of button
	 * @type {"button"|"sumbit"|"reset"}
	 */
	export let type = "button";
	/**
	 * Style variant of button
	 * @type {"primary"|"secondary"|"ghost"}
	 */
	export let variant = "primary";
	/**
	 * Href of button (renders button as a link)
	 * @type {string}
	 */
	export let href = "";
	/**
	 * Make button smaller
	 * @type {boolean}
	 */
	export let small = false;
	/**
	 * Icon on button, eg. "arrow", "search"
	 * @type {"arrow"|"external"|"signout"|"print"|"download"|"tick"|"search"}
	 */
	export let icon = "";
	/**
	 * Position of icon
	 * @type {"before"|"after"}
	 */
	export let iconPosition = "before";
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
	 * aria label for button
	 * @type {string}
	 */
	export let arialabel = "";
	/**
	 * filename if link is used for a file download
	 * @type {string}
	 */
	export let download = "";
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
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
		{disabled}
		on:click={(e) => dispatch("click", e)}
		aria-label={arialabel}
	>
		<span class="ons-btn__inner">
			{#if iconPosition === "before"}
				<slot name="icon">
					{#if icon}
						<Icon type={icon} marginRight={!hideLabel} />
					{/if}
				</slot>
			{/if}
			<span class="ons-btn__text" class:ons-u-vh={hideLabel}><slot /></span>
			{#if iconPosition === "after"}
				<slot name="icon">
					{#if icon}
						<Icon type={icon} marginLeft={!hideLabel} />
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
		<span class="ons-btn__inner">
			{#if iconPosition === "before"}
				<slot name="icon">
					{#if icon}
						<Icon type={icon} marginRight={!hideLabel} />
					{/if}
				</slot>
			{/if}
			<span class="ons-btn__text" class:ons-u-vh={hideLabel}><slot /></span>
			{#if iconPosition === "after"}
				<slot name="icon">
					{#if icon}
						<Icon type={icon} marginLeft={!hideLabel} />
					{/if}
				</slot>
			{/if}
		</span>
	</button>
{/if}
