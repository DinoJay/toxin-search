<script>
	export let acuteToxicityCsv = [];
	export let irritationCorosivityCsv = [];
	export let repeatedToxicityCsv = [];
	export let typeOfStudy;
	export let guideline;
	// import Table from '$lib/table.svelte';
	import ElementList from './element-list/index.svelte';
	import Thumbnails from '$lib/thumbnails/index.svelte';
	$: {
		console.log({ acuteToxicityCsv, irritationCorosivityCsv, repeatedToxicityCsv });
		console.log('typeOfstudy', typeOfStudy);
		console.log('guideline', guideline);
	}

	$: data = [...acuteToxicityCsv, ...irritationCorosivityCsv, ...repeatedToxicityCsv].map((d) => {
		const values =
			typeOfStudy !== null ? d.values.filter((e) => e.type_of_study === typeOfStudy) : d.values;
		return {
			...d,
			values
		};
	});
</script>

<div class="m-3">
	<div class="mb-3">
		<h2 class="text-xl mb-1">Search:</h2>
		<div class="flex h-96 ">
			<div class=" sub-cont mr-2" style="">
				<Thumbnails />
			</div>
			<div class="sub-cont bg-contain" style="background-image:url('blockly.png')">
				<div class="placeholder">Blockly</div>
			</div>
		</div>
	</div>
	<h2 class="text-xl mb-1">Results:</h2>
	<div class="flex h-96">
		<div class="sub-cont mr-2">
			<ElementList {data} />
		</div>
		<div class="sub-cont bg-contain" style="background-image:url('ontodia.png')">
			<div class="placeholder">Visualisation</div>
		</div>
	</div>
	<div />
	<!-- <Table data={irritationCorosivityCsv} />
	<Table data={repeatedToxicityCsv} /> -->
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 100px 1fr;
	}

	.sub-cont {
		@apply overflow-y-auto;
		min-width: 35rem;
		max-width: 35rem;
		@apply flex;
		@apply border-2;
		@apply border-blue-100;
	}
	.placeholder {
		@apply m-auto;
		@apply text-2xl;
		@apply text-gray-500;
	}
</style>
