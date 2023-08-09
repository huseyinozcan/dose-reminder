import { Day, type Dictionary } from '$lib/types';

export const jp: Dictionary = {
	productName: '',
	doseSelection: {
		title: 'ソグルーヤ®皮下注 リマインダーツール',
		description1: 'ご使用になるソグルーヤ®皮下注を選択してください。',
		description2: '',
		illustrationPurposes: '写真はイメージです。',
		proceedButton: '設定を始めましょう'
	},
	policyConsent: {
		title: '設定を始めましょう',
		description1: `1週間に1回、ソグルーヤ®皮下注の治療を<br/>
						忘れずに行うため、毎週同じ曜日、同じ時間に<br/>
						リマインドを行うツールです。<br/>
						お手持ちのパソコン、スマートフォン<br/>
						のカレンダーに設定することができます。`,
		description2: '',
		description3: `本リマインダーを設定する場合は、<br/>
					<span class="whitespace-nowrap">以下のチェックボックスにチェックをお願いします。</span>`,
		consentCheckbox1: '本リマインダーを利用することに同意します。',
		consentCheckbox2: '詳細については、弊社の',
		privacyPolicy: 'プライバシーポリシー',
		privacyPolicyURL: 'https://www.novonordisk.co.jp/privacy-policy.html',
		proceedButton: 'はい、リマインダーを設定する'
	},
	dateTimeSelection: {
		dayTitle: '何曜日？',
		dayDescription1: '1週間に1回、ソグルーヤ®皮下注の',
		dayDescription2: '治療を行う曜日を選択してください。',
		day: (day: Day | string) => {
			switch (day) {
				case Day.MONDAY:
					return '月曜日';
				case Day.TUESDAY:
					return '火曜日';
				case Day.WEDNESDAY:
					return '水曜日';
				case Day.THURSDAY:
					return '木曜日';
				case Day.FRIDAY:
					return '金曜日';
				case Day.SATURDAY:
					return '土曜日';
				case Day.SUNDAY:
					return '日曜日';
				default:
					return day;
			}
		},
		timeTitle: '何時？',
		timeDescription1: 'ソグルーヤ®皮下注の治療を',
		timeDescription2: '行う時間を選択してください。',
		hour: '時間：',
		minute: '分：',
		dayBeforeCheckbox: '前日に通知を受け取りたい',
		proceedButton: '次へ'
	},
	downloadCalendarFile: {
		title: `<span class="whitespace-nowrap">リマインダーのダウンロード</span>`,
		description: `<span class="inline-block sm:-mx-16">リマインダーをデバイスにダウンロードする準備が<br/>できました。続行するには、以下のカレンダーにダウンロード<br/>ボタンを押してください。</span>`,
		proceedButton: 'カレンダーにダウンロード',
		mainNotificationTitle: 'SogroyaⓇの週間用量を摂取する時間です',
		mainNotificationDescription: (dose: string) => `SogroyaⓇを${dose}摂取してください`,
		dayBeforeNotificationTitle: '明日はSogroyaⓇの週間用量を摂取する日です',
		dayBeforeNotificationDescription: (dose: string) =>
			`明日のためにSogroyaⓇを${dose}準備してください`
	}
};
