<template>
  <div id="page">
    <section>
      <!-- <h1>Case Study</h1> -->
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
    // context.$storyblok.setQuery(context.query)
    return context.$storyblok
      .get(
        `cdn/stories/${
          context.route.path === '/' ? 'home' : context.route.path
        }`
      )
      .then(res => {
        return res.data
      })
  },
  async mounted() {
    this.$root.$emit('layoutUpdate')
    await this.$storyblok.initEditor(this)
    this.$root.$emit('layoutUpdate')
  }
}
</script>
