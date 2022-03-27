<template>
  <div class="border-both section">
    <Input label="Title" type="text" v-model="experience.title" />

    <Input label="Company" type="text" v-model="experience.company" />

    <Input label="Industry" type="text" v-model="experience.industry" />

    <TextArea label="Summary" v-model="experience.summary" />
    
    <CheckBox v-model="experience.current" text="I currently work here" />
    
    <Date label="Start Date" type="date" v-model.lazy="experience.start_date" />
    
    <Date label="End Date" v-model.lazy="experience.end_date" 
        :disabled="experience.current" />

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
import CheckBox from '../formFields/CheckBox.vue'
import Date from '../formFields/Date.vue'
import Input from '../formFields/Input.vue'
import TextArea from '../formFields/TextArea.vue'

export default {
  components: { Button, CheckBox, Date, Input, TextArea },
  props: {
    srcExperience: {
      title: String,
      summary: String,
      company: String,
      industry: String,
      start_date: Date,
      end_date: Date,
      current: Boolean
    }
  },
  data() {
    return {
      experience: { ...this.srcExperience }
    }
  },
  watch: {
    experience: {
      handler(newValue) {
        this.$emit('change', newValue)
      },
      deep: true
    }
  }
}
</script>
