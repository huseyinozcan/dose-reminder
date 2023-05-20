<script lang="ts">
	import '../app.css';
	import Analytics from './analytics.svelte';
	import Header from './components/header.svelte';
</script>

<section class="lg:grid lg:grid-cols-2">
	<div>
		<div
			class="lg:bg-white max-w-xl lg:max-w-none mx-auto lg:mx-0 shadow lg:shadow-none h-screen flex flex-col items-center"
		>
			<header class="w-full bg-gray-100 p-9">
				<Header />

				<slot name="header" />
			</header>

			<main class="flex-1 flex flex-col w-full pb-6 px-[1.875rem] bg-white">
				<slot />
			</main>
		</div>
	</div>

	<div class="flex flex-col justify-center lg:px-10 xl:px-24">
		<slot name="desktop-image" />
	</div>
</section>

<Analytics />
