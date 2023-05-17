import { writable } from 'svelte/store';

export enum Page {
	DOSE_SELECTION = 'DOSE_SELECTION',
	PRIVACY_POLICY_CONSENT = 'PRIVACY_POLICY_CONSENT',
	DATE_TIME_SELECTION = 'DATE_TIME_SELECTION',
	DOWNLOAD_CALENDAR_FILE = 'DOWNLOAD_CALENDAR_FILE'
}

interface State {
	page: Page;
}

const initialState: State = {
	page: Page.DOSE_SELECTION
};

export const store = writable<State>(initialState);
export function mutateState(mutation: Partial<State>) {
	store.update((s) => ({ ...s, ...mutation }));
}
