<script lang="ts">
	import { store, Page } from '../state';
</script>

<h1 class="text-2xl font-bold mb-10">Page 3 (date time selection)</h1>
<div class="flex gap-3">
	<button class="btn btn-secondary" on:click={() => store.setPage(Page.PRIVACY_POLICY_CONSENT)}
		>Back</button
	>
	<button class="btn btn-primary" on:click={() => store.setPage(Page.DOWNLOAD_CALENDAR_FILE)}
		>Confirm</button
	>
</div>
