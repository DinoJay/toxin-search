<script>
	export let datum;
	export let attr;
	import CategoryElement from '$lib/element-list/categoryElement.svelte';
	let open = false;
	let openCategory = datum.values.map(() => false);
</script>

<div>
	<div class="bg-thistle p-3" role={'button'} on:click={() => (open = !open)}>
		<span>+</span>
		{datum.key}
	</div>
	{#if open}
		{#each datum.values as v, i}
			<div>
				<div
					role="button"
					class="ml-6 bg-lightblue p-3 my-2"
					on:click={() => {
						openCategory[i] = !openCategory[i];
					}}
				>
					#{++i} Report
					{v[attr]}
				</div>
				<CategoryElement open={openCategory[i]} categories={v.categories} key={v.id} {i} />
			</div>
		{/each}
	{/if}
</div>
