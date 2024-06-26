/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */
import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../public/pages/Home/home.component.vue";
import notFoundComponent from "../public/pages/notFound/notFound.component.vue";
import pageExaminerPerformanceComponent from "../nursing/pages/pageExaminerPerformance.component.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/home" },
		{ path: "/:pathMatch(.*)*", component: notFoundComponent },
		{ path: "/home", component: HomeComponent, meta: { title: "Home" } },
		{
			path: "/nursing/examiner-performance-overview",
			component: pageExaminerPerformanceComponent,
			meta: { title: "Examiner Performance Overview" },
		},
	],
});

/**
 * Set Business name as prefix for each page title
 * No param need to be passed
 * Sets the title of the page HIGH
 */
router.beforeEach((to, _from, next) => {
	let baseTitle = "HIGN";
	document.title = `${baseTitle} | ${to.meta["title"]}`;
	next();
});

export default router;
