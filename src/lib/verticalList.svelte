<script>
	export let data = [];
	import ListElement from '$lib/listElement.svelte';
</script>

<div class="flex flex-col p-3">
	{#each data as d}
		<div class="my-1">
			<ListElement datum={d} />
		</div>
	{/each}
</div>
