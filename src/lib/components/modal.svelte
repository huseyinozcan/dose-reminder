<script lang="ts">
	export let isVisible = false;

	let dialog: HTMLDialogElement;

	$: dialog && (isVisible ? show() : hide());

	function show() {
		dialog.showModal();
	}
	function hide() {
		dialog.close();
	}
</script>

<!-- eslint-disable -->
<dialog
	bind:this={dialog}
	on:close={() => (isVisible = false)}
	on:click|self={hide}
	class="max-w-xl border-2 border-blue-800 mx-4 sm:mx-auto"
>
	<div on:click|stopPropagation>
		<!-- eslint-enable -->
		<slot name="header" />
		<slot />
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
