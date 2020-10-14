<template>
  <future-div :background-color="'light'">

    <section class="v-padding-bottom-mega">
      <div class="center-col horizontal">
        <work-block
          v-for="(link) in links"
          :key="link.uuid" 
          :uuid="link.uuid"/>
      </div>
    </section>

  </future-div>
</template>

<script>
import WorkBlock from '~/components/WorkBlock.vue'

export default {
  components: {
    WorkBlock
  },
  props: {
    blok: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      links: []
    }
  },
  mounted() {
    if (
      this.$route.query._storyblok ||
      window.Storyblok ||
      this.$nuxt.context.isDev ||
      this.uuid === []
    ) {
      this.$fetch()
    }
  },
  async fetch() {
    console.log(this.$nuxt)

    let version = this.$route.query._storyblok ? 'draft' : 'published'
    // this.$nuxt.context.query._storyblok || this.$nuxt.context.isDev
    //   ? 'draft'
    //   : 'published'

    return this.$storyapi
      .get(`cdn/links/?starts_with=case-studies/`, {
        version: version
      })
      .then(res => {
        console.log(res)
        this.$set(this, 'links', res.data.links)
        // console.log(this.links)
      })
  }
}
</script>
