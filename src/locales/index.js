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
				},
			},
			nursing: {
				title: "Examiner Performance Overview",
				card: {
					title: "Mental State Exam Performance",
					CurrentExamCount: "Current Assigned Mental State Exam Count",
					AverageExam: "Average Assigned Mental State Exam Total Score",
				},
				sectionExaminer: {
					title: "Examiner Performance Overview",
				},
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
				},
			},
			nursing: {
				title: "Resumen del rendimiento de los examinadores",
				card: {
					title: "Rendimiento del examen del estado mental",
					CurrentExamCount: "Conteo actual de exámenes de estado mental asignados",
					AverageExam: "Promedio de Calificación Total de Exámenes de Salud Mental Asignados",
				},
				sectionExaminer: {
					title: "Resumen del rendimiento de los examinadores",
				},
				}
			},
		},
});

export default i18n;
