<template>
  <div id="page">
    <section>
      <component
        v-if="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
        :story-id="story.id"
        :is="story.content.component"
      />
    </section>
    <main-footer />
  </div>
</template>

<script>
export default {
  transition: 'fade',
  data() {
    return { story: { content: {} } }
  },
  async asyncData(context) {
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
