<script lang="ts">
	import { store, Page } from '../state';
	import Steps from './steps.svelte';
	import Header from './header.svelte';
</script>

<header class="w-full bg-gray-100 p-9">
	<Header />

	<div class="mb-8">
		<Steps stepIndex={3} />
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

<main>
	<h1 class="text-2xl font-bold mb-10">Page 4 (download calendar file)</h1>
	<div class="flex gap-3">
		<button class="btn btn-secondary" on:click={() => store.setPage(Page.DATE_TIME_SELECTION)}>
			Back
		</button>
		<button class="btn btn-primary" on:click={store.downloadISCFile}>Download to calendar</button>
	</div>
</main>
