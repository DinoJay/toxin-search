<script>
	export let chemicalIdentity;
	import { searchBySMILES } from '$lib/compound-api.js';
	import CompoundInfo from './CompoundInfo.svelte';
	import ToxicologicalData from './ToxicologicalData.svelte';

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
			imgPromise = Promise.resolve({}); //new Promise((d) => Promise.resolve());
			// imgPromise = searchBySMILES(q).then((e) => {
			// 	console.log('e', e);
			// 	console.log('chemical identity', chemicalIdentity);
			// 	const tmp = chemicalIdentity.find((d) => d.smiles.toLowerCase() === q.toLowerCase());
			// 	compound = tmp || defaultCompound;
			// 	console.log('compound', compound);
			// 	return e;
			// });
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
			<div class="mt-6">
				<CompoundInfo compound={compound || {}} {imgSrc} />
				<ToxicologicalData {...$$props} />
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
