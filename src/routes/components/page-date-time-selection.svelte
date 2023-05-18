<script lang="ts">
	import { store, Page, Day } from '../state';

	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}
</script>

<h1 class="text-2xl font-bold mb-10">Page 3 (date time selection)</h1>

<!-- Day selector -->
<select bind:value={$store.day}>
	{#each Object.keys(Day) as day}
		<option value={day}>{capitalize(day)}</option>
	{/each}
</select>

<!-- AM/PM checkbox -->
<label class="flex gap-2">
	<input type="checkbox" bind:checked={$store.isAM} class="w-10 h-10" />
	<div>
		<p>AM</p>
		<p>PM</p>
	</div>
</label>

<!-- Hour selector -->
<select bind:value={$store.hour}>
	{#each Array.from(Array(12).keys()) as hour}
		<option value={hour + 1}>{hour + 1}</option>
	{/each}
</select>

<!-- Minute selector -->
<select bind:value={$store.minute}>
	{#each Array.from(Array(60).keys()) as minute}
		<option value={minute}>{minute}</option>
	{/each}
</select>

<!-- shouldNotifyDayBefore checkbox -->
<label class="flex gap-2">
	<input type="checkbox" bind:checked={$store.shouldNotifyDayBefore} class="w-10 h-10" />
	<div>
		<p>I would like to be informed the day before</p>
	</div>
</label>

<div class="flex gap-3">
	<button class="btn btn-secondary" on:click={() => store.setPage(Page.PRIVACY_POLICY_CONSENT)}>
		Back
	</button>
	<button class="btn btn-primary" on:click={() => store.setPage(Page.DOWNLOAD_CALENDAR_FILE)}>
		Confirm
	</button>
</div>
