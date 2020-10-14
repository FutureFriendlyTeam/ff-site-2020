<template>
  <future-div :background-color="'light'">

    <div class="center-col">
      <h2 class="big v-margin-top-none v-margin-bottom-big">News</h2>
      <div class="horizontal">
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
