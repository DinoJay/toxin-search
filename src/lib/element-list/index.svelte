<script>
	import { group } from 'd3-array';
	import { v4 as uuidv4 } from 'uuid';

	import VerticalList from './verticalList.svelte';

	export let data;
	let groupBy = 'compound';

	const groupData = (data, attr) => {
		const groupedData = [...group(data, (d) => d[attr])].map(([key, values]) => ({
			id: uuidv4(),
			key,
			values
		}));

		return groupedData;
	};
	let type = 'all';
	let grData = groupData(data, groupBy);
	let offset = 10;
	let numPages = Math.ceil(grData.length / offset);
	let curPage = 0;
	let numPagesArray = Array.from(Array(numPages));
	$: {
		console.log(
			'type',
			type,
			data.filter((d) => d.type === type)
		);
		const fData = type === 'all' ? data : data.filter((d) => d.type === type);

		grData = groupData(fData, groupBy);
		numPages = Math.ceil(grData.length / offset);
		curPage = 0;
		numPagesArray = Array.from(Array(numPages));
	}
</script>

<div class="p-2 flex flex-col">
	<form class="flex items-center p-2" on:submit={(e) => e.preventDefault()}>
		<p class="mr-2">Group by:</p>
		<input
			on:click={(e) => (groupBy = 'compound')}
			class="mr-1"
			type="radio"
			id="compound"
			name="compound"
			value="compound"
			checked={groupBy === 'compound'}
		/>
		<label for="compound">Compound</label>
		<input
			on:click={(e) => (groupBy = 'guideline')}
			class="ml-2 mr-1"
			type="radio"
			id="guideline"
			name="guideline"
			value="guideline"
			checked={groupBy === 'guideline'}
		/>
		<label for="oecd">Guideline</label>
		<label class="ml-6" for="cars">Type:</label>

		<select class="ml-2 border p-1" name="type" id="type" bind:value={type}>
			<option value="all">All</option>
			<option value="acute toxicity">Acute Toxicity</option>
			<option value="irritation corosivity">Irritation Corosivity</option>
			<option value="repeated toxicity">Repeated Toxicity</option>
		</select>
	</form>
	<VerticalList
		className="flex-grow"
		data={grData.slice(curPage * offset, curPage * offset + offset)}
		secAttr={groupBy === 'compound' ? 'guideline' : 'compound'}
	/>
	<div class="mt-3">
		{#each numPagesArray as n, i}
			<button
				on:click={() => (curPage = i)}
				class="border px-2 mr-1 {curPage === i && 'bg-blue-500'}">{i}</button
			>
		{/each}
	</div>
</div>
