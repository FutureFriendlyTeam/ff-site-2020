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
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur id rerum quibusdam suscipit similique, necessitatibus architecto totam sapiente voluptas voluptatem error dolores perferendis perspiciatis consequatur mollitia dignissimos animi reprehenderit.</h1>
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
            'homepage-case-study-list.case_studies,homepage-article-list.articles',
        }
      )
      .then((res) => {
        return res.data
      })
  },
  async mounted() {
    await this.$storyblok.initEditor(this)
  }
}
</script>
