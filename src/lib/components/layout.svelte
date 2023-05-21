<script>
	import Header from './header.svelte';
</script>

<section class="lg:grid lg:grid-cols-2">
	<div>
		<div
			class="lg:bg-white max-w-xl lg:max-w-none mx-auto lg:mx-0 shadow lg:shadow-none h-screen flex flex-col items-center"
		>
			<header class="w-full bg-gray-100 lg:bg-white p-9">
				<Header />

				<slot name="header" />
			</header>

			<main class="flex-1 flex flex-col w-full py-6 px-[1.875rem] lg:px-0 bg-white">
				<div class="flex-1 flex flex-col mx-auto w-full max-w-sm">
					<slot />
				</div>
			</main>
		</div>
	</div>

	<div class="hidden lg:flex flex-col justify-center lg:px-10 xl:px-24 overflow-hidden">
		<slot name="desktop-image" />
	</div>
</section>
