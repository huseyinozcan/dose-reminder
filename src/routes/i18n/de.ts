import { Day } from '../types';
import type { Dictionary } from './types';

export const de: Dictionary = {
	productName: 'Sogroya®',
	doseSelection: {
		title: 'Willkommen!',
		description1: 'Um loszulegen, stellen wir sicher, welchen',
		description2: 'Pen Sie vor sich haben.',
		proceedButton: 'Lassen Sie uns anfangen'
	},
	policyConsent: {
		title: 'Erste Schritte',
		description1: 'Um Ihnen einen guten Start mit',
		description2:
			'zu ermöglichen, können Sie wählen, wöchentliche Erinnerungen direkt in Ihrem Kalender einzurichten.',
		description3:
			'Wenn Sie eine Erinnerung einrichten möchten, aktivieren Sie bitte das Kontrollkästchen unten, um uns die Berechnung der erforderlichen Eingabe zu ermöglichen.',
		consentCheckbox1: 'Ja, ich stimme der Verwendung der Kalenderfunktion zu.',
		consentCheckbox2: 'Lesen Sie mehr über unsere',
		privacyPolicy: 'Datenschutzrichtlinie',
		proceedButton: 'Ja, Erinnerung einrichten'
	},
	dateTimeSelection: {
		dayTitle: 'Welcher Tag?',
		dayDescription1: 'Bitte wählen Sie einen Tag für Ihre einmalige',
		dayDescription2: 'wöchentliche Dosis-Erinnerung',
		day: (day: Day | string) => {
			switch (day) {
				case Day.MONDAY:
					return 'Montag';
				case Day.TUESDAY:
					return 'Dienstag';
				case Day.WEDNESDAY:
					return 'Mittwoch';
				case Day.THURSDAY:
					return 'Donnerstag';
				case Day.FRIDAY:
					return 'Freitag';
				case Day.SATURDAY:
					return 'Samstag';
				case Day.SUNDAY:
					return 'Sonntag';
				default:
					return day;
			}
		},
		timeTitle: 'Welche Uhrzeit?',
		timeDescription1: 'Bitte wählen Sie eine Uhrzeit für eine tägliche',
		timeDescription2: 'Dosis-Erinnerung',
		hour: 'Stunde:',
		minute: 'Minute:',
		dayBeforeCheckbox: 'Ich möchte einen Tag zuvor informiert werden',
		proceedButton: 'Fortfahren'
	},
	downloadCalendarFile: {
		title: 'Erinnerungen herunterladen',
		description:
			'Ihre Erinnerung kann auf Ihr Gerät heruntergeladen werden. Klicken Sie bitte auf den Download-Button, um fortzufahren und sie in Ihren Kalender zu übertragen.',
		proceedButton: 'In den Kalender herunterladen',
		mainNotificationTitle: 'Es ist Zeit für Ihre wöchentliche Dosis SogroyaⓇ',
		mainNotificationDescription: (dose: string) => `Nehmen Sie ${dose} von SogroyaⓇ ein`,
		dayBeforeNotificationTitle:
			'Denken Sie daran, morgen ist der Tag für Ihre wöchentliche Dosis SogroyaⓇ',
		dayBeforeNotificationDescription: (dose: string) =>
			`Bereiten Sie ${dose} von SogroyaⓇ für morgen vor`
	}
};
