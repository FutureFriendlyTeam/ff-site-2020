<template>

  <article v-storyblok-editable="story" v-if="story"
           class="border-block xs-full s-half m-quarter v-margin-bottom">
    <a 
      :href="story.content.external_link.linktype === 'url' ? story.content.external_link.url : `/${story.full_slug}`" target="_blank"
      class="wrapper-link">
      <story-blok-image :filename="story.content.image.filename" :aspect="story.content.aspect" :alt="story.content.image.name" :no-scale="true" class="v-margin-bottom"/>
      <h2 class="mid highlight v-margin-top-none ">{{ story.name }}</h2>
      <p class="mid highlight underline v-margin-bottom-big">Read Article</p>
      
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
