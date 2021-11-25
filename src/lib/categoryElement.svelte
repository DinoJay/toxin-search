<script>
	import AttrElement from './attrElement.svelte';
	import StringElement from './stringElement.svelte';

	export let categories;
	console.log('categories', categories);

	const cats = Object.entries(categories).map(([key, values]) => ({ key, values }));
	console.log('cats', cats);
	// let open = false;
</script>

<div class="ml-12">
	{#each cats as c}
		{#if typeof c.values === 'object'}
			<AttrElement key={c.key} categories={c.values} />
		{:else}
			<StringElement key={c.key} value={c.values} />
		{/if}
	{/each}
</div>
