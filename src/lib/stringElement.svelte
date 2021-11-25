<script>
	export let key;
	export let value;

	let open = false;
</script>

<div class="bg-whitesmoke p-3">
	<button type="button" on:click={() => (open = !open)}>{key}</button>
	{#if open}
		<div class="ml-8  ">{value}</div>
	{/if}
</div>
