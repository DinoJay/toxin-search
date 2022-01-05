<script>
	let type = 'all';
	let endpointTypeEnabled = true;
	// import chemspider from 'chemspider-json-api';
	export let chemicalIdentity;
	import { searchBySMILES } from '$lib/compound-api.js';

	// onMount(() => {
	// 	const search = chemspider.queryJSON('C1=CC(=C(C=C1O)O)O').then((res) => {
	// 		console.log('res§', res);
	// 	});
	// 	console.log('search', search);
	// });
	let q = 'C1=CC(=C(C=C1O)O)O';
	let imgPromise = null;
	let compound = null;
	const defaultCompound = {};
	console.log('chemicalIdentity', chemicalIdentity);
</script>

<div>
	<form
		class=""
		on:submit={(e) => {
			e.preventDefault();
			imgPromise = searchBySMILES(q).then((e) => {
				console.log('e', e);
				console.log('chemical identity', chemicalIdentity);
				const tmp = chemicalIdentity.find((d) => d.smiles.toLowerCase() === q.toLowerCase());
				compound = tmp || defaultCompound;
				console.log('compound', compound);
				return e;
			});
		}}
	>
		<label for="compound">‘CAS No’ or ‘INCI / chemical name’ or ‘EC number‘ or ‘ SMILES’</label>
		<input bind:value={q} class="border m-1" type="text" id="compound" name="compound" />
		<button class="border m-1 px-1" type="submit">Go!</button>
	</form>
	{#if imgPromise}
		{#await imgPromise}
			<p>...waiting</p>
		{:then imgSrc}
			<div class="mt-3 max-w-md">
				<div>
					<h1 class="font-bold">Chemical Name</h1>
					<div class="p-2">{compound.chemical_names}</div>
				</div>
				<img height="200" width="200" src={imgSrc} alt="chemical compound" />
				<h2>Substance identity</h2>
				<div class="p-2">
					<p>EC / List no.: {compound.ec_number}</p>
					<p>CAS no.: {compound.cas_number}</p>
					<p>Mol. formula: {compound.empirical_formula}</p>
				</div>
				<div class="">
					<h2>Function:</h2>
					<p class="my-1 p-2 max-h-40 overflow-y-auto">{compound.function_and_uses}</p>
				</div>
				<div>
					<h2>Chemical alert category</h2>
					<p class="my-1 p-2 max-h-40 overflow-y-auto">
						if link to OECDTOOL box for instance PHYSICO_CHEMICAL PROPERTY [Can be selected to
						display the complete physico-chemical property inputted or be linked to Cosmosdb to
						calculate new parameter]
					</p>
				</div>
			</div>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	{/if}
</div>

<style>
	fieldset {
		@apply mr-4;
		@apply mb-3;
		@apply border-2;
	}
	fieldset legend {
		@apply mx-3;
	}
</style>
