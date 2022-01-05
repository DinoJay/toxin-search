<script>
	import Typeahead from 'svelte-typeahead';

	const data = [
		{ state: 'Irritation and corrosivity' },
		{ state: 'Skin sensitisation' },
		{ state: 'Organ-specific toxicity' },
		{ state: 'Repeated dose toxicity' },
		{ state: 'Reproductive toxicitya' },
		{ state: 'Mutagenicity / genotoxicity' },
		{ state: 'Carcinogenicity' },
		{ state: 'Photo-induced toxicity' },
		{ state: 'New Hampshire' },
		{ state: 'Human data' },
		{ state: 'Special investigations' },
		{ state: 'Absorption' },
		{ state: 'Toxicokinetics' },
		{ state: 'Distribution' },
		{ state: 'Metabolism' },
		{ state: 'Extraction' }
	];

	const extract = (item) => item.state;
</script>

<Typeahead {data} {extract} />
