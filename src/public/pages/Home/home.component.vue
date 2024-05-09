<script>
import GeneralApiService from "../../services/general-api.service.js";

export default {
	name: "app-home",
	data() {
		return {
			apiService: new GeneralApiService(),
			ExamCount: 0,
			HighestScore: 0,
			LowestScore: 0,
			AverageScore: 0,
		};
	},
	created() {
		/**
		 * Fetches mental state exams from the API and calculates various statistics based on the exam scores.
		 *
		 * @method fetchMentalStateExams
		 * @async
		 * @returns {Promise<void>} A promise that resolves when the exams are fetched and the statistics are calculated.
		 * @throws {Error} If there is an error while fetching the exams.
		 */
		this.apiService
			.get("/mental-state-exams")
			.then((response) => {
				const exams = response.data;
				this.ExamCount = exams.length;
				let totalScore = 0;
				exams.map((exam) => {
					let totalInExam = 0;
					totalInExam += exam.orientationScore;
					totalInExam += exam.registrationScore;
					totalInExam += exam.attentionAndCalculationScore;
					totalInExam += exam.recallScore;
					totalInExam += exam.languageScore;
					if (this.HighestScore < totalInExam) {
						this.HighestScore = totalInExam;
					}
					if (this.LowestScore > totalInExam || this.LowestScore === 0) {
						this.LowestScore = totalInExam;
					}
					totalScore += totalInExam;
				});
				this.AverageScore = totalScore / exams.length;
			})
			.catch((error) => {
				console.error(error);
			});
	},
};
</script>

<template>
	<main class="">
		<div class="flex flex-inline align-items-center gap-4">
			<h1>{{ $t("home.title") }}</h1>
			<p>{{ $t("home.text") }}</p>
		</div>

		<pv-card>
			<template #title>
				<h2>{{ $t("home.analytics.title") }}</h2>
			</template>
			<template #subtitle>
				<p>{{ $t("home.analytics.subtitle") }}</p>
			</template>
			<template #content>
				<div class="flex flex-inline align-items-center gap-4">
					<p>{{ $t("home.analytics.examCount") }}: {{ ExamCount }}</p>
					<p>{{ $t("home.analytics.highestScore") }}: {{ HighestScore }}</p>
					<p>{{ $t("home.analytics.lowestScore") }}: {{ LowestScore }}</p>
					<p>{{ $t("home.analytics.averageScore") }}: {{ AverageScore }}</p>
				</div>
			</template>
		</pv-card>
	</main>
</template>
