<script>
	export let data = [];
	export let secAttr = 'guidline';
	export let className;
	import ListElement from '$lib/element-list/listElement.svelte';
	let div;

	$: {
		if (div && data) {
			div.scrollTop = 0;
		}
	}
</script>

<div bind:this={div} class="{className} flex flex-col p-3 overflow-y-auto">
	{#each data as d (d.key)}
		<div class="my-1">
			<ListElement attr={secAttr} datum={d} />
		</div>
	{/each}
</div>
