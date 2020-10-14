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
    // let version =
    //   context.query._storyblok || context.isDev ? 'draft' : 'published'
    console.log('loading live data', version)
    // Load the JSON from the API
    return context.app.$storyapi
      .get(
        `cdn/stories/${context.params.category}/${context.params.slug ||
          'home'}`,
        {
          version: version
        }
      )
      .then(res => {
        return res.data
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  async activated() {
    console.log('page', this.$route.query, window)

    if (
      this.$route.query._storyblok ||
      window.Storyblok ||
      this.$nuxt.context.isDev
    ) {
      console.log('is in editor')
      let data = await this.$options.asyncData(
        this.$root.$options.context,
        'draft'
      )
      console.log('live data is', data)
      this.$set(this, 'story', { ...{}, ...data.story })
    }

    this.$storybridge.on(['input', 'published', 'change'], event => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          console.log('updated page', event.story)
          this.$set(this, 'story', { ...{}, ...event.story })
        }
      } else {
        window.location.reload()
      }
    })
  }
}
</script>
