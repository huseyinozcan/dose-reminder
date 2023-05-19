<script lang="ts">
	import {
		PageDateTimeSelection,
		PageDoseSelection,
		PagePolicyConsent,
		PageDownloadCalendarFile
	} from './components';
	import { store } from './state';
	import { Page } from './types';
</script>

{#if Page.DOSE_SELECTION === $store.page}
	<PageDoseSelection />
{:else if Page.PRIVACY_POLICY_CONSENT === $store.page}
	<PagePolicyConsent />
{:else if Page.DATE_TIME_SELECTION === $store.page}
	<PageDateTimeSelection />
{:else if Page.DOWNLOAD_CALENDAR_FILE === $store.page}
	<PageDownloadCalendarFile />
{/if}
