import { get, writable } from 'svelte/store';
import { createEvents, type EventAttributes, type Alarm } from 'ics';
import { nextDay, subDays, type Day as DayIndex } from 'date-fns';

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
		const dayIndex = Object.values(Day).indexOf(state.day) as DayIndex;
		const twoDaysAgo = subDays(now, 2);
		interface Notification {
			date: Date;
			title: string;
			description: string;
			day: number;
			month: number;
			year: number;
		}
		const mainNotificationDate = nextDay(twoDaysAgo, dayIndex);
		const mainNotification: Notification = {
			date: mainNotificationDate,
			title: `It's time to take your SogroyaⓇ weekly dose`,
			description: `Take ${DoseDetails[state.dose].label} of SogroyaⓇ`,
			day: mainNotificationDate.getDate() + 1,
			month: mainNotificationDate.getMonth() + 1,
			year: mainNotificationDate.getFullYear()
		};
		const dayBeforeNotificationDate = subDays(mainNotificationDate, 1);
		const dayBeforeNotification: Notification = {
			date: dayBeforeNotificationDate,
			title: `Remember, tomorrow is the day to take your SogroyaⓇ weekly dose`,
			description: `Prepare ${DoseDetails[state.dose].label} of SogroyaⓇ for tomorrow`,
			day: dayBeforeNotificationDate.getDate() + 1,
			month: dayBeforeNotificationDate.getMonth() + 1,
			year: dayBeforeNotificationDate.getFullYear()
		};
		let hour = state.hour + (state.isAM ? 0 : 12);
		if (hour === 24) {
			hour = 0;
		}
		const minute = state.minute;

		const events: EventAttributes[] = [
			{
				start: [
					dayBeforeNotification.year,
					dayBeforeNotification.month,
					dayBeforeNotification.day,
					hour,
					minute
				],
				duration: { hours: 0, minutes: 10 },
				title: dayBeforeNotification.title,
				description: dayBeforeNotification.description,
				url: 'https://sogroyadosereminder.com',
				categories: ['healthcare'],
				status: 'CONFIRMED',
				busyStatus: 'BUSY',
				recurrenceRule: `FREQ=WEEKLY;COUNT=52`
			},
			{
				start: [mainNotification.year, mainNotification.month, mainNotification.day, hour, minute],
				duration: { hours: 0, minutes: 10 },
				title: mainNotification.title,
				description: mainNotification.description,
				url: 'https://sogroyadosereminder.com',
				categories: ['healthcare'],
				status: 'CONFIRMED',
				busyStatus: 'BUSY',
				recurrenceRule: `FREQ=WEEKLY;COUNT=52`
			}
		];

		console.log({ mainNotification, dayBeforeNotification });
		const filename = 'dose-reminder.ics';
		const file: File = await new Promise((resolve, reject) => {
			createEvents(events, (error, value) => {
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
