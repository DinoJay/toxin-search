<script>
	let type = 'all';
	let endpointTypeEnabled = true;
	import chemspider from 'chemspider-json-api';
	import { onMount } from 'svelte';

	onMount(() => {
		const search = chemspider.queryJSON('C1=CC(=C(C=C1O)O)O').then((res) => {
			console.log('res§', res);
		});
		console.log('search', search);
	});
</script>

<fieldset class=" pl-2 {!endpointTypeEnabled && 'opacity-50'}" disabled={!endpointTypeEnabled}>
	<legend class="text-xl">
		<span>Endpoint Type</span>
		<input type="checkbox" class="form-checkbox" bind:checked={endpointTypeEnabled} />
	</legend>
	<div>
		<label for="compound">Chemical Compound:</label>
		<input class="border m-1" type="text" id="compound" name="compound" />
	</div>
</fieldset>

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
