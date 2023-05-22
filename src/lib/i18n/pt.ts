import { Day, type Dictionary } from '$lib/types';

export const pt: Dictionary = {
	productName: 'Sogroya®',
	doseSelection: {
		title: 'Bem-vindo!',
		description1: 'Para começar, vamos garantir',
		description2: 'que caneta você tem em mãos.',
		proceedButton: 'Vamos começar'
	},
	policyConsent: {
		title: 'Primeiros Passos',
		description1: 'Para ajudá-lo a começar bem com',
		description2: 'você pode escolher configurar lembretes semanais diretamente no seu calendário.',
		description3:
			'Se você deseja configurar um lembrete, marque a caixa abaixo para nos permitir calcular a entrada necessária.',
		consentCheckbox1: 'Sim, eu consinto em usar a função do calendário.',
		consentCheckbox2: 'Leia mais sobre a nossa',
		privacyPolicy: 'Política de Privacidade',
		proceedButton: 'Sim, definir lembrete'
	},
	dateTimeSelection: {
		dayTitle: 'Qual Dia?',
		dayDescription1: 'Selecione um dia para o lembrete da sua dose semanal',
		dayDescription2: '',
		day: (dia: Day | string) => {
			switch (dia) {
				case Day.MONDAY:
					return 'Segunda-feira';
				case Day.TUESDAY:
					return 'Terça-feira';
				case Day.WEDNESDAY:
					return 'Quarta-feira';
				case Day.THURSDAY:
					return 'Quinta-feira';
				case Day.FRIDAY:
					return 'Sexta-feira';
				case Day.SATURDAY:
					return 'Sábado';
				case Day.SUNDAY:
					return 'Domingo';
				default:
					return dia;
			}
		},
		timeTitle: 'Qual Hora?',
		timeDescription1: 'Selecione um horário para um lembrete diário de dose',
		timeDescription2: '',
		hour: 'Hora:',
		minute: 'Minuto:',
		dayBeforeCheckbox: 'Gostaria de ser informado um dia antes',
		proceedButton: 'Continuar'
	},
	downloadCalendarFile: {
		title: 'Baixar Lembretes',
		description:
			'Seu lembrete está pronto para ser baixado em seu dispositivo. Por favor, clique no botão de download abaixo para continuar no seu calendário.',
		proceedButton: 'Baixar para o calendário',
		mainNotificationTitle: 'É hora de tomar sua dose semanal de SogroyaⓇ',
		mainNotificationDescription: (dose: string) => `Tome ${dose} de SogroyaⓇ`,
		dayBeforeNotificationTitle: 'Lembre-se, amanhã é o dia de tomar sua dose semanal de SogroyaⓇ',
		dayBeforeNotificationDescription: (dose: string) => `Prepare ${dose} de SogroyaⓇ para amanhã`
	}
};
