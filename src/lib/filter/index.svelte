<script>
	import Tab from '$lib/Tab.svelte';
	import HealthEffectFilter from './HealthEffectFilter.svelte';
	import ChemicalCompoundFilter from './ChemicalCompoundFilter.svelte';
	import AttrElement from '$lib/element-list/attrElement.svelte';
	import CategoryElement from '$lib/element-list/categoryElement.svelte';

	$: console.log('props ', $$props);
</script>

<div class="flex mt-2">
	<div class="p-2 border-2 mr-1 " style="max-width:50%">
		<ChemicalCompoundFilter {...$$props} />
		<!-- <EndpointTypeFilter /> -->
		<!-- <TestSubstanceFilter /> -->
	</div>
	<div class="p-2 border-2 min-w-[50%]">
		<HealthEffectFilter {...$$props} />
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
