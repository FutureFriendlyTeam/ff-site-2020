<template>
  <future-div :background-color="'light'">
    <section id="case-studies" class="v-padding-bottom-mega">
      <div class="center-col horizontal">
        <work-block
          v-for="(story, i) in work"
          :key="`case-study-${i}`"
          :story="story"
        />
      </div>
    </section>
  </future-div>
</template>

<script>
import WorkBlock from '~/components/WorkBlock.vue'

export default {
  components: {
    WorkBlock,
  },
  props: {
    blok: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      work: [],
    }
  },
  async fetch() {
    return this.$storyblok
      .get(`cdn/stories/?starts_with=case-studies/`)
      .then((res) => {
        console.log('async data loaded')
        this.$set(this, 'work', res.data.stories)
      })
  },
  async mounted() {
    console.log(this.$storyblok.isEditorMode())

    if (this.$storyblok.isEditorMode()) {
      this.$storyblok
        .get(`cdn/stories/?starts_with=case-studies/`)
        .then((res) => {
          console.log('async data loaded')
          this.$set(this, 'work', res.data.stories)
        })
    }
    // await this.$storyblok.initEditor(this)
  },
}
</script>

<style lang="scss" scoped>
#case-studies {
  min-height: 100vh;
}
</style>
