<script lang="ts">
	import { store, Page } from '../state';
	import Header from './header.svelte';
	import Steps from './steps.svelte';

	let consent = true;
</script>

<header class="w-full bg-gray-100 p-9">
	<Header />

	<div class="mb-8">
		<Steps stepIndex={1} />
	</div>

	<div class="text-center">
		<img src="/img/image-step-2.png" alt="privacy policy consent" />
	</div>
</header>

<main class="flex-1 flex flex-col w-full pb-6 px-[1.875rem] bg-white">
	<div class="flex-1 flex flex-col justify-center items-center text-center gap-y-6">
		<h1 class="h1">Getting Started</h1>

		<p class="text-sm leading-relaxed max-w-xs">
			To help you get off to a good start with <span class="font-bold">SogroyaⓇ</span>, you can
			choose to set up a weekly reminders directly in your calendar.
		</p>
		<p class="text-sm leading-relaxed">
			If you would like to set up a reminder, please check the box below to allow us to calculate
			the necessary input.
		</p>
	</div>
	<div>
		<label for="custom-checkbox" class="flex cursor-pointer mb-5">
			<span class="bg-teal-600 flex items-center justify-center w-5 h-5 rounded-full">
				<input
					bind:checked={consent}
					type="checkbox"
					id="custom-checkbox"
					class="peer/checkbox hidden"
				/>
				<span class="hidden peer-checked/checkbox:block">
					<svg
						class=" h-3 w-3 text-white"
						width="14"
						height="12"
						viewBox="0 0 14 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.64681 5.57164H0.497223L4.90664 11.2409H6.84485L13.3863 0.677673H10.479L5.82729 8.33359L3.64681 5.57164Z"
							fill="white"
						/>
					</svg>
				</span>
			</span>
			<span class="ml-3 text-xs leading-4">
				<span class="block">Yes I consent to use the calendar function.</span>
				<span class="block">Read more about our <a href="/">Privacy policy</a>.</span>
			</span>
		</label>
		<div class="flex gap-3">
			<button class="grow btn btn-secondary" on:click={() => store.setPage(Page.DOSE_SELECTION)}
				>Back</button
			>
			<button
				class="grow btn btn-primary"
				disabled={!consent}
				on:click={() => store.setPage(Page.DATE_TIME_SELECTION)}
			>
				Yes, set reminder
			</button>
		</div>
	</div>
</main>
