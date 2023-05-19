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
		<svg
			class="w-6 text-indigo-950"
			width="18"
			height="8"
			viewBox="0 0 18 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z"
				fill="#001965"
			/>
		</svg>
	</button>
	<button class="btn btn-primary" on:click={() => store.setPage(Page.DOWNLOAD_CALENDAR_FILE)}>
		Confirm
	</button>
</div>
