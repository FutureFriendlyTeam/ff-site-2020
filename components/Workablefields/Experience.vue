<template>
  <div>
    <div>
      <label>Title</label>
      <input type="text" v-model="experience.title" />
    </div>
    <div>
      <label>Company</label>
      <input type="text" v-model="experience.company" />
    </div>
    <div>
      <label>Industry</label>
      <input type="text" v-model="experience.industry" />
    </div>
    <div>
      <label>Summary</label>
      <textarea v-model="experience.summary" rows="4" />
    </div>
    <div>
      <label>I currently work here</label>
      <input type="checkbox" v-model="experience.current" />
    </div>
    <div>
      <label>Start Date</label>
      <input type="date" v-model.lazy="experience.start_date" />
    </div>
    <div>
      <label>End Date</label>
      <input
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
