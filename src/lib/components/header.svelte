<script lang="ts">
	import { i18n } from '$lib/stores';
	import { Lang } from '$lib/types';

	const langs = Object.keys(Lang) as Lang[];
</script>

<div class="flex items-center justify-between mb-8 lg:mb-12">
	<img src="/img/logo.svg" alt="Novo Nordisk" width="99" height="70" />

	<ul class="text-xs lg:text-sm flex whitespace-nowrap gap-x-4 -translate-y-1">
		{#each langs as lang}
			<li class={$i18n.lang === lang ? 'font-bold' : 'hover:opacity-50'}>
				<button on:click={() => i18n.setLang(lang)}>{lang.toUpperCase()}</button>
			</li>
		{/each}
	</ul>
</div>
