<script>
	export let acuteToxicityCsv = [];
	export let irritationCorosivityCsv = [];
	export let repeatedToxicityCsv = [];
	export let typeOfStudy;
	export let guideline;
	import ElementList from '$lib/element-list/index.svelte';

	$: data = [...acuteToxicityCsv, ...irritationCorosivityCsv, ...repeatedToxicityCsv].map((d) => {
		const values =
			typeOfStudy !== null ? d.values.filter((e) => e.type_of_study === typeOfStudy) : d.values;
		return {
			...d,
			values
		};
	});
</script>

<h2>Compounds by Health Effect</h2>
<div class=" flex flex-col ">
	<ElementList {data} groupBy="compound" />
</div>

<style>
</style>
