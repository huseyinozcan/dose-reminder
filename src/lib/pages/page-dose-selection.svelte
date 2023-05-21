<script lang="ts">
	import { logic, i18n } from '$lib/stores';
	import { DoseDetails, Page, clouds } from '$lib/types';
	import { Layout, Steps } from '$lib/components';
</script>

<Layout>
	<slot slot="header">
		<div class="mb-8 lg:mb-20">
			<Steps stepIndex={0} />
		</div>

		<div class="text-center pb-3 lg:max-w-sm lg:mx-auto">
			<h1 class="h1 mb-4 lg:mb-8">{$i18n.text.doseSelection.title}</h1>
			<p class="text-base lg:text-lg">
				<span class="inline-block">{$i18n.text.doseSelection.description1}</span>
				<span class="inline-block">
					<span class="font-bold">{$i18n.text.productName}</span>
					{$i18n.text.doseSelection.description2}
				</span>
			</p>
		</div>
	</slot>

	<slot>
		<div
			data-e2e="doses"
			class="flex-1 flex flex-col justify-center gap-5 -mx-[1.875rem] mb-5 px-[1.875rem] overflow-hidden"
		>
			{#each Object.entries(DoseDetails) as [key, value]}
				<button
					on:click={() => logic.setDose(key)}
					class={`h-20 px-6 rounded-full relative text-left
				${key === $logic.dose ? 'bg-amber-500 text-white font-bold' : 'bg-gray-100 text-blue-950'}`}
				>
					{value.label}
					<img
						class="absolute shrink-0 grow w-full left-[4.25rem] -top-[1.25rem] z-10"
						style="width: 380px; height:125px;"
						width="380"
						height="125"
						src={value.imageURL}
						alt={value.label}
					/>
				</button>
			{/each}
		</div>
		<button
			class="btn btn-primary w-full relative"
			on:click={() => logic.setPage(Page.PRIVACY_POLICY_CONSENT)}
		>
			<span>{$i18n.text.doseSelection.proceedButton}</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="absolute right-6 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</button>
	</slot>

	<slot slot="desktop-image">
		<div class="relative w-full h-72">
			<img
				class="mx-auto z-10 animate-pulse"
				src="/img/hand.svg"
				alt="Hand"
				width="550"
				height="274"
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
</Layout>
