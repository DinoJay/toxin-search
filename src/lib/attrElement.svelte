<script>
	export let categories;
	export let key;

	const cats = Object.entries(categories).map(([key, values]) => ({ key, values }));
	console.log('cats', cats);
	let open = false;
</script>

<div>
	<div role="button" on:click={() => (open = !open)}>{key}</div>
	{#if open}
		<div class="ml-8">
			{#each cats as c}
				<div class="">
					<div>{c.key}:</div>
					<div class="ml-8">{c.values}</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
