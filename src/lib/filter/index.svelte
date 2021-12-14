<script>
	import GeneralFilter from './GeneralFilter.svelte';
	import ReliabilityOfTestFilter from './ReliabilityOfTestFilter.svelte';
	import RouteOfExposureFilter from './RouteOfExposureFilter.svelte';
	import TestConditionsFilter from './TestConditionsFilter.svelte';
	import TestSpeciesFilter from './TestSpeciesFilter.svelte';
	import TestSubstanceFilter from './TestSubstanceFilter.svelte';
	import EndpointTypeFilter from './EndpointTypeFilter.svelte';
	export let guideline = null;

	// $: console.log('observation days', observationDays);
</script>

<div class="m-3">
	<h2 class="text-xl mb-1">Filter:</h2>
	<div class=" flex flex-wrap">
		<EndpointTypeFilter />
		<GeneralFilter />
		<TestSubstanceFilter />
		<TestSpeciesFilter />
		<TestConditionsFilter />
		<RouteOfExposureFilter />
		<ReliabilityOfTestFilter />
	</div>
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
