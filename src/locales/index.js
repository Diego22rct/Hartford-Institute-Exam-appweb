import { createI18n } from "vue-i18n";

const i18n = createI18n({
	locale: "en",
	messages: {
		en: {
			home: {},
			nursing: {
				title: "Examiner Performance Overview",
				data: {},
			},
		},
		es: {
			home: {},
			nursing: {
				title: "Resumen del rendimiento de los examinadores",
				data: {},
			},
		},
	},
});

export default i18n;
