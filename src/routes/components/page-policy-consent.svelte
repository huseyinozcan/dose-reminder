<script lang="ts">
	import { store } from '../state';
	import Steps from './steps.svelte';
	import { Page } from '../types';
	import PageLayout from './page-layout.svelte';
	import { i18n } from '../i18n/store';

	let consent = true;
</script>

<PageLayout>
	<slot slot="header">
		<div class="mb-8 lg:mb-0">
			<Steps stepIndex={1} />
		</div>

		<div class="text-center lg:hidden">
			<img src="/img/image-step-2.png" width="682" height="290" alt="privacy policy consent" />
		</div>
	</slot>

	<slot>
		<div class="flex-1 flex flex-col justify-center items-center text-center gap-y-6">
			<h1 class="h1">{$i18n.text.policyConsent.title}</h1>

			<p class="text-sm leading-relaxed max-w-xs">
				{$i18n.text.policyConsent.description1}
				<span class="font-bold">{$i18n.text.productName}</span>, {$i18n.text.policyConsent
					.description2}
			</p>
			<p class="text-sm leading-relaxed">
				{$i18n.text.policyConsent.description3}
			</p>
		</div>
		<div>
			<label for="custom-checkbox" class="flex cursor-pointer ml-4 mb-5">
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
					<span class="block">{$i18n.text.policyConsent.consentCheckbox1}</span>
					<span class="block"
						>{$i18n.text.policyConsent.consentCheckbox2}
						<a href="/privacy-policy/{$i18n.lang.toLowerCase()}" class="underline">
							{$i18n.text.policyConsent.privacyPolicy}
						</a>
						.
					</span>
				</span>
			</label>
			<div class="flex gap-3">
				<button class="grow btn btn-secondary" on:click={() => store.setPage(Page.DOSE_SELECTION)}>
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
							fill="currentColor"
						/>
					</svg>
				</button>
				<button
					class="grow btn btn-primary"
					disabled={!consent}
					on:click={() => store.setPage(Page.DATE_TIME_SELECTION)}
				>
					{$i18n.text.policyConsent.proceedButton}
				</button>
			</div>
		</div>
	</slot>

	<slot slot="desktop-image">
		<img src="/img/image-step-2.png" width="682" height="290" alt="privacy policy consent" />
	</slot>
</PageLayout>
