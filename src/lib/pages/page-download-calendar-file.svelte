<script lang="ts">
	import { logic, i18n } from '$lib/stores';
	import { Page, clouds } from '$lib/types';
	import { Layout, Steps } from '$lib/components';
</script>

<Layout>
	<slot slot="header">
		<div class="mb-8 lg:mb-0">
			<Steps stepIndex={3} />
		</div>

		<div class="text-center -m-9 py-9 overflow-hidden lg:hidden">
			<div class="relative w-full h-[12.5rem]">
				<img
					class="mx-auto relative max-h-full z-20 animate-pulse"
					src="/img/hand-mobile.svg"
					alt="Hand"
					width="156"
					height="199"
				/>
				<img
					class="absolute z-10 animate-cloud h-5"
					src="/img/cloud-1.svg"
					alt="clouds"
					style="right: 77%; top: 0;"
				/>
				<img
					class="absolute z-10 animate-cloud"
					src="/img/cloud-2.svg"
					alt="clouds"
					width="109"
					height="28"
					style="right: 4%; top: 30px;"
				/>
				<img
					class="absolute z-10 animate-cloud"
					src="/img/cloud-3.svg"
					alt="clouds"
					width="74"
					height="29"
					style="right: 68%; top: 90px;"
				/>
			</div>
		</div>
	</slot>

	<slot>
		<div
			class="flex-1 flex flex-col items-center lg:justify-center text-center gap-y-6 mb-6 pt-12 lg:pt-0"
		>
			<h1 class="h1 lg:-mt-20">{$i18n.text.downloadCalendarFile.title}</h1>

			<p class="leading-relaxed max-w-[17rem] lg:max-w-xs">
				{$i18n.text.downloadCalendarFile.description}
			</p>
		</div>
		<div class="flex gap-3">
			<button
				class="grow btn btn-secondary"
				on:click={() => logic.setPage(Page.DATE_TIME_SELECTION)}
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
			<button class="grow btn btn-primary" on:click={logic.downloadISCFile}
				>{$i18n.text.downloadCalendarFile.proceedButton}</button
			>
		</div>
	</slot>

	<slot slot="desktop-image">
		<div class="relative w-full h-96">
			<img
				class="mx-auto relative z-20 animate-pulse"
				src="/img/laptop.svg"
				alt="Laptop"
				width="500"
				height="291"
			/>
			{#each clouds as cloud}
				<img
					class="absolute z-10 animate-cloud"
					style="right: {cloud.x}%; top: {cloud.y}px;"
					src="/img/cloud-{cloud.id}.svg"
					alt="clouds"
				/>
			{/each}
		</div>
	</slot>
</Layout>
