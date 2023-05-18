<script lang="ts">
	import { store, Page } from '../state';
</script>

<h1 class="text-2xl font-bold mb-10">Page 2 (privacy policy consent)</h1>
<div class="flex gap-3">
	<button class="btn btn-secondary" on:click={() => store.setPage(Page.DOSE_SELECTION)}>Back</button
	>
	<button class="btn btn-primary" on:click={() => store.setPage(Page.DATE_TIME_SELECTION)}>
		Yes, set reminder
	</button>
</div>
