<script>
import nursingService from "../services/nursing-api.service.js";
import examinerCard from "../components/examiner-card.component.vue";

export default {
	name: "pageExaminerPerformance",
	data() {
		return {
			examiners: [],
			nursingApi: new nursingService(),
		};
	},
	components: {
		examinerCard,
	},
	/**
	 * This lifecycle hook is called when the component is created.
	 * It fetches data from the server and calculates the performance metrics for each examiner.
	 * @returns {Promise<void>}
	 */
	async created() {
		// Fetch data from the server
		const [examinersResponse, mentalExamsResponse] = await Promise.all([
			this.nursingApi.get("/examiners"),
			this.nursingApi.get("/mental-state-exams"),
		]);

		const examinersData = examinersResponse.data;

		this.examiners = examinersData.map((examiner) => {
			// Filter mental exams for the current examiner
			const mentalExam = mentalExamsResponse.data.filter(
				(exam) => exam.examinerId === examiner.id,
			);

			// Calculate total exams and total score for the examiner
			const totalExams = mentalExam.length;
			const totalScore = mentalExam.reduce((total, exam) => {
				total += exam.orientationScore;
				total += exam.registrationScore;
				total += exam.attentionAndCalculationScore;
				total += exam.recallScore;
				total += exam.languageScore;
				return total;
			}, 0);

			// Calculate average score for the examiner
			let averageScore = totalScore / totalExams;
			if (isNaN(averageScore)) {
				averageScore = 0;
			}

			// Return the examiner object with performance metrics
			return {
				id: examiner.id,
				fullName: examiner.firstName + " " + examiner.lastName,
				nationalProviderIdentifier: examiner.nationalProviderIdentifier,
				totalExams,
				averageScore,
			};
		});
	},
};
</script>

<template>
	<h1>{{ $t("nursing.sectionExaminer.title") }}</h1>
	<div class="columns-2">
		<examiner-card
			v-for="examiner in examiners"
			:key="examiner.id"
			:examiner="examiner"></examiner-card>
	</div>
</template>

<style scoped>
.columns-2 {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
}
</style>
