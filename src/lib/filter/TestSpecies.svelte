<script>
	import Expandable from '$lib/Expandable.svelte';
	export let openId;
	export let onClick;
</script>

<Expandable open={openId === 'TestSpecies'} {onClick}>
	<h2 class="text-xl" slot="title">Test Species</h2>
	<div class="flex">
		<div class="text-lg p-2 flex flex-col ">
			<label class="flex items-center" for="targetOrgan">
				<span class="mr-auto">Target Organ:</span>
			</label>
			<input class="border p-1" name="targetOrgan" id="targetOrgan" />
		</div>
		<div class="text-lg p-2 flex flex-col ">
			<label class="flex items-center" for="sex"><span class="mr-auto">Sex:</span> </label>
			<select class="border p-1" name="sex" id="type">
				<option value="all">All</option>
				<option value="open">Female</option>
				<option value="semi-occluded">Male </option>
			</select>
		</div>
	</div>
</Expandable>
