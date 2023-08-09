import { Day, type Dictionary } from '$lib/types';

export const en: Dictionary = {
	productName: 'Sogroya®',
	doseSelection: {
		title: 'Welcome!',
		description1: `To get started let's make sure what`,
		description2: 'pen you have in front of you.',
		illustrationPurposes: '',
		proceedButton: `Let's get started`
	},
	policyConsent: {
		title: 'Getting Started',
		description1: 'To help you get off to a good start with',
		description2: 'you can choose to set up a weekly reminders directly in your calendar.',
		description3:
			'If you would like to set up a reminder, please check the box below to allow us to calculate the necessary input.',
		consentCheckbox1: 'Yes I consent to use the calendar function.',
		consentCheckbox2: 'Read more about our',
		privacyPolicy: 'Privacy Policy',
		privacyPolicyURL:
			'https://www.novonordisk.com/data-privacy-and-user-rights/privacy-policy.html',
		proceedButton: 'Yes, set reminder'
	},
	dateTimeSelection: {
		dayTitle: 'Which Day?',
		dayDescription1: 'Please select a day for your once',
		dayDescription2: 'weekly dose reminder',
		day: (day: Day | string) => {
			switch (day) {
				case Day.MONDAY:
					return 'Monday';
				case Day.TUESDAY:
					return 'Tuesday';
				case Day.WEDNESDAY:
					return 'Wednesday';
				case Day.THURSDAY:
					return 'Thursday';
				case Day.FRIDAY:
					return 'Friday';
				case Day.SATURDAY:
					return 'Saturday';
				case Day.SUNDAY:
					return 'Sunday';
				default:
					return day;
			}
		},
		timeTitle: 'Which Time?',
		timeDescription1: 'Please select a time for a daily',
		timeDescription2: 'dose reminder',
		hour: 'Hour:',
		minute: 'Minute:',
		dayBeforeCheckbox: 'I would like to be informed the day before',
		proceedButton: 'Proceed'
	},
	downloadCalendarFile: {
		title: 'Download Reminders',
		description:
			'Your Reminder is ready to be downloaded into your device. Please press the download button below to continue to your calender.',
		proceedButton: 'Download to calendar',
		mainNotificationTitle: `It's time to take your SogroyaⓇ weekly dose`,
		mainNotificationDescription: (dose: string) => `Take ${dose} of SogroyaⓇ`,
		dayBeforeNotificationTitle: 'Remember, tomorrow is the day to take your SogroyaⓇ weekly dose',
		dayBeforeNotificationDescription: (dose: string) => `Prepare ${dose} of SogroyaⓇ for tomorrow`
	}
};
