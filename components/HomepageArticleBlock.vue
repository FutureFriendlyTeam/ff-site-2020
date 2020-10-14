<template>

  <article v-editable="story" v-if="story"
           class="border-block xs-full s-half m-quarter v-margin-bottom">
    <a 
      :href="story.content.external_link.linktype === 'url' ? story.content.external_link.url : `/${story.full_slug}`"
      class="wrapper-link">
      <h2 class="mid v-margin-top-none v-margin-bottom">{{ story.name }}</h2>
      <story-blok-image :filename="story.content.image.filename" :aspect="story.content.aspect" class=""/>
    </a>
  </article>
</template>

<script>
export default {
  name: 'HomepageArticleBlock',
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
