<script lang="ts">
	export let stepIndex: number;

	const totalSteps = 4;
</script>

<div class="text-center">
	<nav aria-label="Progress" class="inline-block">
		<ol role="list" class="flex items-center">
			{#each Array.from(Array(totalSteps).keys()) as step}
				{#if stepIndex > step}
					<li class="relative pr-10 sm:pr-20">
						<!-- Completed Step -->

						{#if step + 1 === stepIndex}
							<div class="absolute inset-0 flex items-center" aria-hidden="true">
								<div
									class="h-0.5 w-full bg-gradient-to-r from-teal-600 via-teal-600 to-indigo-950"
								/>
							</div>
						{:else}
							<div class="absolute inset-0 flex items-center" aria-hidden="true">
								<div class="h-0.5 w-full bg-teal-600" />
							</div>
						{/if}
						<a
							href="/"
							class="relative flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 hover:bg-teal-500"
						>
							<svg
								class="h-4 text-white"
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

							<span class="sr-only">Step 1</span>
						</a>
					</li>
				{/if}

				{#if stepIndex === step}
					<li class="relative pr-10 sm:pr-20 last:pr-0">
						<!-- Current Step -->
						{#if step !== totalSteps - 1}
							<div class="absolute inset-0 flex items-center" aria-hidden="true">
								<div
									class="h-0.5 w-full bg-gradient-to-r from-indigo-950 via-indigo-950 to-gray-300"
								/>
							</div>
						{/if}
						<a
							href="/"
							class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-950"
							aria-current="step"
						>
							<span
								class="flex items-center justify-center border border-white h-4 w-4 rounded-full bg-indigo-950 relative z-0"
								aria-hidden="true"
							>
								<span class="h-1 w-1 rounded-full bg-white relative z-10" aria-hidden="true" />
							</span>
							<span class="sr-only">Step 2</span>
						</a>
					</li>
				{/if}

				{#if stepIndex < step}
					<li class="relative pr-10 sm:pr-20">
						<!-- Upcoming Step -->
						{#if step !== totalSteps - 1}
							<div class="absolute inset-0 flex items-center" aria-hidden="true">
								<div class="h-0.5 w-full bg-gray-300" />
							</div>
						{/if}
						<a
							href="/"
							class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-300"
						>
							<span
								class="h-1 w-1 rounded-full bg-white group-hover:bg-gray-300"
								aria-hidden="true"
							/>
							<span class="sr-only">Step 3</span>
						</a>
					</li>
				{/if}
			{/each}
		</ol>
	</nav>
</div>
