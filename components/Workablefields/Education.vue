<template>
  <div class="border-both section">
    <Input type="text" label="School" v-model="education.school" />

    <Input type="text" label="Degree" v-model="education.degreee" />

    <Input
      label="Field of study"
      type="text"
      v-model="education.field_of_study"
    />
    <div>
      <label for="start_date">Start Date</label>
      <input id="start_date" type="date" v-model.lazy="education.start_date" />
    </div>
    <div>
      <label for="end_date">End Date</label>
      <input id="end_date" type="date" v-model.lazy="education.end_date" />
    </div>
    <Button @click="$emit('delete')" text="Delete" />
  </div>
</template>


<style lang="scss" scoped>
@import '../../scss/variables.scss';

.section {
  margin-top: 1.5em;
}

</style>
<script>
import Button from '../formFields/Button.vue'
import Input from '../formFields/Input.vue'

export default {
  components: { Button, Input },
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
