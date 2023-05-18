import { get, writable } from 'svelte/store';
import { createEvent, type EventAttributes, type Alarm } from 'ics';
import { nextDay, type Day as DayIndex } from 'date-fns';

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

export enum Day {
	MONDAY = 'MONDAY',
	TUESDAY = 'TUESDAY',
	WEDNESDAY = 'WEDNESDAY',
	THURSDAY = 'THURSDAY',
	FRIDAY = 'FRIDAY',
	SATURDAY = 'SATURDAY',
	SUNDAY = 'SUNDAY'
}

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

export const store = {
	..._store,
	setPage: (page: Page) => {
		// TODO: report event to Google Analytics
		mutateState({ page });
	},
	setDose: (dose: Dose | string) => {
		mutateState({ dose: dose as Dose });
	},
	downloadISCFile: async () => {
		// TODO: report event to Google Analytics
		const state = get(_store);
		const now = new Date();
		const year = now.getFullYear();
		const month = now.getMonth() + 1;
		const dayIndex = Object.values(Day).indexOf(state.day) as DayIndex;
		const day = nextDay(now, dayIndex).getDate() + 1;
		let hour = state.hour + (state.isAM ? 0 : 12);
		if (hour === 24) {
			hour = 0;
		}
		const minute = state.minute;
		const alarms: Alarm[] = state.shouldNotifyDayBefore
			? [
					{
						action: 'display',
						trigger: { hours: 24, minutes: 0, before: true },
						description: `Remember, tomorrow is the day to take your SogroyaⓇ weekly dose`
					}
			  ]
			: [];
		const event: EventAttributes = {
			start: [year, month, day, hour, minute],
			duration: { hours: 0, minutes: 10 },
			title: `It's time to take your SogroyaⓇ weekly dose`,
			description: `Take ${DoseDetails[state.dose].label} of SogroyaⓇ`,
			url: 'https://sogroyadosereminder.com',
			categories: ['healthcare'],
			status: 'CONFIRMED',
			busyStatus: 'BUSY',
			recurrenceRule: `FREQ=WEEKLY;COUNT=52`,
			alarms
		};
		const filename = 'dose-reminder.ics';
		const file: File = await new Promise((resolve, reject) => {
			createEvent(event, (error, value) => {
				if (error) {
					reject(error);
				}

				resolve(new File([value], filename, { type: 'plain/text' }));
			});
		});
		const url = URL.createObjectURL(file);

		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = filename;

		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);

		URL.revokeObjectURL(url);
	}
};
