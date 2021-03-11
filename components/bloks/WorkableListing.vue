<template>
  <section
    v-storyblok-editable="blok"
    class="v-padding-top-big v-padding-bottom-big headline"
  >
    <div class="center-col">
      <pre>Workable</pre>
      <ul>
        <li
          v-for="job in jobs"
          :key="job.shortcode"
        >
          <a :href="job.url" target="_blank">
            <strong>{{ job.title }}</strong>
            <small>
              <span v-if="job.city">{{ job.city }}, Australia</span>
              <span v-if="job.city && job.employment_type"> &mdash; </span>
              <span v-if="job.employment_type">{{ job.employment_type }}</span>
            </small>
          </a>
        </li>
      </ul>
    </div>
  </section>
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
      jobs: []
    }
  },
  mounted() {
    const oldWhrcallback = window.whrcallback

    window.whrcallback = ({ jobs }) => {
      this.$set(this, 'jobs', jobs || [])
      console.log('jobs', jobs)

      if (oldWhrcallback) {
        oldWhrcallback(e)
      }
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
