import { Day, type Dictionary } from '$lib/types';

export const fr: Dictionary = {
	productName: 'Sogroya®',
	doseSelection: {
		title: 'Bienvenue!',
		description1: 'Pour commencer, vérifions ce que vous avez devant vous',
		description2: 'stylo.',
		proceedButton: 'Commençons'
	},
	policyConsent: {
		title: 'Démarrage',
		description1: 'Pour vous aider à bien commencer avec',
		description2:
			'vous pouvez choisir de configurer des rappels hebdomadaires directement dans votre calendrier.',
		description3:
			'Si vous souhaitez configurer un rappel, veuillez cocher la case ci-dessous pour nous permettre de calculer les entrées nécessaires.',
		consentCheckbox1: "Oui, j'accepte d'utiliser la fonction calendrier.",
		consentCheckbox2: 'En savoir plus sur notre',
		privacyPolicy: 'Politique de confidentialité',
		privacyPolicyURL: 'https://www.novonordisk.fr/privacy-policy.html',
		proceedButton: 'Oui, configurer le rappel'
	},
	dateTimeSelection: {
		dayTitle: 'Quel jour ?',
		dayDescription1: 'Veuillez sélectionner un jour pour votre rappel hebdomadaire',
		dayDescription2: 'de dose',
		day: (day: Day | string) => {
			switch (day) {
				case Day.MONDAY:
					return 'Lundi';
				case Day.TUESDAY:
					return 'Mardi';
				case Day.WEDNESDAY:
					return 'Mercredi';
				case Day.THURSDAY:
					return 'Jeudi';
				case Day.FRIDAY:
					return 'Vendredi';
				case Day.SATURDAY:
					return 'Samedi';
				case Day.SUNDAY:
					return 'Dimanche';
				default:
					return day;
			}
		},
		timeTitle: 'Quelle heure ?',
		timeDescription1: 'Veuillez sélectionner une heure pour un rappel quotidien',
		timeDescription2: 'de dose',
		hour: 'Heure :',
		minute: 'Minute :',
		dayBeforeCheckbox: 'Je souhaite être informé la veille',
		proceedButton: 'Continuer'
	},
	downloadCalendarFile: {
		title: 'Télécharger les rappels',
		description:
			'Votre rappel est prêt à être téléchargé sur votre appareil. Veuillez appuyer sur le bouton de téléchargement ci-dessous pour accéder à votre calendrier.',
		proceedButton: 'Télécharger vers le calendrier',
		mainNotificationTitle: 'Il est temps de prendre votre dose hebdomadaire de SogroyaⓇ',
		mainNotificationDescription: (dose: string) => `Prenez ${dose} de SogroyaⓇ`,
		dayBeforeNotificationTitle:
			"N'oubliez pas, demain est le jour de prendre votre dose hebdomadaire de SogroyaⓇ",
		dayBeforeNotificationDescription: (dose: string) => `Préparez ${dose} de SogroyaⓇ pour demain`
	}
};
