import { createEvents, type EventAttributes } from 'ics';
import { nextDay, subDays, type Day as DayIndex } from 'date-fns';
import { type Dictionary, Day, Dose, DoseDetails } from '$lib/types';

const DAYS_BEFORE_FOR_CORRECT_TODAY_NOTIFICATION = 2;
const FILE_NAME = 'dose-reminder.ics';
type Texts = Dictionary['downloadCalendarFile'];

interface Notification {
	date: Date;
	title: string;
	description: string;
	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
}

// ICS file generation API: https://github.com/adamgibbons/ics#api
export async function generateICSFile(
	day: Day,
	hour: number,
	minute: number,
	isAM: boolean,
	dose: Dose,
	texts: Texts
): Promise<void> {
	const notifications = generateNotifications(day, hour, minute, isAM, dose, texts);
	const file = await generateFile(notifications);
	downloadFile(file);
}

function generateNotifications(
	day: Day,
	hour: number,
	minute: number,
	isAM: boolean,
	dose: Dose,
	texts: Texts
): Notification[] {
	const now = new Date();
	const dayIndex = Object.values(Day).indexOf(day) as DayIndex;
	const mainNotificationDateBasis = subDays(now, DAYS_BEFORE_FOR_CORRECT_TODAY_NOTIFICATION);
	const mainNotificationDate = nextDay(mainNotificationDateBasis, dayIndex);
	hour = hour + (isAM ? 0 : 12);
	if (hour === 12 && isAM) {
		hour = 0; // 12 AM
	}
	if (hour === 24) {
		hour = 12; // 12 PM
	}
	const mainNotification: Notification = {
		date: mainNotificationDate,
		title: texts.mainNotificationTitle,
		description: texts.mainNotificationDescription(DoseDetails[dose].label),
		day: mainNotificationDate.getDate() + 1,
		month: mainNotificationDate.getMonth() + 1,
		year: mainNotificationDate.getFullYear(),
		hour,
		minute
	};
	const dayBeforeNotificationDate = subDays(mainNotificationDate, 1);
	const dayBeforeNotification: Notification = {
		date: dayBeforeNotificationDate,
		title: texts.dayBeforeNotificationTitle,
		description: texts.dayBeforeNotificationDescription(DoseDetails[dose].label),
		day: dayBeforeNotificationDate.getDate() + 1,
		month: dayBeforeNotificationDate.getMonth() + 1,
		year: dayBeforeNotificationDate.getFullYear(),
		hour,
		minute
	};
	return [mainNotification, dayBeforeNotification];
}

async function generateFile(notifications: Notification[]): Promise<File> {
	const events: EventAttributes[] = notifications.map((notification) => ({
		start: [
			notification.year,
			notification.month,
			notification.day,
			notification.hour,
			notification.minute
		],
		duration: { hours: 0, minutes: 10 },
		title: notification.title,
		description: notification.description,
		url: 'https://sogroyadosereminder.com',
		categories: ['healthcare'],
		status: 'CONFIRMED',
		busyStatus: 'BUSY',
		recurrenceRule: `FREQ=WEEKLY;COUNT=52`
	}));
	const file: File = await new Promise((resolve, reject) => {
		createEvents(events, (error, value) => {
			if (error) {
				reject(error);
			}

			resolve(new File([value], FILE_NAME, { type: 'plain/text' }));
		});
	});
	return file;
}

function downloadFile(file: File): void {
	const url = URL.createObjectURL(file);
	const anchor = document.createElement('a');
	anchor.href = url;
	anchor.download = FILE_NAME;
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
	URL.revokeObjectURL(url);
}
