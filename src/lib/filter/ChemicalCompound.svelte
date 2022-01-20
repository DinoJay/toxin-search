<script>
	export let chemicalIdentity;
	export let promise;
	export let openId;
	export let onClick;
	import { searchBySMILES } from '$lib/compound-api.js';
	import Expandable from '$lib/Expandable.svelte';

	let q = 'C1=CC(=C(C=C1O)O)O';
	// let imgPromise = null;
	let compound = null;
	const defaultComp = chemicalIdentity.find((d) => d.smiles.toLowerCase() === q.toLowerCase());
	console.log('chemicalIdentity', chemicalIdentity);
</script>

<Expandable open={openId === 'ChemicalCompound'} {onClick}>
	<h2 class="text-xl" slot="title">Chemical Compound</h2>
	<form
		class=""
		on:submit={(e) => {
			e.preventDefault();
			// imgPromise = Promise.resolve(
			// 	chemicalIdentity.find((d) => d.smiles.toLowerCase() === q.toLowerCase())
			// ); //new Promise((d) => Promise.resolve());
			promise = searchBySMILES(q).then((e) => {
				const tmp = chemicalIdentity.find((d) => d.smiles.toLowerCase() === q.toLowerCase());
				compound = tmp || defaultCompound;
				return { ...compound, imgSrc: e, type: 'compound' };
			});
		}}
	>
		<div class="text-lg ">
			<label for="compound">‘CAS No’ or ‘INCI / chemical name’ or ‘EC number‘ or ‘ SMILES’</label>
			<input bind:value={q} class="border m-1" type="text" id="compound" name="compound" />
			<button class="border m-1 px-1" type="submit">Go!</button>
		</div>
	</form>
</Expandable>

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
