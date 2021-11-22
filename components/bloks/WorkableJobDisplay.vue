<template>
  <div v-storyblok-editable="blok">
    <client-only>
      <workable-job :status="blok.status" :city="blok.city" :department="blok.department" />
    </client-only>
  </div>
</template>

<script>
import WorkableJob from '../WorkableJob.vue'
export default {
  components: {
    WorkableJob
  },
  props: {
    blok: {
      type: Object,
      default: null
    }
  }
}
</script>
