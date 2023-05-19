<script lang="ts">
	import { store, Page, Day } from '../state';
	import Steps from './steps.svelte';
	import Header from './header.svelte';

	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}
</script>

<header class="w-full bg-gray-100 p-9">
	<Header />

	<div class="mb-8">
		<Steps stepIndex={2} />
	</div>

	<div class="text-center pb-3">
		<h1 class="h1 mb-4">Welcome!</h1>
		<p>
			<span class="inline-block">To get started let's make sure what</span>
			<span class="inline-block">
				<span class="font-bold">SogroyaⓇ</span>
				pen you have in front of you.
			</span>
		</p>
	</div>
</header>
<h1 class="text-2xl font-bold mb-10">Page 3 (date time selection)</h1>

<div class="flex flex-col gap-5">
	<h2 class="underline">Day:</h2>
	<!-- Day selector -->
	<select bind:value={$store.day}>
		{#each Object.keys(Day) as day}
			<option value={day}>{capitalize(day)}</option>
		{/each}
	</select>

	<h2 class="underline">Time:</h2>

	<!-- AM/PM checkbox -->
	<label class="flex gap-2">
		<input type="checkbox" bind:checked={$store.isAM} class="w-6 h-6" />
		<div>
			<p>Is AM?</p>
		</div>
	</label>

	<div class="flex flex gap-6">
		<!-- Hour selector -->
		<h3>Hour:</h3>
		<select bind:value={$store.hour}>
			{#each Array.from(Array(12).keys()) as hour}
				<option value={hour + 1}>{hour + 1}</option>
			{/each}
		</select>

		<h3>Minute:</h3>
		<!-- Minute selector -->
		<select bind:value={$store.minute}>
			{#each Array.from(Array(60).keys()) as minute}
				<option value={minute}>{minute}</option>
			{/each}
		</select>
	</div>

	<!-- shouldNotifyDayBefore checkbox -->
	<label class="flex gap-2">
		<input type="checkbox" bind:checked={$store.shouldNotifyDayBefore} class="w-6 h-6" />
		<div>
			<p>I would like to be informed the day before</p>
		</div>
	</label>
</div>

<div class="flex gap-3">
	<button class="btn btn-secondary" on:click={() => store.setPage(Page.PRIVACY_POLICY_CONSENT)}>
		Back
	</button>
	<button class="btn btn-primary" on:click={() => store.setPage(Page.DOWNLOAD_CALENDAR_FILE)}>
		Confirm
	</button>
</div>
