<script lang="ts">
	import { logic, i18n } from '$lib/stores';
	import { Day, Page, clouds } from '$lib/types';
	import { Layout, Steps } from '$lib/components';

	const hours = Array.from(Array(12).keys()).map((hour) => hour + 1);
	const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}
</script>

<Layout>
	<slot slot="header">
		<div>
			<Steps stepIndex={2} />
		</div>
	</slot>

	<slot>
		<div class="flex-1 flex flex-col pt-2 items-center text-center">
			<div class="text-center pb-3">
				<h1 class="h1 mb-4">{$i18n.text.dateTimeSelection.dayTitle}</h1>
				<p class="text-gray-400">
					<span class="inline-block">{$i18n.text.dateTimeSelection.dayDescription1}</span><br />
					<span class="inline-block">{$i18n.text.dateTimeSelection.dayDescription2}</span>
				</p>
			</div>
			<!-- Day selector -->
			<div class="bg-gray-100 rounded-xl p-9 w-full">
				<select bind:value={$logic.day} class="block w-full sm:max-w-xs">
					{#each Object.keys(Day) as day}
						<option value={day}>{capitalize($i18n.text.dateTimeSelection.day(day))}</option>
					{/each}
				</select>
			</div>

			<div class="text-center mt-8 pb-3">
				<h1 class="h1 mb-4">{$i18n.text.dateTimeSelection.timeTitle}</h1>
				<p class="text-gray-400">
					<span class="inline-block">{$i18n.text.dateTimeSelection.timeDescription1}</span><br />
					<span class="inline-block">{$i18n.text.dateTimeSelection.dayDescription2}</span>
				</p>
			</div>

			<!-- AM/PM checkbox -->
			<div class="flex items-center gap-2 mb-4">
				<span
					on:click={() => ($logic.isAM = true)}
					class={`cursor-pointer text-sm font-bold ${
						$logic.isAM === true ? 'text-teal-600' : 'text-gray-400'
					}`}>AM</span
				>

				<button
					type="button"
					class="bg-teal-600 relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0"
					role="switch"
					aria-checked="false"
					on:click={() => ($logic.isAM = !$logic.isAM)}
				>
					<span
						aria-hidden="true"
						class={`translate-x-0 pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
							$logic.isAM === true ? 'translate-x-0' : 'translate-x-6'
						}`}
					/>
				</button>

				<span
					on:click={() => ($logic.isAM = false)}
					class={`cursor-pointer text-sm font-bold ${
						$logic.isAM !== true ? 'text-teal-600' : 'text-gray-400'
					}`}>PM</span
				>
			</div>

			<div class="bg-gray-100 rounded-xl p-9 w-full flex items-center justify-center">
				<!-- Hour selector -->
				<!-- <h3>{$i18n.text.dateTimeSelection.hour}</h3> -->
				<select bind:value={$logic.hour} class="grow">
					{#each hours as hour}
						<option value={hour}>{hour < 10 ? '0' + hour : hour}</option>
					{/each}
				</select>

				<span class="mx-3">:</span>
				<!-- <h3>{$i18n.text.dateTimeSelection.minute}</h3> -->
				<!-- Minute selector -->
				<select bind:value={$logic.minute} class="grow">
					{#each minutes as minute}
						<option value={minute}>{minute < 10 ? '0' + minute : minute}</option>
					{/each}
				</select>
			</div>
		</div>

		<div>
			<!-- shouldNotifyDayBefore checkbox -->
			<label for="custom-checkbox" class="flex items-center cursor-pointer ml-4 my-5">
				<span class="bg-teal-600 flex items-center justify-center w-5 h-5 rounded-full">
					<input
						bind:checked={$logic.shouldNotifyDayBefore}
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
				<span class="ml-3 text-xs">{$i18n.text.dateTimeSelection.dayBeforeCheckbox}</span>
			</label>
			<div class="flex gap-3">
				<button
					class="grow btn btn-secondary"
					on:click={() => logic.setPage(Page.PRIVACY_POLICY_CONSENT)}
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
							fill="currentColor"
						/>
					</svg>
				</button>
				<button
					class="grow btn btn-primary"
					on:click={() => logic.setPage(Page.DOWNLOAD_CALENDAR_FILE)}
				>
					{$i18n.text.dateTimeSelection.proceedButton}
				</button>
			</div>
		</div>
	</slot>

	<slot slot="desktop-image">
		<div class="relative w-full h-96">
			<img
				class="mx-auto relative z-20 animate-pulse"
				src="/img/calendar.svg"
				alt="Calendar"
				width="340"
				height="303"
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
