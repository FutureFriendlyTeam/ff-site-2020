<template>
  <ul v-if="filteredJobs.length > 0">
    <li v-for="job in filteredJobs" :key="job.shortcode" class="v-margin-top">
      <a :href="job.url" target="_blank">{{ job.title }}</a>
      <span v-if="job.employment_type" class="mini">
        ({{ job.employment_type }})
      </span>
    </li>
  </ul>
  <p v-else class="mini">
    No advertised roles, but we're always looking for great people &mdash;
    <a href="https://apply.workable.com/j/B2871A5501">get in touch!</a>
  </p>
</template>

<script>
export default {
  name: 'Workable',
  props: {
    status: {
      type: String,
      default: '',
    },
    city: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      jobs: undefined,
    }
  },
  computed: {
    filteredJobs() {
      const selectedStatus = this.status || ''
      const selectedCity = this.city || []
      const filterByStatus = selectedStatus !== ''
      const filterByCity = selectedCity.length > 0

      return (
        this.jobs?.filter(({ city, employment_type }) => {
          if (
            filterByStatus &&
            selectedStatus !== employment_type.toLowerCase()
          ) {
            return false
          }

          if (filterByCity && !selectedCity.includes(city.toLowerCase())) {
            return false
          }

          return true
        }) || []
      )
    },
  },
  mounted() {
    const oldCallback = window.whrcallback

    window.whrcallback = (e) => {
      if (oldCallback) {
        oldCallback(e)
      }

      this.$set(this, 'jobs', e.jobs)
    }

    const url = 'https://apply.workable.com/api/v1/widget/accounts/11883'
    const query = '?origin=embed&callback=whrcallback'
    const scriptTag = document.createElement('script')
    scriptTag.src = url + query
    scriptTag.type = 'text/javascript'

    const headTag = document.getElementsByTagName('head')[0]
    headTag.appendChild(scriptTag)
  },
}
</script>
