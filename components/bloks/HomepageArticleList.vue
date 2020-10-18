<template>
  <future-div :background-color="'light2'" :text-color="'dark'" >

    <div class="center-col">
      <div class="horizontal v-padding-bottom-mega">
        <homepage-article-block
          v-for="(story, i) in blok.articles"
          :key="`article-${i}`" 
          :story="story" />
      </div>
    </div>

  </future-div>
</template>

<script>
import HomepageArticleBlock from '~/components/HomepageArticleBlock.vue'

export default {
  components: {
    HomepageArticleBlock
  },
  props: {
    blok: {
      type: Object,
      default: null
    }
  }
}
</script>
