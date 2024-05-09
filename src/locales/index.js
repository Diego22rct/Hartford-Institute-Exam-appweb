import { createI18n } from "vue-i18n";

const i18n = createI18n({
	locale: "en",
	messages: {
		en: {
			navbar: {
				home: "Home",
				examinerPerformance: "Examiner Performance overview",
			},
			home: {
				title: "Home",
				text: "Welcome to HIGN",
				analytics: {
					title: "Mental State Exam Analytics",
					subtitle: "Score Analytics",
					examCount: "Exam Count",
					highestScore: "Highest Score",
					lowestScore: "Lowest Score",
					averageScore: "Average Score",
				}
			},
			nursing: {
				title: "Examiner Performance Overview",
				data: {},
			},
		},
		es: {
			navbar: {
				home: "Inicio",
				examinerPerformance: "Resumen del rendimiento de los examinadores",
			},
			home: {
				title: "Inicio",
				text: "Bienvenido a HIGN",
				analytics: {
					title: "Análisis del examen del estado mental",
					subtitle: "Análisis de puntuación",
					examCount: "Conteo de exámenes",
					highestScore: "Puntuación más alta",
					lowestScore: "Puntuación más baja",
					averageScore: "Puntuación promedio",
				}
			},
			nursing: {
				title: "Resumen del rendimiento de los examinadores",
				data: {},
			},
		},
	},
});

export default i18n;
