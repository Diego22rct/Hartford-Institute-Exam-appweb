/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */
import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../public/pages/Home/home.component.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/home" },
		{ path: "/:pathMatch(.*)*", component: notFoundComponent },
		{ path: "/home", component: HomeComponent, meta: { title: "Home" } },
		{
			path: "/nursing/examiner-performance-overview",
			component: pageMentalStateExams,
			meta: { title: "Examiner Performance Overview" },
		},
	],
});

/**
 * Set Business name as prefix for each page title
 */
router.beforeEach((to, from, next) => {
	let baseTitle = "HIGN";
	document.title = `${baseTitle} | ${to.meta["title"]}`;
	next();
});

export default router;
