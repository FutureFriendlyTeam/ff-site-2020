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
  async asyncData(context, version = 'published') {
    return context.app.$storyapi
      .get(`cdn/stories/${context.params.slug || 'home'}`, {
        version: version,
        resolve_relations:
          'homepage-case-study-list.case_studies,homepage-article-list.articles'
      })
      .then(res => {
        return res.data
      })
  },
  async activated() {
    if (
      this.$route.query._storyblok ||
      window.Storyblok ||
      this.$nuxt.context.isDev
    ) {
      let data = await this.$options.asyncData(
        this.$root.$options.context,
        'draft'
      )
      this.$set(this, 'story', { ...{}, ...data.story })
    }

    this.$storybridge.on(['input', 'published', 'change'], event => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          console.log('updated page', window)

          // Manually calling as $storybridge is buggy AF
          window.Storyblok.resolveRelations(
            event.story,
            [
              'homepage-case-study-list.case_studies',
              'homepage-article-list.articles'
            ],
            data => {
              console.log('resolved', data)
              this.$set(this.story, 'content', { ...{}, ...data })
            }
          )
        }
      } else {
        window.location.reload()
      }
    })
  }
}
</script>
