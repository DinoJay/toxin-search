<script>
	import ElementList from '$lib/element-list/index.svelte';

	export let acuteToxicityCsv = [];
	export let irritationCorosivityCsv = [];
	export let repeatedToxicityCsv = [];
	export let typeOfStudy;
	export let guideline;
	// import Table from '$lib/table.svelte';
	$: {
		console.log('props', $$props);
	}

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

	$: data = [...acuteToxicityCsv, ...irritationCorosivityCsv, ...repeatedToxicityCsv];
	console.log('data toxi', data);
</script>

<div>
	<h2 class="text-xl mb-3">Toxicological Data</h2>
	<ElementList {data} />
</div>
