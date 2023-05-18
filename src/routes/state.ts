import { writable } from 'svelte/store';

export enum Page {
	DOSE_SELECTION = 'DOSE_SELECTION',
	PRIVACY_POLICY_CONSENT = 'PRIVACY_POLICY_CONSENT',
	DATE_TIME_SELECTION = 'DATE_TIME_SELECTION',
	DOWNLOAD_CALENDAR_FILE = 'DOWNLOAD_CALENDAR_FILE'
}

export enum Dose {
	D_5_MG = 'D_5_MG',
	D_10_MG = 'D_10_MG',
	D_15_MG = 'D_15_MG'
}

export const DoseDetails = {
	[Dose.D_5_MG]: {
		label: '5 mg',
		imageURL: '/img/dose-5mg.png'
	},
	[Dose.D_10_MG]: {
		label: '10 mg',
		imageURL: '/img/dose-10mg.png'
	},
	[Dose.D_15_MG]: {
		label: '15 mg',
		imageURL: '/img/dose-15mg.png'
	}
};

interface State {
	page: Page;
	dose: Dose;
}

const initialState: State = {
	page: Page.DOSE_SELECTION,
	dose: Dose.D_10_MG
};

const _store = writable<State>(initialState);
function mutateState(mutation: Partial<State>) {
	_store.update((s) => ({ ...s, ...mutation }));
}

export const store = {
	subscribe: _store.subscribe,
	setPage: (page: Page) => mutateState({ page }),
	setDose: (dose: Dose | string) => mutateState({ dose: dose as Dose })
};
