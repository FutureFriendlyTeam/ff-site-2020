<template>
  <div>
    <Input label="Title" type="text" v-model="experience.title" />

    <Input label="Company" type="text" v-model="experience.company" />

    <Input label="Industry" type="text" v-model="experience.industry" />

    <TextArea label="Summary" v-model="experience.summary" />
    <div>
      <label for="current">I currently work here</label>
      <input id="current" type="checkbox" v-model="experience.current" />
    </div>
    <div>
      <label for="start_date">Start Date</label>
      <input id="start_date" type="date" v-model.lazy="experience.start_date" />
    </div>
    <div>
      <label for="end_date">End Date</label>
      <input
        id="end_date"
        type="date"
        v-model.lazy="experience.end_date"
        :disabled="experience.current"
      />
    </div>
    <Button @click="$emit('delete')" text="Delete" />
  </div>
</template>

<script>
import Button from '../formFields/Button.vue'
import Input from '../formFields/Input.vue'
import TextArea from '../formFields/TextArea.vue'

export default {
  components: { Button, Input, TextArea },
  props: {
    srcExperience: {
      title: String,
      summary: String,
      company: String,
      industry: String,
      start_date: Date,
      end_date: Date,
      current: Boolean,
    },
  },
  data() {
    return {
      experience: { ...this.srcExperience },
    }
  },
  watch: {
    experience: {
      handler(newValue) {
        this.$emit('change', newValue)
      },
      deep: true,
    },
  },
}
</script>
