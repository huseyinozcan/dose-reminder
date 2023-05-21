<script lang="ts">
	import '../app.css';
	import { logic } from '$lib/stores';
	import { Page } from '$lib/types';
	import { Analytics } from '$lib/components';
	import {
		PageDateTimeSelection,
		PageDoseSelection,
		PagePolicyConsent,
		PageDownloadCalendarFile
	} from '$lib/pages';
</script>

<Analytics />

{#if Page.DOSE_SELECTION === $logic.page}
	<PageDoseSelection />
{:else if Page.PRIVACY_POLICY_CONSENT === $logic.page}
	<PagePolicyConsent />
{:else if Page.DATE_TIME_SELECTION === $logic.page}
	<PageDateTimeSelection />
{:else if Page.DOWNLOAD_CALENDAR_FILE === $logic.page}
	<PageDownloadCalendarFile />
{/if}
