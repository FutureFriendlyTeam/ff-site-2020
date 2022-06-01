<template>
  <div class="vertical xs-full s-half h-padding-right clear-left">
    <div v-if="loaded">
      <workable-detail
        :is-open="detailOpen"
        :shortcode="selectedShortcode"
        :title="selectedTitle"
        @close="onClose"
        @closecomplete="onCloseComplete"
      />
      <div
        v-for="(item, key) in availableJobsByCity"
        :key="key"
        class="v-margin-top border-both"
      >
        <h3>{{ key }}</h3>
        <ul>
          <li v-for="job in item" :key="job.shortcode" class="mini">
            <a class="fakelink" @click="onOpen(job.shortcode)">{{
              job.title
            }}</a>
            <span v-if="job.employment_type">
              ({{ job.employment_type }})
            </span>
          </li>
        </ul>
      </div>
      <div class="v-margin-top mini border-both">
        <span v-if="numJobs > 0"
        >Want to join our team but don't see a job listing that matches?
        We</span
        >
        <span v-else>We currently aren't advertising any jobs, but we</span>
        always keep our ear to the ground for great people -
        <a href="https://apply.workable.com/futurefriendly/j/B2871A5501/apply/"
           target="_blank" rel="noreferrer noopener"
        >please get in touch!</a
        >
      </div>
    </div>
    <div v-else>
      <div class="lines-spinner">
        <div class="line"/>
        <div class="line"/>
        <div class="line"/>
        <div class="line"/>
      </div>
    </div>
  </div>
</template>

<script>
import WorkableDetail from '../WorkableDetail.vue'

export default {
  name: 'WorkableList',
  components: { WorkableDetail },
  data() {
    return {
      loaded: false,
      jobs: [],
      numJobs: 0,
      selectedShortcode: undefined,
      selectedTitle: undefined,
      detailOpen: false
    }
  },
  async fetch() {
    this.jobs = await this.$axios.$get(
      'https://j0vz06anpf.execute-api.ap-southeast-2.amazonaws.com/jobs'
    )
    this.loaded = true
  },
  fetchOnServer: false,
  computed: {
    availableJobsByCity() {
      const filtered = this.jobs.filter(job => {
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
    }
  },
  methods: {
    onOpen(shortcode) {
      this.selectedShortcode = shortcode
      this.selectedTitle = this.jobs.find(
        job => job.shortcode === shortcode
      ).title
      this.detailOpen = true
    },
    onClose() {
      this.selectedShortcode = undefined
      this.detailOpen = false
    },
    onCloseComplete() {}
  }
}
</script>
