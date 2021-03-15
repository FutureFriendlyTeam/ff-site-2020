<template>
  <div v-storyblok-editable="blok">
    <client-only>
      <workable :status="blok.status" :city="blok.city" />
    </client-only>
  </div>
</template>

<script>
import Workable from '~/components/Workable.vue'
export default {
  components: {
    Workable
  },
  props: {
    blok: {
      type: Object,
      default: null
    }
  }
}
</script>
