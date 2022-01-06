<script>
	import Tab from '$lib/Tab.svelte';
	import HealthEffectFilter from './HealthEffectFilter.svelte';
	import ChemicalCompoundFilter from './ChemicalCompoundFilter.svelte';
	import AttrElement from '$lib/element-list/attrElement.svelte';
	import CategoryElement from '$lib/element-list/categoryElement.svelte';

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
			<HealthEffectFilter {...$$props} />
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
