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
		imageURL: '/img/pen-1.webp',
		activeColorBG: 'bg-cyan-600'
	},
	[Dose.D_10_MG]: {
		label: '10 mg',
		imageURL: '/img/pen-2.webp',
		activeColorBG: 'bg-amber-500'
	},
	[Dose.D_15_MG]: {
		label: '15 mg',
		imageURL: '/img/pen-3.webp',
		activeColorBG: 'bg-pink-600'
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

export enum Lang {
	EN = 'EN',
	FR = 'FR',
	DE = 'DE',
	PT = 'PT',
	JP = 'JP'
}

export const LangToLocale = new Map<Lang, string>([
	[Lang.EN, 'en-GB'],
	[Lang.FR, 'fr-FR'],
	[Lang.DE, 'de-DE'],
	[Lang.PT, 'pt-BR']
]);

export interface Dictionary {
	productName: string;
	doseSelection: {
		title: string;
		description1: string;
		description2: string;
		proceedButton: string;
	};
	policyConsent: {
		title: string;
		description1: string;
		description2: string;
		description3: string;
		consentCheckbox1: string;
		consentCheckbox2: string;
		privacyPolicy: string;
		proceedButton: string;
	};
	dateTimeSelection: {
		dayTitle: string;
		dayDescription1: string;
		dayDescription2: string;
		day: (day: Day | string) => string;
		timeTitle: string;
		timeDescription1: string;
		timeDescription2: string;
		hour: string;
		minute: string;
		dayBeforeCheckbox: string;
		proceedButton: string;
	};
	downloadCalendarFile: {
		title: string;
		description: string;
		proceedButton: string;
		mainNotificationTitle: string;
		mainNotificationDescription: (dose: string) => string;
		dayBeforeNotificationTitle: string;
		dayBeforeNotificationDescription: (dose: string) => string;
	};
}

export interface Cloud {
	id: number;
	x: number;
	y: number;
}

export const clouds: Cloud[] = [
	{ id: 1, x: 92, y: 32 },
	{ id: 2, x: 0, y: 84 },
	{ id: 3, x: 80, y: 192 }
];
