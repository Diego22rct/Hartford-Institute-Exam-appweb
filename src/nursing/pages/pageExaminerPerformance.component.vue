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
	methods: {
		// Methods
	},
  async created() {
    const [examinersResponse, mentalExamsResponse] = await Promise.all([
      this.nursingApi.get("/examiners"),
      this.nursingApi.get("/mental-state-exams")
    ]);

    const examinersData = examinersResponse.data;

    this.examiners = examinersData.map((examiner) => {
      const mentalExam = mentalExamsResponse.data.filter(
          (exam) => exam.examinerId === examiner.id
      );

      const totalExams = mentalExam.length;
      const totalScore = mentalExam.reduce(
          (total, exam) => {
            total += exam.orientationScore;
            total += exam.registrationScore;
            total += exam.attentionAndCalculationScore;
            total += exam.recallScore;
            total += exam.languageScore;
            return total;
          }, 0
      );
      let averageScore = totalScore / totalExams;
      if (isNaN(averageScore)) {
        averageScore = 0;
      }
      return {
        // full name
        id: examiner.id,
        fullName: examiner.firstName + " " + examiner.lastName,
        nationalProviderIdentifier: examiner.nationalProviderIdentifier,
        totalExams,
        averageScore
      };
    });

    console.log(this.examiners);
  },
};
</script>

<template>
	<h1>{{ $t("nursing.sectionExaminer.title") }}</h1>
  <div class="columns-2">
      <examiner-card
        v-for="examiner in examiners"
        :key="examiner.id"
        :examiner="examiner"
      ></examiner-card>
  </div>
</template>

<style scoped>
.columns-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>