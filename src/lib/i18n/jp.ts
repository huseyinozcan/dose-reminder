import { Day, type Dictionary } from '$lib/types';

export const jp: Dictionary = {
	productName: 'Sogroya®',
	doseSelection: {
		title: 'ようこそ！',
		description1: '始める前に、お手元の',
		description2: 'ペンを確認しましょう。',
		proceedButton: '始めましょう'
	},
	policyConsent: {
		title: '始めましょう',
		description1: 'をスムーズに開始するために、',
		description2: '週ごとのリマインダーを直接カレンダーに設定することができます。',
		description3:
			'リマインダーを設定する場合は、必要な入力を計算するためにチェックボックスをオンにしてください。',
		consentCheckbox1: 'はい、カレンダー機能を利用することに同意します。',
		consentCheckbox2: '詳細については、弊社の',
		privacyPolicy: 'プライバシーポリシー',
		privacyPolicyURL: 'https://www.novonordisk.co.jp/privacy-policy.html',
		proceedButton: 'はい、リマインダーを設定する'
	},
	dateTimeSelection: {
		dayTitle: 'いつ？',
		dayDescription1: '週に1回の',
		dayDescription2: '服薬リマインダーの日を選択してください。',
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
		timeTitle: 'いつ？',
		timeDescription1: '毎日の服薬リマインダーの時間を選択してください。',
		timeDescription2: '',
		hour: '時間：',
		minute: '分：',
		dayBeforeCheckbox: '前日に通知を受け取りたい',
		proceedButton: '次へ'
	},
	downloadCalendarFile: {
		title: 'リマインダーのダウンロード',
		description:
			'リマインダーをデバイスにダウンロードする準備ができました。続行するには、以下のダウンロードボタンを押してください。',
		proceedButton: 'カレンダーにダウンロード',
		mainNotificationTitle: 'SogroyaⓇの週間用量を摂取する時間です',
		mainNotificationDescription: (dose: string) => `SogroyaⓇを${dose}摂取してください`,
		dayBeforeNotificationTitle: '明日はSogroyaⓇの週間用量を摂取する日です',
		dayBeforeNotificationDescription: (dose: string) =>
			`明日のためにSogroyaⓇを${dose}準備してください`
	}
};
