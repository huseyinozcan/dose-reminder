<script lang="ts">
	import { store, Page, DoseDetails } from '../state';
</script>

<h1 class="text-2xl font-bold mb-10">Page 1 (dose selection)</h1>

<div data-e2e="doses" class="flex flex-col gap-3">
	{#each Object.entries(DoseDetails) as [key, value]}
		<button on:click={() => store.setDose(key)} class:selected={key === $store.dose}>
			<label>{value.label}</label>
			<img src={value.imageURL} alt={value.label} />
		</button>
	{/each}
</div>
<button class="btn btn-primary" on:click={() => store.setPage(Page.PRIVACY_POLICY_CONSENT)}>
	Let's get started
</button>

<style>
	.selected {
		@apply border-2 border-blue-500 bg-gray-800;
	}
</style>
