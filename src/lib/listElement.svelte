<script>
	export let datum;
	import CategoryElement from '$lib/categoryElement.svelte';
	let open = false;
	let openCategory = false;
</script>

<div>
	<div class="bg-thistle p-3" role={!open && 'button'} on:click={() => (open = !open)}>
		<span>+</span>
		{datum.key}
	</div>
	{#if open}
		{#each datum.values as v, i}
			<div
				role="button"
				class="ml-6 bg-lightblue p-3 my-2"
				on:click={() => (openCategory = !openCategory)}
			>
				#{++i} Report
				{v.guideline}
			</div>
			<div>
				{#if openCategory}
					<CategoryElement categories={v.categories} />
				{/if}
			</div>
		{/each}
	{/if}
</div>
