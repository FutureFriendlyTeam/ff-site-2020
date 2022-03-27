<template>
  <div class="border-both section">
    <Input type="text" label="School" v-model="education.school" />

    <Input type="text" label="Degree" v-model="education.degree" />

    <Input
      label="Field of study"
      type="text"
      v-model="education.field_of_study"
    />
    
    <Date label="Start Date" type="date" v-model.lazy="education.start_date" />

    <Date label="End Date" v-model.lazy="education.end_date" />

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
import Date from '../formFields/Date.vue'
import Input from '../formFields/Input.vue'

export default {
  components: { Button, Date, Input },
  props: {
    srcEducation: {
      school: String,
      degree: String,
      field_of_study: String,
      start_date: Date,
      end_date: Date
    }
  },
  data() {
    return {
      education: { ...this.srcEducation }
    }
  },
  watch: {
    education: {
      handler(newValue) {
        this.$emit('change', newValue)
      },
      deep: true
    }
  }
}
</script>
