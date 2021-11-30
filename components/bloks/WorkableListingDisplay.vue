<template>
  <div v-storyblok-editable="blok">
    <client-only>
      <workable-listing :status="blok.status" :city="blok.city" :department="blok.department" />
    </client-only>
  </div>
</template>

<script>
import WorkableListing from '../WorkableListing.vue'
export default {
  components: {
    WorkableListing
  },
  props: {
    blok: {
      type: Object,
      default: null
    }
  }
}
</script>
