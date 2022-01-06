<script>
	import CompoundList from './CompoundList.svelte';
	import SafetyAssessment from './SafetyAssessment.svelte';

	const data = [
		{ state: 'Acute Toxicity' },
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

<div class="text-lg">
	<p class="mb-3">Look for compounds with a specific toxicological outcome</p>
	<form on:submit={(e) => e.preventDefault()}>
		<div class="mb-3">
			<div class="">
				<label for="toxi-outcome">Type the health effect or parameter of interest:</label>
				<input class="ml-1 p-1 border" list="outcomes" name="toxi-outcome" id="toxi-outcome" />
			</div>
			<datalist id="outcomes">
				{#each data as d}
					<option value={d.state}>{d.state}</option>
				{/each}
			</datalist>
		</div>
		<div class="mb-3">
			<p>Chose the type(s) of study:</p>
			<div>
				<input type="checkbox" id="in-vivo" name="in-vivo" checked />
				<label for="in-vivo">In vivo</label>
			</div>
			<div>
				<input type="checkbox" id="in-vitro" name="in-vitro" />
				<label for="in-vitro">In vitro</label>
			</div>
			<div>
				<input type="checkbox" id="in-silico" name="in-silico" />
				<label for="in-silico">In silico</label>
			</div>
			<div>
				<input type="checkbox" id="in-chemico" name="in-chemico" />
				<label for="in-chemico">In chemico</label>
			</div>
		</div>

		<div>
			<p>Chose the type of guideline(s):</p>
			<div>
				<input type="checkbox" id="oecd" name="oecd" checked />
				<label for="oecd">OECD</label>
			</div>
			<div>
				<input type="checkbox" id="non-oecd" name="non-oecd" />
				<label for="non-oecd">Non-OECD</label>
			</div>
		</div>
	</form>
	<div class="mt-3">
		<CompoundList {...$$props} />
	</div>

	<div class="mt-6">
		<SafetyAssessment />
	</div>
</div>

<style>
	:global([role='listbox']) {
		margin: 20rem;
	}
</style>
