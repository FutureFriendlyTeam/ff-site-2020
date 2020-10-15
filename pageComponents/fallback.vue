<template>
  <div id="page" >
    <section>
      <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"/>
    </section>
  </div>
</template>

<script>
export default {
  transition: 'fade',
  data() {
    return { story: { content: {} } }
  },

  async activated() {
    let data = await this.loadFallbackData()
    this.$set(this, 'story', { ...{}, ...data.story })
    this.$storyblok.initEditor(this)
  },
  methods: {
    async loadFallbackData() {
      this.$storyblok.setQuery({ _storyblok: true })
      return this.$storyblok
        .get(`cdn/stories/${this.$route.path}`, {
          resolve_relations:
            'homepage-case-study-list.case_studies,homepage-article-list.articles'
        })
        .then(res => {
          console.log('loaded', res.data)
          return res.data
        })
    }
  }
}
</script>
