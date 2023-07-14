import { derived, writable } from 'svelte/store';
import { Lang, TimeFormat, type LangDetails } from '$lib/types';
import { en, de, fr, pt, jp } from '../i18n';
import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import { eventHub } from './eventHub';
import type { Events } from './events';

const langDetails = new Map<Lang, LangDetails>([
	[
		Lang.EN,
		{
			locale: 'en-GB',
			lang: Lang.EN,
			timeFormat: TimeFormat.H12,
			text: en
		}
	],
	[
		Lang.FR,
		{
			locale: 'fr-FR',
			lang: Lang.FR,
			timeFormat: TimeFormat.H12,
			text: fr
		}
	],
	[
		Lang.DE,
		{
			locale: 'de-DE',
			lang: Lang.DE,
			timeFormat: TimeFormat.H12,
			text: de
		}
	],
	[
		Lang.PT,
		{
			locale: 'pt-BR',
			lang: Lang.PT,
			timeFormat: TimeFormat.H24,
			text: pt
		}
	],
	[
		Lang.JP,
		{
			locale: 'ja-JP',
			lang: Lang.JP,
			timeFormat: TimeFormat.H12,
			text: jp
		}
	]
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

function getLangDetails(lang: Lang): LangDetails {
	const details = langDetails.get(lang);
	if (!details) {
		alert(`Language "${lang}" not found`);
		throw new Error(`Language "${lang}" not found`);
	}
	return details;
}

eventHub.emit('setLanguage', getLangDetails(initialValue.lang));

const dataStore = writable<State>(initialValue);
const viewStore = derived(dataStore, ($data) => {
	return getLangDetails($data.lang);
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
		document.documentElement.lang = s.locale; // sets <html lang="en-GB"> to the current lang, to make consent script work
	}
});
