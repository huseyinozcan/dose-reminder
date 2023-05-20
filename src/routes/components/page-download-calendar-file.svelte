<script lang="ts">
	import { store } from '../state';
	import Steps from './steps.svelte';
	import { Page } from '../types';
	import PageLayout from './page-layout.svelte';
	import { i18n } from '../i18n/store';

	let clouds = [
		{ id: 1, x: 92, y: 32 },
		{ id: 2, x: 0, y: 84 },
		{ id: 3, x: 80, y: 192 }
	];
</script>

<PageLayout>
	<slot slot="header">
		<div class="mb-8 lg:mb-0">
			<Steps stepIndex={3} />
		</div>

		<div class="text-center lg:hidden">
			<img src="/img/image-step-4.png" width="682" height="397" alt="privacy policy consent" />
		</div>
	</slot>

	<slot>
		<div class="flex-1 flex flex-col items-center text-center gap-y-6 pt-12">
			<h1 class="h1">{$i18n.text.downloadCalendarFile.title}</h1>

			<p class="text-sm leading-relaxed max-w-[17rem]">
				{$i18n.text.downloadCalendarFile.description}
			</p>
		</div>
		<div class="flex gap-3">
			<button
				class="grow btn btn-secondary"
				on:click={() => store.setPage(Page.DATE_TIME_SELECTION)}
			>
				<svg
					class="text-indigo-950"
					width="18"
					height="8"
					viewBox="0 0 18 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z"
						fill="#001965"
					/>
				</svg>
			</button>
			<button class="grow btn btn-primary" on:click={store.downloadISCFile}
				>{$i18n.text.downloadCalendarFile.proceedButton}</button
			>
		</div>
	</slot>

	<slot slot="desktop-image">
		<div class="relative w-full h-96">
			<img
				class="mx-auto z-10 animate-pulse"
				src="/img/laptop.svg"
				alt="Laptop"
				width="500"
				height="291"
			/>
			{#each clouds as cloud}
				<img
					class="absolute z-20 animate-cloud"
					style="right: {cloud.x}%; top: {cloud.y}px;"
					src="/img/cloud-{cloud.id}.svg"
					alt="clouds"
				/>
			{/each}
		</div>
	</slot>
</PageLayout>
