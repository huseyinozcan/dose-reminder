import { derived, writable } from 'svelte/store';
import { en } from './en';
import type { Dictionary } from './types';
import { de } from './de';
import { tr } from './tr';
import { fr } from './fr';

export enum Lang {
	EN = 'EN',
	TR = 'TR',
	FR = 'FR',
	DE = 'DE'
}

const dictionaries = new Map<Lang, Dictionary>([
	[Lang.EN, en],
	[Lang.TR, tr],
	[Lang.FR, fr],
	[Lang.DE, de]
]);

interface State {
	lang: Lang;
}

const initialValue: State = {
	lang: Lang.EN
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
	setLang: (lang: Lang) => {
		dataStore.update((s) => ({ ...s, lang }));
	}
};
