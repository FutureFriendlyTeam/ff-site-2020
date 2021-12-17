<template>
  <div class="vertical xs-full s-half h-padding-right clear-left">
    <div
      v-for="(item, key) in availableJobsByCity"
      :key="key"
      class="v-margin-top"
    >
      <h3>{{ key }}</h3>
      <ul>
        <li v-for="job in item" :key="job.shortcode" class="mini">
          <a class="fakelink">{{ job.title }}</a>
          <span v-if="job.employment_type"> ({{ job.employment_type }}) </span>
        </li>
      </ul>
    </div>
    <div class="v-margin-top mini">
      <span v-if="numJobs > 0"
        >Want to join our team but don't see a job listing that matches?
        We</span
      >
      <span v-else>We currently aren't advertising any jobs, but we</span>
      always keep our ear to the ground for great people -
      <a href="https://apply.workable.com/j/14091E408E">please get in touch!</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkableList',
  data() {
    return {
      jobs: [],
      numJobs: 0,
    }
  },
  async fetch() {
    this.jobs = await this.$axios.$get(
      'https://j0vz06anpf.execute-api.ap-southeast-2.amazonaws.com/jobs'
    )
  },
  fetchOnServer: false,
  computed: {
    availableJobsByCity() {
      const filtered = this.jobs.filter((job) => {
        return job.city !== null
      })
      this.numJobs = filtered.length

      return filtered.reduce((acc, job) => {
        if (Object.keys(acc).includes(job.city)) {
          acc[job.city].push(job)
        } else {
          acc[job.city] = [job]
        }
        return acc
      }, {})
    },
  },
}
</script>
