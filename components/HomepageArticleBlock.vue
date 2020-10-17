<template>

  <article v-storyblok-editable="story" v-if="story"
           class="border-block xs-full s-half m-quarter v-margin-bottom">
    <a 
      :href="story.content.external_link.linktype === 'url' ? story.content.external_link.url : `/${story.full_slug}`"
      class="wrapper-link">
      <story-blok-image :filename="story.content.image.filename" :aspect="story.content.aspect" class="v-margin-bottom"/>
      <h2 class="mid v-margin-top-none">{{ story.name }}</h2>
      
    </a>
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
