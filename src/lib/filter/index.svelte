<script>
	import GeneralFilter from './GeneralFilter.svelte';
	import ReliabilityOfTestFilter from './ReliabilityOfTestFilter.svelte';
	import TestConditionsFilter from './TestConditionsFilter.svelte';
	import TestSpeciesFilter from './TestSpeciesFilter.svelte';
	import Tab from '$lib/Tab.svelte';
	import HealthEffectFilter from './HealthEffectFilter.svelte';
	import ChemicalCompoundFilter from './ChemicalCompoundFilter.svelte';

	$: console.log('props ', $$props);
</script>

<div class="m-3">
	<Tab>
		<div class="flex flex-wrap" slot="tab1">
			<ChemicalCompoundFilter {...$$props} />
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
