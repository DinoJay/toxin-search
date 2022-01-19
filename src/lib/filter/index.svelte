<script>
	import Tab from '$lib/Tab.svelte';
	import HealthEffectFilter from './HealthEffectFilter.svelte';
	import ChemicalCompoundFilter from './ChemicalCompoundFilter.svelte';
	import CompoundInfo from './CompoundInfo.svelte';
	import ToxicologicalData from './ToxicologicalData.svelte';
	import CompoundList from './CompoundList.svelte';
	import SafetyAssessment from './SafetyAssessment.svelte';

	let promise = null;
	$: console.log('props ', $$props);
</script>

<div>
	<div class="flex mt-2">
		<div class="p-2 border-2 mr-1 " style="max-width:50%">
			<ChemicalCompoundFilter {...$$props} bind:promise />
			<!-- <EndpointTypeFilter /> -->
			<!-- <TestSubstanceFilter /> -->
		</div>
		<div class="p-2 border-2 min-w-[50%]">
			<HealthEffectFilter {...$$props} bind:promise />
		</div>
	</div>

	{#if promise}
		{#await promise}
			<p>...waiting</p>
		{:then res}
			{#if res.type === 'compound'}
				<div class="mt-6">
					<CompoundInfo compound={res} imgSrc={res.imgSrc} />
					<ToxicologicalData {...$$props} compound={res} />
				</div>
			{/if}
			{#if res.type === 'health-effect'}
				<div class="mt-3">
					<CompoundList {...$$props} />
				</div>

				<div class="mt-6">
					<SafetyAssessment />
				</div>
			{/if}
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
