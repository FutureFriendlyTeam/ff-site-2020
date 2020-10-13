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
  asyncData(context) {
    // let version =
    //   context.query._storyblok || context.isDev ? 'draft' : 'published'

    // TODO Figure out a better way to deal with this
    let version = 'draft'
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
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], event => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  }
}
</script>
