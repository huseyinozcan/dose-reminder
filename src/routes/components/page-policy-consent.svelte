<script lang="ts">
	import {store, Page, DoseDetails} from '../state';
	import Header from "./header.svelte";
	let consent = true;
</script>

<header class="w-full bg-gray-100 p-9">

	<Header />

	<div class="mb-8 text-center">
		<nav aria-label="Progress" class="inline-block">
			<ol role="list" class="flex items-center">
				<li class="relative pr-10 sm:pr-20">
					<!-- Completed Step -->
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="h-0.5 w-full bg-gradient-to-r from-teal-600 via-teal-600 to-indigo-950"></div>
					</div>
					<a href="/" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 hover:bg-teal-500">
						<svg class="h-4 text-white" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.64681 5.57164H0.497223L4.90664 11.2409H6.84485L13.3863 0.677673H10.479L5.82729 8.33359L3.64681 5.57164Z" fill="white"/>
						</svg>

						<span class="sr-only">Step 1</span>
					</a>
				</li>
				<li class="relative pr-10 sm:pr-20">
					<!-- Current Step -->
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="h-0.5 w-full bg-gradient-to-r from-indigo-950 via-indigo-950 to-gray-300"></div>
					</div>
					<a href="/" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-950" aria-current="step">
						<span class="flex items-center justify-center border border-white h-4 w-4 rounded-full bg-indigo-950 relative z-0" aria-hidden="true">
							<span class="h-1 w-1 rounded-full bg-white relative z-10" aria-hidden="true"></span>
						</span>
						<span class="sr-only">Step 2</span>
					</a>
				</li>
				<li class="relative pr-10 sm:pr-20">
					<!-- Upcoming Step -->
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="h-0.5 w-full bg-gray-300"></div>
					</div>
					<a href="/" class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-300">
						<span class="h-1 w-1 rounded-full bg-white group-hover:bg-gray-300" aria-hidden="true"></span>
						<span class="sr-only">Step 3</span>
					</a>
				</li>
				<li class="relative">
					<!-- Upcoming Step -->
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="h-0.5 w-full bg-gray-300"></div>
					</div>
					<a href="/" class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-300">
						<span class="h-1 w-1 rounded-full bg-white group-hover:bg-gray-300" aria-hidden="true"></span>
						<span class="sr-only">Step 4</span>
					</a>
				</li>
			</ol>
		</nav>
	</div>

	<div class="text-center">
		<img src="/img/image-step-2.png" alt="privacy policy consent">
	</div>
</header>

<main class="flex-1 flex flex-col w-full pb-6 px-[1.875rem] bg-white">
	<div class="flex-1 flex flex-col justify-center items-center text-center gap-y-6">
		<h1 class="h1">Getting Started</h1>

		<p class="text-sm leading-relaxed max-w-xs">To help you get off to a good start with <span class="font-bold">SogroyaⓇ</span>,
			you can choose to set up a weekly reminders directly in your calendar.</p>
		<p class="text-sm leading-relaxed">If you would like to set up a reminder,
			please check the box below to allow us to calculate the necessary input.</p>
	</div>
	<div>
		<label for="custom-checkbox" class="flex cursor-pointer mb-5">
			<span class="bg-teal-600 flex items-center justify-center w-5 h-5 rounded-full">
				<input bind:checked={consent} type="checkbox" id="custom-checkbox" class="peer/checkbox hidden" />
				<span class="hidden peer-checked/checkbox:block">
					<svg class=" h-3 w-3 text-white" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.64681 5.57164H0.497223L4.90664 11.2409H6.84485L13.3863 0.677673H10.479L5.82729 8.33359L3.64681 5.57164Z" fill="white"/>
					</svg>
				</span>
			</span>
			<span class="ml-3 text-xs leading-4">
				<span class="block">Yes I consent to use the calendar function.</span>
				<span class="block">Read more about our <a href="/">Privacy policy</a>.</span>
			</span>
		</label>
		<div class="flex gap-3">
			<button class="grow btn btn-secondary" on:click={() => store.setPage(Page.DOSE_SELECTION)}>Back</button
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
