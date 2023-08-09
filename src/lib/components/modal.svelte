<script lang="ts">
	export let showModal: boolean;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- eslint-disable -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	class="max-w-xl"
>
	<div on:click|stopPropagation>
		<!-- eslint-enable -->
		<slot name="header" />
		<slot />

		<div class="my-6 flex items-center justify-center gap-6">
			<!-- eslint-disable -->
			<button
				autofocus
				on:click={() => dialog.close()}
				type="button"
				class="rounded-xl p-1.5 text-base bg-blue-950 text-white w-40">はい</button
			>
			<!-- eslint-enable -->
			<button
				on:click={() => dialog.close()}
				type="button"
				class="rounded-xl p-1.5 text-base bg-blue-500 text-white w-40">いいえ</button
			>
		</div>

		<slot name="comment" />
	</div>
</dialog>

<style>
	dialog::backdrop {
		@apply bg-black/20;
	}
	dialog > div {
		@apply p-4;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
