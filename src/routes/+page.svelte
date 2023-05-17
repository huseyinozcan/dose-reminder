<script lang="ts">
	import { store, mutateState, Page } from './state';
</script>

{#if $store.page === Page.DOSE_SELECTION}
	<h1 class="text-2xl font-bold mb-10">Page 1 (dose selection)</h1>
	<button
		class="btn btn-primary"
		on:click={() => mutateState({ page: Page.PRIVACY_POLICY_CONSENT })}>Let's get started</button
	>
{:else if $store.page === Page.PRIVACY_POLICY_CONSENT}
	<h1 class="text-2xl font-bold mb-10">Page 2 (privacy policy consent)</h1>
	<div class="flex gap-3">
		<button class="btn btn-secondary" on:click={() => mutateState({ page: Page.DOSE_SELECTION })}
			>Back</button
		>
		<button class="btn btn-primary" on:click={() => mutateState({ page: Page.DATE_TIME_SELECTION })}
			>Yes, set reminder</button
		>
	</div>
{:else if $store.page === Page.DATE_TIME_SELECTION}
	<h1 class="text-2xl font-bold mb-10">Page 3 (date time selection)</h1>
	<div class="flex gap-3">
		<button
			class="btn btn-secondary"
			on:click={() => mutateState({ page: Page.PRIVACY_POLICY_CONSENT })}>Back</button
		>
		<button
			class="btn btn-primary"
			on:click={() => mutateState({ page: Page.DOWNLOAD_CALENDAR_FILE })}>Confirm</button
		>
	</div>
{:else if $store.page === Page.DOWNLOAD_CALENDAR_FILE}
	<h1 class="text-2xl font-bold mb-10">Page 4 (download calendar file)</h1>
	<div class="flex gap-3">
		<button
			class="btn btn-secondary"
			on:click={() => mutateState({ page: Page.DATE_TIME_SELECTION })}>Back</button
		>
		<button class="btn btn-primary">Download to calendar</button>
	</div>
{/if}
