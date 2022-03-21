<template>
  <div>
    <div>
      <label>School</label>
      <input type="text" v-model="education.school" />
    </div>

    <div>
      <label>Degreee</label>
      <input type="text" v-model="education.degreee" />
    </div>

    <div>
      <label>Field of study</label>
      <input type="text" v-model="education.field_of_study" />
    </div>
    <div>
      <label>Start Date</label>
      <input type="date" v-model.lazy="education.start_date" />
    </div>
    <div>
      <label>End Date</label>
      <input type="date" v-model.lazy="education.end_date" />
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
