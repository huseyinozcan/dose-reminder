<script lang="ts">
	import { store, Page } from '../state';
	let consent = true;
</script>

<h1 class="text-2xl font-bold mb-10">Page 2 (privacy policy consent)</h1>
<label class="flex gap-2">
	<input type="checkbox" bind:checked={consent} class="w-10 h-10" />
	<div>
		<p>Yes I consent to use the calendar function.</p>
		<p>Read more about our <a href="#">Privacy policy</a>.</p>
	</div>
</label>
<div class="flex gap-3">
	<button class="btn btn-secondary" on:click={() => store.setPage(Page.DOSE_SELECTION)}>Back</button
	>
	<button
		class="btn btn-primary"
		disabled={!consent}
		on:click={() => store.setPage(Page.DATE_TIME_SELECTION)}
	>
		Yes, set reminder
	</button>
</div>
