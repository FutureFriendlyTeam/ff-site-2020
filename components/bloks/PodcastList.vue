<template>
  <future-div :background-color="'#5422C4'" :text-color="'#FFFFFF'">
    <section id="podcasts" class="v-padding-bottom-mega">
      <div class="center-col horizontal">
        <h1 class="big xs-full v-margin-bottom">More Episodes</h1>
        <podcast-block
          v-for="(story, i) in episodes"
          :key="`podcast-${i}`"
          :compact="true"
          :story="story"
        />
      </div>
    </section>
  </future-div>
</template>

<script>
import PodcastBlock from '~/components/PodcastBlock.vue'

export default {
  components: {
    PodcastBlock
  },
  props: {
    blok: {
      type: Object,
      default: null
    },
    storyId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      episodes: []
    }
  },
  async fetch() {
    return this.$storyblok
      .get(`cdn/stories/?starts_with=podcasts/&excluding_ids=${this.storyId}`)
      .then(res => {
        console.log('async data loaded')
        this.$set(this, 'episodes', res.data.stories)
      })
  },
  async mounted() {
    console.log(this.$storyblok.isEditorMode())

    if (this.$storyblok.isEditorMode()) {
      this.$storyblok
        .get(`cdn/stories/?starts_with=podcasts/&excluding_ids=${this.storyId}`)
        .then(res => {
          console.log('async data loaded')
          this.$set(this, 'episodes', res.data.stories)
        })
    }
    // await this.$storyblok.initEditor(this)
  }
}
</script>

<style lang="scss" scoped>
#case-studies {
  min-height: 100vh;
}
</style>
