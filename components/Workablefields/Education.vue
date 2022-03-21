<template>
  <div>
    <div>
      <label for="school">School</label>
      <input id="school" type="text" v-model="education.school" />
    </div>

    <div>
      <label for="degree">Degreee</label>
      <input id="degree" type="text" v-model="education.degreee" />
    </div>

    <div>
      <label for="field_of_study">Field of study</label>
      <input
        id="field_of_study"
        type="text"
        v-model="education.field_of_study"
      />
    </div>
    <div>
      <label for="start_date">Start Date</label>
      <input id="start_date" type="date" v-model.lazy="education.start_date" />
    </div>
    <div>
      <label for="end_date">End Date</label>
      <input id="end_date" type="date" v-model.lazy="education.end_date" />
    </div>
    <button @click="$emit('delete')">Delete Entry</button>
  </div>
</template>

<style lang="scss" scoped>
// @import '../scss/variables.scss';
</style>

<script>
export default {
  props: {
    srcEducation: {
      school: String,
      degreee: String,
      field_of_study: String,
      start_date: Date,
      end_date: Date,
    },
  },
  data() {
    return {
      education: { ...this.srcEducation },
    }
  },
  watch: {
    education: {
      handler(newValue) {
        this.$emit('change', newValue)
      },
      deep: true,
    },
  },
}
</script>
