<script>
	import Slider from '@bulatdashiev/svelte-slider';
	export let typeOfStudy = null;
	export let guideline = null;
	let observationDays = [2, 40];
	let exposureTime = [0, 100];
	let vehicleConcentration = [0, 100];
	let year = [1960, 2021];
	let purity = [0, 100];

	// $: console.log('observation days', observationDays);
</script>

<div class="m-3 flex flex-wrap">
	<fieldset>
		<legend class="text-xl">General</legend>
		<div class="text-lg p-2 flex flex-col">
			<label class="" for="type-of-study">Type of study:</label>
			<select
				class="border p-1"
				name="type-of-study"
				id="type"
				on:change={(e) => {
					typeOfStudy = e.target.value === 'all' ? null : e.target.value;
				}}
			>
				<option value="all">All</option>
				<option value="in vivo">In Vivo</option>
				<option value="in vitro"> In Vitro</option>
			</select>
		</div>
		<div class="text-lg p-2 flex flex-col">
			<label class="" for="guideline">Guideline:</label>
			<select
				class="border p-1"
				name="guideline"
				id="type"
				on:change={(e) => (guideline = e.target.value === 'all' ? null : e.target.value)}
			>
				<option value="all">All</option>
				<option value="oecd">OECD</option>
				<option value="non-oecd">Non OECD</option>
			</select>
		</div>
	</fieldset>
	<fieldset class="flex">
		<legend class="text-xl">Test Substance</legend>
		<div>
			<div class="text-lg p-2 flex flex-col">
				<label class="" for="species">Compound:</label>
				<input class="border p-1" name="species" id="species" />
			</div>
			<div class="text-lg p-2 flex justify-center flex-col">
				<label class="mr-2" for="purity">Purity ({purity[0]}%):</label>
				<div class="w-40">
					<Slider bind:value={purity} />
				</div>
			</div>
		</div>
	</fieldset>
	<fieldset class="">
		<legend class="text-xl">Test Species</legend>
		<div class="text-lg p-2 flex flex-col">
			<label class="" for="species">Species:</label>
			<input class="border p-1" name="species" id="species" />
		</div>
		<div class="flex">
			<div class="text-lg p-2 flex flex-col">
				<label class="" for="species">Target Organ:</label>
				<input class="border p-1" name="species" id="species" />
			</div>
			<div class="text-lg p-2 flex flex-col">
				<label class="" for="sex">Sex:</label>
				<select class="border p-1" name="sex" id="type">
					<option value="open">Female</option>
					<option value="semi-occluded">Male </option>
				</select>
			</div>
		</div>
	</fieldset>

	<fieldset class="flex">
		<legend class="text-xl">Test Conditions</legend>
		<div>
			<div class="text-lg p-2 justify-center flex flex-col">
				<label class="mr-2" for="observation">Observation period ({observationDays[0]} days):</label
				>
				<div class="w-40">
					<Slider bind:value={observationDays} />
				</div>
			</div>
			<div class="text-lg p-2 flex justify-center flex-col">
				<label class="mr-2" for="exposure-time">Exposure time ({exposureTime[0]} hour(s)):</label>
				<div class="w-40">
					<Slider bind:value={exposureTime} />
				</div>
			</div>
		</div>
		<div>
			<div class="text-lg p-2 flex flex-col justify-center">
				<label class="mr-2" for="vehicle-concentration"
					>Vehicle Concentration ({vehicleConcentration[0]}%):</label
				>
				<div class="w-40">
					<Slider bind:value={vehicleConcentration} />
				</div>
			</div>
		</div>
	</fieldset>
	<fieldset class="">
		<legend class="text-xl">Route of Exposure</legend>
		<div class="text-lg p-2 flex flex-col">
			<label class="" for="patching-technique">Oral:</label>
			<select class="border p-1" name="oral" id="type">
				<option value="gavage">Gavage</option>
				<option value="drink-water">Drink Water </option>
				<option value="feed">Feed</option>
			</select>
		</div>
		<div class="text-lg p-2 flex flex-col">
			<label class="" for="patching-technique">Patching Technique:</label>
			<select class="border p-1" name="patching-technique" id="type">
				<option value="open">Open</option>
				<option value="semi-occluded">Semi-Occluded </option>
				<option value="occluded">Occluded</option>
			</select>
		</div>
	</fieldset>
	<fieldset class="">
		<legend class="text-xl">Reliability of Test</legend>
		<div class="text-lg p-2 flex flex-col justify-center">
			<label class="mr-2" for="observation">Year ({year[0]} - {year[1]}):</label>
			<div class="w-40">
				<Slider bind:value={year} order range min={1960} max={2021} />
			</div>
		</div>
		<div class="text-lg p-2 flex flex-col justify-center">
			<label class="mr-2" for="observation">Preliminary Study:</label>
			<input type="checkbox" class="form-checkbox" checked />
		</div>
	</fieldset>
</div>

<style>
	fieldset {
		@apply ml-4;
		@apply mb-3;
		@apply border-2;
	}
	fieldset legend {
		@apply mx-3;
	}
</style>
