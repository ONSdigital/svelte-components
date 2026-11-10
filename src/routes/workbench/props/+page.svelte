<script>
	import { onMount } from "svelte";
	import "$lib/css/main.css";
	import PropPreview from "../PropPreview.svelte";
	import { serializable } from "../prop-fixtures.js";

	/** @type {{ data: { propSchemas: import('../prop-fixtures.js').ComponentSchema[] } }} */
	let { data } = $props();
	let selected = $state("Button");
	/** @type {Record<string, unknown>} */
	let values = $state({});
	let attempt = $state(0);
	let failed = $state(false);
	const schema = $derived(data.propSchemas.find(schema => schema.name === selected));

	/** @param {object} message */
	function send(message) { if (typeof window !== "undefined") window.parent.postMessage(message, window.location.origin); }
	/** @param {string} type @param {string} name @param {unknown} detail */
	function report(type, name, detail) { send({ type: "workbench:event", eventType: type, name, detail: serializable(detail) }); }
	/** @param {unknown} error */
	function handleError(error) { failed = true; send({ type: "workbench:error", message: error instanceof Error ? error.message : String(error) }); }

	onMount(() => {
		/** @param {MessageEvent} event */
		function receive(event) {
			if (event.origin !== window.location.origin || event.source !== window.parent || event.data?.type !== "workbench:props") return;
			if (!data.propSchemas.some(schema => schema.name === event.data.componentName)) return;
			selected = event.data.componentName;
			values = event.data.values && typeof event.data.values === "object" ? event.data.values : {};
			if (failed) { failed = false; attempt++; }
		}
		let previousHeight = 0;
		function resize() {
			const height = Math.ceil(document.body.scrollHeight + 32);
			if (height !== previousHeight) { previousHeight = height; send({ type: "workbench:height", height }); }
		}
		window.addEventListener("message", receive);
		const observer = new ResizeObserver(resize);
		observer.observe(document.body);
		send({ type: "workbench:ready" });
		resize();
		return () => { observer.disconnect(); window.removeEventListener("message", receive); };
	});
</script>

<svelte:head><title>{selected} prop preview</title></svelte:head>
<div id="preview">
	{#if schema}{#key `${selected}-${attempt}`}<svelte:boundary onerror={handleError}><PropPreview {schema} bind:values onEvent={report} />{#snippet failed(error, reset)}<p role="alert">{error instanceof Error ? error.message : String(error)}</p><button type="button" onclick={reset}>Retry preview</button>{/snippet}</svelte:boundary>{/key}{/if}
</div>

<style>
	:global(body) { margin: 16px; }
	#preview { min-height: 160px; min-width: 0; overflow-wrap: anywhere; }
	:global(img) { max-width: 100%; }
</style>