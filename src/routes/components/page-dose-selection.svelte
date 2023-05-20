<script lang="ts">
	import { store } from '../state';
	import Steps from './steps.svelte';
	import { DoseDetails, Page } from '../types';
	import PageLayout from './page-layout.svelte';
	import { i18n } from '../i18n/store';
</script>

<PageLayout>
	<slot slot="header">
		<div class="mb-8">
			<Steps stepIndex={0} />
		</div>

		<div class="text-center pb-3 lg:max-w-xs lg:mx-auto">
			<h1 class="h1 mb-4">{$i18n.text.doseSelection.title}</h1>
			<p>
				<span class="inline-block">{$i18n.text.doseSelection.description1}</span>
				<span class="inline-block">
					<span class="font-bold">{$i18n.text.productName}</span>
					{$i18n.text.doseSelection.description2}
				</span>
			</p>
		</div>
	</slot>

	<slot>
		<div data-e2e="doses" class="flex-1 flex flex-col justify-center gap-5">
			{#each Object.entries(DoseDetails) as [key, value]}
				<button
					on:click={() => store.setDose(key)}
					class={`h-20 px-6 rounded-full relative text-left
				${key === $store.dose ? 'bg-amber-500 text-white' : 'bg-gray-100 text-blue-950'}`}
				>
					{value.label}
					<img
						class="absolute -right-[1.875rem] z-10 -top-5"
						src={value.imageURL}
						alt={value.label}
					/>
				</button>
			{/each}
		</div>
		<button
			class="btn btn-primary w-full relative"
			on:click={() => store.setPage(Page.PRIVACY_POLICY_CONSENT)}
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
		<img src="/img/desktop-step-1.png" width="1277" height="843" alt="" />
	</slot>
</PageLayout>
