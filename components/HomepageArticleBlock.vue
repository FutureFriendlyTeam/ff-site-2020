<template>

  <article v-storyblok-editable="story" v-if="story"
           class="border-block xs-full s-half m-quarter v-margin-bottom">
    <component :is="wrapperComponent"
               :href="wrapperComponent === 'a' || wrapperComponent === 'nuxt-link' ? story.content.external_link.cached_url : false"
               :target="wrapperComponent === 'a' ? '_blank' : false"
               :to="wrapperComponent === 'a' || wrapperComponent === 'nuxt-link' ? story.content.external_link.cached_url : false"
               class="wrapper-link">
      <story-blok-image :filename="story.content.image.filename" :aspect="story.content.aspect" :alt="story.content.image.name" :no-scale="true" class="v-margin-bottom"/>
      <h2 class="mid highlight v-margin-top-none ">{{ story.name }}</h2>
      <p class="mid highlight underline v-margin-bottom-big">Read Article</p>
      
    </component>
  </article>
</template>

<script>
export default {
  name: 'HomepageArticleBlock',
  props: {
    story: {
      type: Object,
      default: null
    }
  },
  computed: {
    wrapperComponent() {
      if (this.story.content.external_link) {
        if (
          this.story.content.external_link.linktype === 'story' &&
          this.story.content.external_link.cached_url !== ''
        ) {
          return 'nuxt-link'
        }

        if (
          this.story.content.external_link.linktype !== 'story' &&
          this.story.content.external_link.cached_url !== ''
        ) {
          return 'a'
        }
      }

      return 'div'
    }
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
