import { Day, type Dictionary } from '$lib/types';

export const tr: Dictionary = {
	productName: 'Sogroya®',
	doseSelection: {
		title: 'Hoş Geldiniz!',
		description1: 'Başlamadan önce, önünüzde hangi',
		description2: 'kalem olduğunu doğrulayalım.',
		proceedButton: 'Başlayalım'
	},
	policyConsent: {
		title: 'Başlarken',
		description1: 'Size iyi bir başlangıç yapmanızı yardımcı olmak için',
		description2: 'takviminizde haftalık hatırlatıcılar ayarlamanızı seçebilirsiniz.',
		description3:
			'Hatırlatıcı ayarlamak isterseniz, gerekli girdiyi hesaplamamıza izin vermek için aşağıdaki kutuyu işaretleyin.',
		consentCheckbox1: 'Evet, takvim işlevini kullanmayı kabul ediyorum.',
		consentCheckbox2: 'Hakkımızda daha fazla bilgi için',
		privacyPolicy: 'Gizlilik Politikası',
		proceedButton: 'Evet, hatırlatıcı ayarla'
	},
	dateTimeSelection: {
		dayTitle: 'Hangi Gün?',
		dayDescription1: 'Bir kez',
		dayDescription2: 'haftalık doz hatırlatıcısı için bir gün seçin',
		day: (day: Day | string) => {
			switch (day) {
				case Day.MONDAY:
					return 'Pazartesi';
				case Day.TUESDAY:
					return 'Salı';
				case Day.WEDNESDAY:
					return 'Çarşamba';
				case Day.THURSDAY:
					return 'Perşembe';
				case Day.FRIDAY:
					return 'Cuma';
				case Day.SATURDAY:
					return 'Cumartesi';
				case Day.SUNDAY:
					return 'Pazar';
				default:
					return day;
			}
		},
		timeTitle: 'Hangi Saat?',
		timeDescription1: 'Günlük',
		timeDescription2: 'doz hatırlatıcısı için bir saat seçin',
		hour: 'Saat:',
		minute: 'Dakika:',
		dayBeforeCheckbox: 'Bir gün önce bilgilendirilmek istiyorum',
		proceedButton: 'Devam et'
	},
	downloadCalendarFile: {
		title: 'Hatırlatıcıları İndir',
		description:
			'Hatırlatıcınız, cihazınıza indirilmeye hazır. Devam etmek için aşağıdaki indirme düğmesine basın ve takviminize geçin.',
		proceedButton: 'Takvime indir',
		mainNotificationTitle: 'SogroyaⓇ haftalık dozunuzu almanızın zamanı geldi',
		mainNotificationDescription: (dose: string) => `SogroyaⓇ'dan ${dose} alın`,
		dayBeforeNotificationTitle: 'Unutmayın, yarın SogroyaⓇ haftalık dozunuzu almanız gerekiyor',
		dayBeforeNotificationDescription: (dose: string) => `SogroyaⓇ'dan yarın için ${dose} hazırlayın`
	}
};
