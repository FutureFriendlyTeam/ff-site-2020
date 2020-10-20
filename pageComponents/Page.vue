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
  async asyncData(context) {
    context.$storyblok.setQuery(context.query)
    return context.$storyblok
      .get(
        `cdn/stories/${
          context.route.path === '/' ? 'home' : context.route.path
        }`,
        {
          resolve_relations:
            'homepage-case-study-list.case_studies,homepage-article-list.articles'
        }
      )
      .then(res => {
        return res.data
      })
  },
  async mounted() {
    await this.$storyblok.initEditor(this)
  }
}
</script>
