<template>
  <div id="page">
    <section v-storyblok-editable="story.content">
      <future-div :background-color="'light'" :text-color="'dark'">
        <div class="center-col">
          <div class="horizontal v-padding-top-mega">
            <div
              class="
                xs-full
                s-five-sixths
                border-none
                v-margin-top-none v-margin-bottom-big
              "
            >
              <h1>Article</h1>
              <!-- <component
                v-for="inner in blok.blocks"
                :key="inner._uid"
                :blok="inner"
                :is="inner.component"
                :class="[
                  wrapperComponent === 'a' || wrapperComponent === 'nuxt-link'
                    ? 'highlight'
                    : '',
                ]"
              /> -->
            </div>
          </div>
        </div>
      </future-div>
      <!-- <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"/> -->
    </section>
    <main-footer />
  </div>
</template>

<script>
import Column from '../components/bloks/Column.vue'
import Grid from '../components/bloks/Grid.vue'
import Richtext from '../components/bloks/Richtext.vue'
export default {
  components: { Grid, Richtext, Column },
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
  async activated() {
    this.$storyblok.initEditor(this)
  }
}
</script>
