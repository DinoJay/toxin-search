<script>
	export let acuteToxicityCsv = [];
	export let irritationCorosivityCsv = [];
	export let repeatedToxicityCsv = [];
	// import Table from '$lib/table.svelte';
	import VerticalList from '$lib/verticalList.svelte';
	$: {
		console.log({ acuteToxicityCsv, irritationCorosivityCsv, repeatedToxicityCsv });
	}
</script>

<div class="flex">
	<VerticalList data={acuteToxicityCsv} />
	<!-- <Table data={irritationCorosivityCsv} />
	<Table data={repeatedToxicityCsv} /> -->
</div>
