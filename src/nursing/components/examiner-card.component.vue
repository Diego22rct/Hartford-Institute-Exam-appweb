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
  <pv-card>
    <template #title>
      <h3>{{ examiner.fullName }} NPI:{{examiner.nationalProviderIdentifier}}</h3>
    </template>
    <template #subtitle>
      <h4>{{$t("nursing.card.title")}}</h4>
    </template>
    <template #content>
      <p>{{ $t("nursing.card.CurrentExamCount")}}: {{examiner.CurrentExamCount}}</p>
      <p>{{$t("nursing.card.AverageExam")}}: {{examiner.AverageExam}}</p>
    </template>
  </pv-card>
</template>

<style scoped>

</style>