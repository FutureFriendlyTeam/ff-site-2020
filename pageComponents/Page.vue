<template>
  <div id="page">
    <section>
      <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"/>
    </section>
    <brand-rename-banner
      v-if="isBrandRenameBannerVisible"
      @close="hideBrandRenameBanner"
    />
    <main-footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  transition: 'fade',
  methods: {
    hideBrandRenameBanner (e) {
      this.$store.commit('brandRenameBanner/toggleBannerState')
    }
  },
  computed: {
    ...mapGetters({
      isBrandRenameBannerVisible: 'brandRenameBanner/isBannerVisible',
    })
  },
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
    const isMfReferrer = !!document.referrer.match('mentallyfriendly')
    this.$store.commit('brandRenameBanner/setIsFromMfReferrer', isMfReferrer)

    await this.$storyblok.initEditor(this)
  }
}
</script>
