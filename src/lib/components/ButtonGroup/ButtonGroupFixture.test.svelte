<script>
	// Test fixture for ButtonGroup.svelte.test.js (excluded from the package by "!dist/**/*.test.*")
	import ButtonGroup from "./ButtonGroup.svelte";
	import ButtonGroupItem from "./ButtonGroupItem.svelte";

	export let value = "b";
</script>

<ButtonGroup name="letters" legend="Choose a letter" bind:value>
	<ButtonGroupItem value="a" label="A" />
	<ButtonGroupItem value="b" label="B" />
	<ButtonGroupItem value="c" label="C" />
</ButtonGroup>
<p data-testid="value">{value}</p>
