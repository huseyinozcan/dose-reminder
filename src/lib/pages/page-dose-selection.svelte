<script lang="ts">
	import { logic, i18n } from '$lib/stores';
	import { DoseDetails, Page, clouds, Lang } from '$lib/types';
	import { Layout, Steps, Modal } from '$lib/components';

	let isWarningModalVisible = true;
	let isWarningNoModalVisible = false;

	let scrollTarget: HTMLElement;

	let imgFolder = $i18n.lang === Lang.JP ? '/img/jpn/' : '/img/';

	function closeAllModals(): void {
		isWarningModalVisible = false;
		isWarningNoModalVisible = false;
	}
</script>

<Layout>
	<slot slot="header">
		<div class="mb-8 lg:mb-20">
			<Steps stepIndex={0} />
		</div>

		<div class="text-center lg:max-w-sm lg:mx-auto">
			<h1 class="h1 mb-4 lg:mb-8">{$i18n.text.doseSelection.title}</h1>
			<p class="text-base lg:text-lg text-balance">
				<span class="inline-block">{$i18n.text.doseSelection.description1}</span>
				{#if $i18n.text.doseSelection.description2}
					<span class="inline-block">
						{#if $i18n.text.productName}
							<span class="font-bold">{$i18n.text.productName}</span>
						{/if}
						{$i18n.text.doseSelection.description2}
					</span>
				{/if}
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
					on:click={() => {
						logic.setDose(key);
						if (scrollTarget) {
							scrollTarget.scrollIntoView({ behavior: 'smooth' });
						}
					}}
					class={`h-20 px-6 rounded-full relative text-left
				${
					key === $logic.dose
						? `${value.activeColorBG} text-white font-bold`
						: 'bg-gray-100 text-blue-950'
				}`}
				>
					{value.label}
					<img
						class="absolute shrink-0 grow w-full left-[4.25rem] -top-[1.25rem] z-10"
						style="width: 380px; height:125px;"
						width="380"
						height="125"
						src={imgFolder + value.imageURL}
						alt={value.label}
					/>
				</button>
			{/each}

			{#if $i18n.text.doseSelection.illustrationPurposes}
				<div class="text-gray-400 text-center text-xs">
					{$i18n.text.doseSelection.illustrationPurposes}
				</div>
			{/if}
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
		<div bind:this={scrollTarget} />
	</slot>

	<slot slot="desktop-image">
		<div class="relative w-full h-72">
			<img
				class="mx-auto relative z-20 animate-pulse"
				src="/img/hand.svg"
				alt="Hand"
				width="550"
				height="274"
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

{#if $i18n.lang === Lang.JP}
	<Modal isVisible={isWarningModalVisible} hideOnClickOutside={false}>
		<h2 slot="header" class="text-blue-500 text-xl text-center font-medium mb-8">
			当コンテンツご利用に関する注意事項
		</h2>

		<div class="text-sm space-y-6">
			<p>以下の点をご了承の上、ご覧ください。</p>
			<p>
				当コンテンツは、ソグルーヤ®皮下注による治療を受ける患者さんとそのご家族の方向けに情報を掲載しています。<br
				/>
				適正使用や安全性に関する情報を提供することを目的としており、医学的な判断、アドバイスを提供するものではないことをご了承ください。ソグルーヤ®皮下注や治療に関するご質問は、主治医に必ずご相談ください。
			</p>
			<p class="border-y border-blue-500 py-4 text-blue-500">
				あなたは医師の診断を受けソグルーヤ®皮下注による治療を現在受けている、または、治療を受ける予定がある患者さんまたはご家族の方ですか？
			</p>
		</div>

		<div class="my-6 flex items-center justify-center gap-6">
			<!-- eslint-disable -->
			<button
				autofocus
				on:click={closeAllModals}
				type="button"
				class="rounded-xl p-1.5 text-base bg-blue-950 text-white w-28 sm:w-40">はい</button
			>
			<!-- eslint-enable -->
			<button
				on:click={() => {
					isWarningModalVisible = false;
					isWarningNoModalVisible = true;
				}}
				type="button"
				class="rounded-xl p-1.5 text-base bg-blue-500 text-white w-28 sm:w-40">いいえ</button
			>
		</div>

		<div class="text-xs">
			※一般の方への情報提供を目的としたものではありませんのでご了承ください。
		</div>
	</Modal>
	<Modal isVisible={isWarningNoModalVisible} hideOnClickOutside={false}>
		<div class="text-sm space-y-6">
			<p>
				当コンテンツは医師の診断を受けソグルーヤ®皮下注による治療を現在受けている、または、治療を受ける予定がある患者さん、またはご家族の方向けのものです
			</p>
		</div>

		<div class="mt-6 flex items-center justify-center gap-6">
			<!-- eslint-enable -->
			<button
				on:click={() => {
					isWarningModalVisible = true;
					isWarningNoModalVisible = false;
				}}
				type="button"
				class="rounded-xl p-1.5 text-base bg-blue-500 text-white w-28 sm:w-40"
			>
				戻る
			</button>
		</div>
	</Modal>
{/if}
