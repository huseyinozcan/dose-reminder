import type { Day } from '../types';

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
