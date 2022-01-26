<script>
	import ElementList from '$lib/element-list/index.svelte';

	export let acuteToxicityCsv = [];
	export let irritationCorosivityCsv = [];
	export let repeatedToxicityCsv = [];
	export let compound;
	// import Table from '$lib/table.svelte';

	// const data = [
	// 	'Irritation and corrosivity',
	// 	'Skin sensitisation',
	// 	'Organ-specific toxicity',
	// 	'Repeated dose toxicity',
	// 	'Reproductive toxicitya',
	// 	'Mutagenicity / genotoxicity',
	// 	'Carcinogenicity',
	// 	'Photo-induced toxicity',
	// 	'New Hampshire',
	// 	'Human data',
	// 	'Special investigations',
	// 	'Absorption',
	// 	'Toxicokinetics',
	// 	'Distribution',
	// 	'Metabolism',
	// 	'Extraction'
	// ];

	let tests = [];
	$: {
		console.log('props $$$', $$props);
		console.log('compound compound', compound);
		const data = [...acuteToxicityCsv, ...irritationCorosivityCsv, ...repeatedToxicityCsv];
		console.log('data', data);
		tests = data.filter((d) => d.compound === compound.compound);
		console.log('tests', tests);
	}
</script>

<div>
	<h2 class="text-xl mb-3">Toxicological Data</h2>
	<ElementList data={tests} groupBy="type" />
</div>
