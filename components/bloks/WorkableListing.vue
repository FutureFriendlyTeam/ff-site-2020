<template>
  <div v-storyblok-editable="blok">
    <ul>
      <li
        v-for="job in filteredJobs"
        :key="job.shortcode"
        class="v-margin-top"
      >
        <a :href="job.url" target="_blank">{{ job.title }}</a>
        <span v-if="job.employment_type" class="mini"> ({{ job.employment_type }})</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      jobs: undefined,
    }
  },
  computed: {
    filteredJobs() {
      const selectedStatus = this.blok?.status || ''
      const selectedCity = this.blok?.city || []
      const filterByStatus = selectedStatus !== ''
      const filterByCity = selectedCity.length > 0

      return this.jobs?.filter(({ city, employment_type }) => {
        if (filterByStatus && selectedStatus !== employment_type.toLowerCase()) {
          return false
        }

        if (filterByCity && !selectedCity.includes(city.toLowerCase())) {
          return false
        }

        return true
      }) || []
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
