<script lang="ts">
	import { store, Page, DoseDetails } from '../state';
</script>

<header class="bg-gray-100 p-9">
	<div class="flex items-center justify-between mb-8">
		<img src="/img/logo.svg" alt="Novo Nordisk" width="99" height="70">

		<ul class="text-xs flex whitespace-nowrap gap-x-4 -translate-y-1">
			<li class="font-bold">
				<a href="/">EN</a>
			</li>
			<li>
				<a href="/">TR</a>
			</li>
			<li>
				<a href="/">FR</a>
			</li>
			<li>
				<a href="/">DE</a>
			</li>
		</ul>
	</div>

	<div class="mb-10 text-center">
		<nav aria-label="Progress" class="inline-block">
			<ol role="list" class="flex items-center">
				<li class="relative pr-10 sm:pr-20">
					<!-- Current Step -->
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="h-0.5 w-full bg-gray-200"></div>
					</div>
					<a href="/" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-950" aria-current="step">
						<span class="flex items-center justify-center border border-white h-4 w-4 rounded-full bg-indigo-950 relative z-0" aria-hidden="true">
							<span class="h-1 w-1 rounded-full bg-white relative z-10" aria-hidden="true"></span>
						</span>
						<span class="sr-only">Step 3</span>
					</a>
				</li>
<!--				<li class="relative pr-10 sm:pr-20">-->
<!--					&lt;!&ndash; Completed Step &ndash;&gt;-->
<!--					<div class="absolute inset-0 flex items-center" aria-hidden="true">-->
<!--						<div class="h-0.5 w-full bg-indigo-950"></div>-->
<!--					</div>-->
<!--					<a href="/" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-950 hover:bg-blue-950">-->
<!--						<svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />-->
<!--						</svg>-->
<!--						<span class="sr-only">Step 1</span>-->
<!--					</a>-->
<!--				</li>-->

				<li class="relative pr-10 sm:pr-20">
					<!-- Upcoming Step -->
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="h-0.5 w-full bg-gray-200"></div>
					</div>
					<a href="/" class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
						<span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true"></span>
						<span class="sr-only">Step 4</span>
					</a>
				</li>
				<li class="relative pr-10 sm:pr-20">
					<!-- Upcoming Step -->
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="h-0.5 w-full bg-gray-200"></div>
					</div>
					<a href="/" class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
						<span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true"></span>
						<span class="sr-only">Step 4</span>
					</a>
				</li>
				<li class="relative pr-10 sm:pr-20">
					<!-- Upcoming Step -->
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="h-0.5 w-full bg-gray-200"></div>
					</div>
					<a href="/" class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
						<span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true"></span>
						<span class="sr-only">Step 4</span>
					</a>
				</li>
				<li class="relative">
					<!-- Upcoming Step -->
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="h-0.5 w-full bg-gray-200"></div>
					</div>
					<a href="/" class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
						<span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true"></span>
						<span class="sr-only">Step 5</span>
					</a>
				</li>
			</ol>
		</nav>
	</div>


	<div class="text-center text-blue-950 pb-3">
		<h1 class="text-2xl mb-4">Welcome!</h1>
		<p>
			<span class="inline-block">To get started let's make sure what</span>
			<span class="inline-block">
				<span class="font-bold">SogroyaⓇ</span>
				pen you have in front of you.
			</span>
		</p>
	</div>
</header>

<main class="flex-1 flex flex-col w-full pb-6 px-[1.875rem]">
	<div data-e2e="doses" class="flex-1 flex flex-col justify-center gap-5">
		{#each Object.entries(DoseDetails) as [key, value]}
			<button on:click={() => store.setDose(key)}
				class={`h-20 px-6 rounded-full relative text-left
				${key === $store.dose ? "bg-amber-500 text-white" : "bg-gray-100 text-blue-950"}`}>
				{value.label}
				<img class="absolute -right-[1.875rem] z-10 -top-5" src={value.imageURL} alt={value.label} />
			</button>
		{/each}
	</div>
	<button class="btn btn-primary w-full" on:click={() => store.setPage(Page.PRIVACY_POLICY_CONSENT)}>
		<span></span>
		<span>Let's get started</span>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
		</svg>
	</button>
</main>
