<script>
export default {
	name: "ToolBar",
	data() {
		return {
			nowLocale: this.$i18n.locale,
			availableLocales: [],
		};
	},
	created() {
		/**
		 * Initializes the availableLocales array with the available locales from the i18n plugin.
		 */
		this.$i18n.availableLocales.forEach((locale) => {
			this.availableLocales.push(locale);
			console.log(this.availableLocales);
		});
	},
	methods: {
		/**
		 * Changes the locale of the application.
		 *
		 * @param {string} locale - The new locale to set.
		 */
		changeLocale(locale) {
			this.$i18n.locale = locale;
		},
	},
};
</script>

<template>
	<pv-toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
		<template #start>
			<div class="flex align-items-center gap-2">
				<pv-image src="/public/HIGN-logo.png" alt="HIGN Logo" height="50" />
			</div>
		</template>
		<template #end>
			<div class="flex align-items-center gap-2">
				<router-link to="/home">
					<pv-button
						:label="$t('navbar.home')"
						text
						plain
						severity="contrast" />
				</router-link>
				<router-link to="/nursing/examiner-performance-overview">
					<pv-button
						:label="$t('navbar.examinerPerformance')"
						text
						plain
						severity="contrast" />
				</router-link>
				<pv-selectbutton
					v-model="nowLocale"
					:options="availableLocales"
					aria-labelledby="basic"
					@change="changeLocale(nowLocale)" />
			</div>
		</template>
	</pv-toolbar>
</template>
