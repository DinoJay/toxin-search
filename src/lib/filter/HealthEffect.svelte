<script>
	import Expandable from '$lib/Expandable.svelte';
	import { constructQuery } from '$lib/sparql.js';
	import CompoundList from './CompoundList.svelte';
	import SafetyAssessment from './SafetyAssessment.svelte';
	export let openId;
	export let promise;
	export let onClick;

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
	let val = '';
	let open = true;
	$: valInList = data.find((d) => d.state.toLowerCase() === val.toLowerCase());

	const sparqlQuery = ` 
		PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
		PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
		PREFIX ont: <http://ontologies.vub.be/oecd#>

		SELECT DISTINCT *
		{
			?test a ont:Test .
			?test ont:compound ?compound .
			?compound rdfs:label ?compoundLabel .
			?test rdf:type ?type .
			OPTIONAL { ?test ont:GLP ?glp .  }
			OPTIONAL { ?test ont:Ref_in_dossier ?ref_in_dossier .  }
			OPTIONAL { ?test ont:SCCS_comment_to_test ?scss .  }
			OPTIONAL { ?test ont:additional_info ?additional_info .  }
			OPTIONAL { ?test ont:administration_scheme ?administration_scheme .  }
			OPTIONAL { ?test ont:chemical_batch_nr ?chemical_batch_nr .  }
			OPTIONAL { ?test ont:conclusion ?conclusion .  }
			OPTIONAL { ?test ont:critical_effect ?critical_effect .  }
			OPTIONAL { ?test ont:dermal ?dermal .  }
			OPTIONAL { ?test ont:description_of_pod ?description_of_pod .  }
			OPTIONAL { ?test ont:dose_levels ?dose_levels .  }
			OPTIONAL { ?test ont:dose_levels_unity ?dose_levels_unity .  }
			OPTIONAL { ?test ont:exposure_period ?exposure_period .  }
			OPTIONAL { ?test ont:feed ?feed .  }
			OPTIONAL { ?test ont:moribound_or_dead_animals_prior_to_study_termination ?moribound_or_dead_animals_prior_to_study_termination .  }
			OPTIONAL { ?test ont:mortality_rate ?mortality_rate .  }
			OPTIONAL { ?test ont:observation_period ?observation_period .  }
			OPTIONAL { ?test ont:observations ?observations .  }
			OPTIONAL { ?test ont:oecd_test_nr ?oecd_test_nr .  }
			OPTIONAL { ?test ont:pod ?pod .  }
			OPTIONAL { ?test ont:preliminary_test ?preliminary_test .  }
			OPTIONAL { ?test ont:purity ?purity .  }
			OPTIONAL { ?test ont:sex ?sex .  }
			OPTIONAL { ?test ont:species ?species .  }
			OPTIONAL { ?test ont:species_strain ?species_strain .  }
		}	
	`;

	let oecd = true;
	let nonOecd = true;

	let invivo = true;
	let invitro = true;
	let insilico = true;
	let inchemico = true;
</script>

<Expandable open={openId === 'HealthEffect'} {onClick}>
	<h2 class="text-xl" slot="title">Health Effect</h2>
	<div class="text-lg">
		<p class="mb-3">Look for compounds with a specific toxicological outcome</p>
		<form on:submit={(e) => e.preventDefault()}>
			<div class="mb-3">
				<div class="">
					<label for="toxi-outcome">Type the health effect or parameter of interest:</label>
					<input
						class="ml-1 p-1 border"
						list="outcomes"
						name="toxi-outcome"
						id="toxi-outcome"
						bind:value={val}
					/>
					<datalist id="outcomes">
						{#each data as d}
							<option value={d.state}>{d.state}</option>
						{/each}
					</datalist>
				</div>
			</div>
			<div class="mb-3">
				<p>Chose the type(s) of study:</p>
				<div>
					<input type="checkbox" id="in-vivo" name="in-vivo" bind:checked={invivo} />
					<label for="in-vivo">In vivo</label>
				</div>
				<div>
					<input type="checkbox" id="in-vitro" name="in-vitro" bind:checked={invitro} />
					<label for="in-vitro">In vitro</label>
				</div>
				<div>
					<input type="checkbox" id="in-silico" name="in-silico" bind:checked={insilico} />
					<label for="in-silico">In silico</label>
				</div>
				<div>
					<input type="checkbox" id="in-chemico" name="in-chemico" bind:checked={inchemico} />
					<label for="in-chemico">In chemico</label>
				</div>
			</div>

			<div>
				<p>Chose the type of guideline(s):</p>
				<div>
					<input type="checkbox" id="oecd" name="oecd" bind:checked={oecd} />
					<label for="oecd">OECD</label>
				</div>
				<div>
					<input type="checkbox" id="non-oecd" name="non-oecd" bind:checked={nonOecd} />
					<label for="non-oecd">Non-OECD</label>
				</div>
			</div>

			<button
				class="mt-3 border px-2 py-1 w-full {!valInList && 'opacity-50'}"
				disabled={!valInList}
				on:click={() => {
					promise = fetch(constructQuery('repeated-toxicity', sparqlQuery))
						.then((res) => res.json())
						.then((res) => ({
							...res,
							compoundLabel: decodeURI(res.compoundLabel),
							oecd,
							nonOecd,
							invivo,
							invitro,
							insilico,
							inchemico,
							type: 'health-effect'
						}));
				}}>Go</button
			>
		</form>
	</div>
</Expandable>

<style>
	:global([role='listbox']) {
		margin: 20rem;
	}
</style>
