<script>
	export let chemicalIdentity;
	export let promise;
	export let openId;
	export let onClick;
	import { searchBySMILES } from '$lib/compound-api.js';
	import { constructQuery } from '$lib/sparql';
	import Expandable from '$lib/Expandable.svelte';

	let inputVal = 'C1=CC(=C(C=C1O)O)O';
	// let imgPromise = null;
	let compound = null;
	// const defaultComp = chemicalIdentity.find((d) => d.smiles.toLowerCase() === q.toLowerCase());
	console.log('chemicalIdentity', chemicalIdentity);

	const makeSparqlQuery = ({ smiles, cas_number, inci }) => `
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
	PREFIX ont: <http://ontologies.vub.be/oecd#>

	SELECT DISTINCT *
	{
		?compound rdfs:label ?label .
		?compound ont:SMILES ${`"${smiles}"` || '?smiles'} .
		OPTIONAL {?compound ont:CAS_number ${`"${cas_number}"` || '?cas_number'} . }
		OPTIONAL {?compound ont:INCI ${`"${inci}"` || '?inci'} . }
		OPTIONAL { ?compound ont:additional_info ?additional_info .  }
		OPTIONAL { ?compound ont:empirical_formula ?empirical_formula .  }
		OPTIONAL { ?compound ont:function_and_uses ?function_and_uses .  }
		OPTIONAL { ?compound ont:homogeneity_and_stability ?homogeneity_and_stability .  }
		OPTIONAL { ?compound ont:impurity ?impurity .  }
		OPTIONAL { ?compound ont:molecularweight ?molecularweight .  }
		OPTIONAL { ?compound ont:physical_form ?physical_form .  }
		OPTIONAL { ?compound ont:primary_name  ?primary_name .  }
		OPTIONAL { ?compound ont:purity  ?purity .  }
	}
	`;
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
			promise = searchBySMILES(inputVal).then((e) => {
				return fetch(constructQuery('chemical-identity', makeSparqlQuery({ smiles: inputVal })))
					.then((res) => res.json())
					.then((res) => ({
						...res,
						imgSrc: e,
						type: 'compound'
					}));
			});
		}}
	>
		<div class="text-lg ">
			<label for="compound">‘CAS No’ or ‘INCI / chemical name’ or ‘EC number‘ or ‘ SMILES’</label>
			<input bind:value={inputVal} class="border m-1" type="text" id="compound" name="compound" />
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
