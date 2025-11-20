<template>
  <div v-if="false" class="vertical xs-full s-half h-padding-right clear-left">
    <div class="v-margin-top border-both">
      <h3>Join our team</h3>
      <p class="mini">
        We’re always looking for great people! See our current open roles on our LinkedIn page.
        <a href="https://www.linkedin.com/jobs/ey-future-friendly-jobs-worldwide" target="_blank" rel="noopener noreferrer">
          View jobs on LinkedIn
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkedInJobsLink'
}
</script>

<style scoped>
.vertical {
  display: flex;
  flex-direction: column;
}
.v-margin-top {
  margin-top: 1.5rem;
}
.border-both {
  padding: 0 1rem;
}
</style>
