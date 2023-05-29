import { derived, writable } from 'svelte/store';
import { type Dictionary, Lang, LangToLocale } from '$lib/types';
import { en, de, fr, pt } from '../i18n';
import { goto } from '$app/navigation';
import { browser } from '$app/environment';

const dictionaries = new Map<Lang, Dictionary>([
	[Lang.EN, en],
	[Lang.FR, fr],
	[Lang.DE, de],
	[Lang.PT, pt]
]);

interface State {
	lang: Lang;
}

let urlLang: undefined | Lang;
if (browser) {
	const url = new URL(window.location.href);
	urlLang = url.searchParams.get('lang')?.toUpperCase() as undefined | Lang;
}

const initialValue: State = {
	lang: urlLang ? urlLang : Lang.EN
};

const dataStore = writable<State>(initialValue);
const viewStore = derived(dataStore, ($data) => {
	return {
		lang: $data.lang,
		text: dictionaries.get($data.lang)!
	};
});

export const i18n = {
	subscribe: viewStore.subscribe,
	setLang: async (lang: Lang) => {
		dataStore.update((s) => ({ ...s, lang }));
		await goto(`?lang=${lang.toLowerCase()}`); // to make consent script work
		location.reload();
	}
};

i18n.subscribe((s) => {
	if (browser) {
		document.documentElement.lang = LangToLocale.get(s.lang)!; // sets <html lang="en-GB"> to the current lang, to make consent script work
	}
});
