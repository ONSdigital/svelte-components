<script>
	/**
	 * Set the type of icon
	 * @type {"arrow"|"carret"|"cross"|"external"|"signout"|"print"|"download"|"tick"|"search"}
	 */
	export let type = "arrow";
	/**
	 * Set the size of the icon
	 * @type {"s"|"m"|"l"|"xl"|"2xl"|"3xl"|null}
	 */
	export let size = null;
	/**
	 * Rotation
	 * @type {number}
	 */
	export let rotation = 0;
	/**
	 * Add a small margin on the left of the icon
	 * @type {boolean}
	 */
	export let marginLeft = false;
	/**
	 * Add a small margin on the right of the icon
	 * @type {boolean}
	 */
	export let marginRight = false;

	const paths = {
		arrow: {
			d: "m10 .2-.9.9c-.1.1-.1.4 0 .5l4 4H.6c-.2 0-.4.2-.4.4v1.2c0 .2.2.4.4.4h12.5l-3.9 3.7c-.2.2-.2.4 0 .6l.8.9c.2.2.4.2.6 0L16.8 7c.2-.2.2-.4 0-.6L10.7.3c-.3-.2-.5-.2-.7-.1Z",
			viewBox: "0 0 17 13"
		},
		chevron: {
			d: "M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z",
			viewBox: "0 0 8 13"
		},
		carret: {
			d: "M1.37.15 4.5 5.1 4.5-5.1a.37.37 0 0 1 .6 0l.7.7a.45.45 0 0 1 0 .5l-5.5 6.2a.37.37 0 0 1-.6 0l-5.5-6.1a.64.64 0 0 1 0-.6l.7-.7a.64.64 0 0 1 .6 0Z",
			viewBox: "0 0 11.75 7.7"
		},
		cross: {
			d: "M12 1.2086L10.7914 0L6 4.79155L1.20857 0L0 1.2086L4.79143 6.00015L0 10.7917L1.20857 12.0003L6 7.20875L10.7914 12.0003L12 10.7917L7.20857 6.00015L12 1.2086Z",
			viewBox: "0 0 12 12"
		},
		external: {
			d: "M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z",
			viewBox: "2 2 12 12"
		},
		signout: {
			d: "M13.85,7.65l-2.5-2.5a.5.5,0,0,0-.71,0,.48.48,0,0,0-.15.36V7h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3v1.5A.49.49,0,0,0,11,11a.48.48,0,0,0,.34-.14l2.51-2.5a.49.49,0,0,0,0-.68Z M8.5,14h-6a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,2.5,2h6a.5.5,0,0,1,.5.5V3a.5.5,0,0,1-.5.5h-5v9h5A.5.5,0,0,1,9,13v.5A.5.5,0,0,1,8.5,14Z",
			viewBox: "2 2 12 12"
		},
		print: {
			d: "M17 4H3C1.3 4 0 5.2 0 6.8v5.5h4V16h12v-3.7h4V6.8C20 5.2 18.7 4 17 4zm-3 10H6V9h8v5zm3-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-1-8H4v3h12V0z",
			viewBox: "0 0 20 16"
		},
		download: {
			d: "M5.6 9a.48.48 0 0 0 .7 0l3-3.2a.48.48 0 0 0 0-.7C9.3 5 9.2 5 9 5H7.5V.5A.47.47 0 0 0 7 0H5a.47.47 0 0 0-.5.5V5H3a.47.47 0 0 0-.5.5.37.37 0 0 0 .1.3Z M11.5 9H11a.47.47 0 0 0-.5.5v1h-9v-1A.47.47 0 0 0 1 9H.5a.47.47 0 0 0-.5.5v2a.47.47 0 0 0 .5.5h11a.47.47 0 0 0 .5-.5v-2a.47.47 0 0 0-.5-.5Z",
			viewBox: "0 0 12 12"
		},
		tick: {
			d: "M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z",
			viewBox: "1.5 3 13 10"
		},
		search: {
			d: "M11.86 10.23 8.62 6.99a4.63 4.63 0 1 0-6.34 1.64 4.55 4.55 0 0 0 2.36.64 4.65 4.65 0 0 0 2.33-.65l3.24 3.23a.46.46 0 0 0 .65 0l1-1a.48.48 0 0 0 0-.62Zm-5-3.32a3.28 3.28 0 0 1-2.31.93 3.22 3.22 0 1 1 2.35-.93Z",
			viewBox: "0 0 12 12"
		}
	};
</script>

{#if paths[type]}
	<svg
		class="ons-icon {size ? `ons-icon--${size}` : ''}"
		class:ons-u-ml-2xs={marginLeft}
		class:ons-u-mr-2xs={marginRight}
		viewBox={paths[type].viewBox}
		xmlns="http://www.w3.org/2000/svg"
		focusable="false"
		fill="currentColor"
		style:transform={rotation ? `rotate(${rotation}deg)` : null}
	>
		<path d={paths[type].d}></path>
	</svg>
{/if}
