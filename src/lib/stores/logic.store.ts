import { get, writable } from 'svelte/store';
import { generateICSFile, reportEvent, reportPageNavigationToGA } from '$lib/services';
import { Dose, Page, Day } from '$lib/types';
import { i18n } from './i18n.store';

interface State {
	page: Page;
	dose: Dose;
	day: Day;
	hour: number;
	minute: number;
	isAM: boolean;
	shouldNotifyDayBefore: boolean;
}

const initialState: State = {
	page: Page.DOSE_SELECTION,
	dose: Dose.D_10_MG,
	day: Day.MONDAY,
	hour: 8,
	minute: 0,
	isAM: true,
	shouldNotifyDayBefore: true
};

const _store = writable<State>(initialState);
function mutateState(mutation: Partial<State>) {
	_store.update((s) => ({ ...s, ...mutation }));
}

export const logic = {
	..._store,
	setPage: (page: Page) => {
		reportPageNavigationToGA(get(_store).page, page);
		mutateState({ page });
	},
	setDose: (dose: Dose | string) => {
		mutateState({ dose: dose as Dose });
	},
	downloadISCFile: async () => {
		reportEvent('calendar_file_downloaded');
		const state = get(_store);
		const texts = get(i18n).text.downloadCalendarFile;
		void generateICSFile(state.day, state.hour, state.minute, state.isAM, state.dose, texts);
	}
};
