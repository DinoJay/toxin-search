<script>
	import GeneralFilter from './GeneralFilter.svelte';
	import ReliabilityOfTestFilter from './ReliabilityOfTestFilter.svelte';
	import RouteOfExposureFilter from './RouteOfExposureFilter.svelte';
	import TestConditionsFilter from './TestConditionsFilter.svelte';
	import TestSpeciesFilter from './TestSpeciesFilter.svelte';
	import TestSubstanceFilter from './TestSubstanceFilter.svelte';
	import EndpointTypeFilter from './EndpointTypeFilter.svelte';
	export let guideline = null;
	export let chemicalIdentity;
	import Tab from '$lib/Tab.svelte';
	import HealthEffectFilter from './HealthEffectFilter.svelte';
	import ChemicalCompoundFilter from './ChemicalCompoundFilter.svelte';
	let tabOpen = 0;

	// $: console.log('observation days', observationDays);
	console.log('chemical identity', chemicalIdentity);
</script>

<div class="m-3">
	<h2 class="text-xl mb-1">Filter:</h2>

	<Tab>
		<div class="flex flex-wrap" slot="tab1">
			<ChemicalCompoundFilter {chemicalIdentity} />
			<!-- <EndpointTypeFilter /> -->
			<!-- <TestSubstanceFilter /> -->
		</div>
		<div class="flex flex-wrap" slot="tab2">
			<HealthEffectFilter />
			<TestSpeciesFilter />
			<TestConditionsFilter />
			<GeneralFilter />
			<ReliabilityOfTestFilter />
		</div>
	</Tab>
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
