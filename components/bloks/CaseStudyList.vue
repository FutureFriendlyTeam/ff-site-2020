<template>
  <future-div :background-color="'light'">

    <section class="v-padding-bottom-mega">
      <div class="center-col horizontal">
        <work-block
          v-for="(story, i) in work"
          :key="`case-study-${i}`" 
          :story="story"/>
      </div>
    </section>

  </future-div>
</template>

<script>
import WorkBlock from '~/components/WorkBlock.vue'

export default {
  components: {
    WorkBlock
  },
  props: {
    blok: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      work: []
    }
  },
  mounted() {
    this.$fetch()
  },
  async fetch() {
    return this.$storyblok
      .get(`cdn/stories/?starts_with=case-studies/`)
      .then(res => {
        console.log(res)
        this.$set(this, 'work', res.data.stories)
        // console.log(this.links)
      })
  }
}
</script>
