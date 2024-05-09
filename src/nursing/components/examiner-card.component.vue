<script>

export default {
  name: 'ExaminerCard',
  props: {
    examiner: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div>
  <pv-card>
    <template #title>
      <h3>{{ examiner.fullName }} NPI:{{examiner.nationalProviderIdentifier}}</h3>
    </template>
    <template #subtitle>
      <h4>{{$t("nursing.card.title")}}</h4>
    </template>
    <template #content>
      <p>{{ $t("nursing.card.CurrentExamCount")}}: <b>{{examiner.totalExams}}</b></p>
      <p>{{$t("nursing.card.AverageExam")}}: <b>{{examiner.averageScore}}</b></p>
    </template>
  </pv-card>
  </div>
</template>

<style scoped>

</style>