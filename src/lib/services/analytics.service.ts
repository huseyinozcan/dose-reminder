import { Page } from '$lib/types';

const pageNavigationToGAEvent = new Map<string, string>([
	[`${Page.DOSE_SELECTION}_${Page.PRIVACY_POLICY_CONSENT}`, 'dose_selected'],
	[`${Page.PRIVACY_POLICY_CONSENT}_${Page.DOSE_SELECTION}`, 'back_to_dose_selection_screen'],
	[`${Page.PRIVACY_POLICY_CONSENT}_${Page.DATE_TIME_SELECTION}`, 'privacy_policy_accepted'],
	[`${Page.DATE_TIME_SELECTION}_${Page.PRIVACY_POLICY_CONSENT}`, 'back_to_privacy_policy_screen'],
	[`${Page.DATE_TIME_SELECTION}_${Page.DOWNLOAD_CALENDAR_FILE}`, 'date_time_selected'],
	[
		`${Page.DOWNLOAD_CALENDAR_FILE}_${Page.DATE_TIME_SELECTION}`,
		'back_to_date_time_selection_screen'
	]
]);

export function reportPageNavigationToGA(currentPage: Page, nextPage: Page): void {
	const event = pageNavigationToGAEvent.get(`${currentPage}_${nextPage}`);
	if (!event) {
		return console.error(`No event found for page navigation from ${currentPage} to ${nextPage}`);
	}
	reportEvent(event);
}

export function reportEvent(event: string): void {
	console.log(`Reporting event: ${event}`);
	window.gtag('event', event, {
		event_name: event,
		event_category: 'engagement',
		event_label: event
	});
}
