<template>
  <future-div :background-color="'light'">
    <section id="case-studies" class="v-padding-bottom-mega v-padding-top-mega">
      <div class="center-col">
        <h2>Read next.</h2>
        <div class="horizontal">
          <work-block
            v-for="(story, i) in work"
            :key="`case-study-${i}`"
            :compact="true"
            :story="story"
          />
        </div>
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
    storyId: {
      type: Number,
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
      .get(
        `cdn/stories/?starts_with=case-studies/&excluding_ids=${this.storyId}`
      )
      .then(res => {
        // array

        this.$set(
          this,
          'work',
          res.data.stories.sort(() => Math.random() - Math.random()).slice(0, 3)
        )
      })
  }
}
</script>

<style lang="scss" scoped>
#case-studies {
  min-height: 60vh;
}
</style>
