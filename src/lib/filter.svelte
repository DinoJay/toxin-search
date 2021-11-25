<script>
	import Slider from '@bulatdashiev/svelte-slider';
</script>

<div class="m-3 flex flex-wrap">
	<fieldset>
		<legend class="text-xl">General</legend>
		<div class="text-lg p-2 flex flex-col">
			<label class="" for="type-of-study">Type of study:</label>
			<select class="border p-1" name="type-of-study" id="type">
				<option value="in-vivo">In Vivo</option>
				<option value="in-vitro"> In Vitro</option>
			</select>
		</div>
		<div class="text-lg p-2 flex flex-col">
			<label class="" for="guideline">Guideline:</label>
			<select class="border p-1" name="guideline" id="type">
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
				<label class="mr-2" for="exposure-time">Purity (%):</label>
				<div class="w-40">
					<Slider min="0" max="50" step="10" range />
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
		<div class="text-lg p-2 flex flex-col">
			<label class="" for="sex">Sex:</label>
			<select class="border p-1" name="sex" id="type">
				<option value="open">Female</option>
				<option value="semi-occluded">Male </option>
			</select>
		</div>
	</fieldset>

	<fieldset class="flex">
		<legend class="text-xl">Test Conditions</legend>
		<div>
			<div class="text-lg p-2 justify-center flex flex-col">
				<label class="mr-2" for="observation">Observation period (days):</label>
				<div class="w-40">
					<Slider min="0" max="50" step="10" range />
				</div>
			</div>
			<div class="text-lg p-2 flex justify-center flex-col">
				<label class="mr-2" for="exposure-time">Exposure time (hours):</label>
				<div class="w-40">
					<Slider min="0" max="50" step="10" range />
				</div>
			</div>
		</div>
		<div>
			<div class="text-lg p-2 flex flex-col justify-center">
				<label class="mr-2" for="vehicle-concentration">Vehicle Concentration (%):</label>
				<div class="w-40">
					<Slider min="0" max="50" step="10" range />
				</div>
			</div>

			<div class="text-lg p-2 flex flex-col">
				<label class="" for="species">Target Organ:</label>
				<input class="border p-1" name="species" id="species" />
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
			<label class="mr-2" for="observation">Year:</label>
			<div class="w-40">
				<Slider min="0" max="50" step="10" range />
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
