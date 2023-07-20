import { Day, type Dictionary } from '$lib/types';

export const pt: Dictionary = {
	productName: 'Sogroya®',
	doseSelection: {
		title: 'Bem-vindo(a)!',
		description1: 'Para começar, vamos garantir',
		description2: 'qual caneta de Sogroya® você tem em mãos.',
		proceedButton: 'Vamos começar'
	},
	policyConsent: {
		title: 'Primeiros Passos',
		description1: 'Para ajudá-lo(a) em seu tratamento com',
		description2: 'você pode escolher configurar lembretes semanais diretamente no calendário do seu smartphone.',
		description3:
			'Se você deseja configurar um lembrete, por favor marque a caixa abaixo para nos permitir auxiliá-lo nesta atividade',
		consentCheckbox1: 'Sim, eu concordo com o uso da função Calendário.',
		consentCheckbox2: 'Leia mais sobre a nossa',
		privacyPolicy: 'Política de Privacidade',
		privacyPolicyURL: 'https://www.novonordisk.com.br/privacy-policy.html',
		proceedButton: 'Sim, definir lembrete'
	},
	dateTimeSelection: {
		dayTitle: 'Qual Dia?',
		dayDescription1: 'Selecione um dia da semana para o lembrete da sua dose semanal',
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
		timeDescription1: 'Selecione horário para o lembrete da sua dose semanal',
		timeDescription2: '',
		hour: 'Hora:',
		minute: 'Minuto:',
		dayBeforeCheckbox: 'Gostaria de receber um lembrete no dia anterior à aplicação',
		proceedButton: 'Continuar'
	},
	downloadCalendarFile: {
		title: 'Baixar Lembretes',
		description:
			'Seu lembrete está pronto para ser baixado em seu dispositivo. Por favor, clique no botão de download abaixo para continuar no calendário do seu smartphone',
		proceedButton: 'Baixar para o calendário',
		mainNotificationTitle: 'É hora de tomar sua dose semanal de SogroyaⓇ',
		mainNotificationDescription: (dose: string) => `Tome ${dose} de SogroyaⓇ`,
		dayBeforeNotificationTitle: 'Lembre-se, amanhã é o dia de tomar sua dose semanal de SogroyaⓇ',
		dayBeforeNotificationDescription: (dose: string) => `Prepare ${dose} de SogroyaⓇ para amanhã`
	}
};
