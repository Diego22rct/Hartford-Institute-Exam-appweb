import { createApp } from "vue";
import App from "./App.vue";

// i18n
import i18n from "./locales";

//router
import router from "./router";

// Primevue
import PrimeVue from "primevue/config"; // PrimeVue CSS
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/mdc-light-indigo/theme.css";

// PrimeVue Components
import Button from "primevue/button";
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Image from "primevue/image";

createApp(App)
	.use(PrimeVue, { ripple: true })
	.use(i18n)
	.use(router)
	.component("pv-button", Button)
	.component("pv-card", Card)
	.component("pv-toolbar", Toolbar)
	.component("pv-image", Image)
	.mount("#app");
