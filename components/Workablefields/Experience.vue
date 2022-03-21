<template>
  <div>
    <div>
      <label for="title">Title</label>
      <input id="title" type="text" v-model="experience.title" />
    </div>
    <div>
      <label for="company">Company</label>
      <input id="company" type="text" v-model="experience.company" />
    </div>
    <div>
      <label for="industry">Industry</label>
      <input id="industry" type="text" v-model="experience.industry" />
    </div>
    <div>
      <label for="summary">Summary</label>
      <textarea id="summary" v-model="experience.summary" rows="4" />
    </div>
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
    <button @click="$emit('delete')">Delete Entry</button>
  </div>
</template>

<style lang="scss" scoped>
// @import '../scss/variables.scss';
</style>

<script>
export default {
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
