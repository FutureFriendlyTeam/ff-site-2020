<template>

  <article v-editable="story" v-if="story"
           :class="story.content.thumbnail_size" 
           class="work-block border-block xs-full v-margin-bottom v-padding-bottom-mega">

    <nuxt-link 
      :to="`/${story.full_slug}`"
      class="wrapper-link">

      <story-blok-image :filename="story.content.image.filename" aspect="four-three" class="v-margin-bottom"/>
      <section>
        <h2 class="body v-margin-top-none">{{ story.content.title }}</h2>
        <p class="body v-margin-top-none">With {{ story.content.client }}</p>
      </section>
    </nuxt-link>
  </article>
</template>

<script>
import AwardBadge from '~/components/AwardBadge.vue'
export default {
  name: 'WorkBlock',
  components: {
    AwardBadge
  },
  props: {
    uuid: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      story: null
    }
  },
  mounted() {
    if (
      this.$route.query._storyblok ||
      window.Storyblok ||
      this.$nuxt.context.isDev ||
      this.uuid != this.story.uuid
    ) {
      this.$fetch()
    }
  },
  async fetch() {
    let version = this.$route.query._storyblok ? 'draft' : 'published'

    console.log('loading item', version)

    return this.$storyapi
      .get(`cdn/stories/${this.uuid}?find_by=uuid`, {
        version: version
      })
      .then(res => {
        this.$set(this, 'story', { ...{}, ...res.data.story })
      })
  }
}
</script>

<style scoped lang="scss">
.badge-container {
  position: absolute;
  bottom: 0rem;
  right: 0rem;
}

.link {
  text-decoration: none;
}
</style>
