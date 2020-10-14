<template>
  <!-- <div>
    <h2 class="mid v-margin-top-none">{{ uuid }}</h2>
    <h2 v-if="story.content" class="mid v-margin-top-none">{{ story.content.title }}</h2>
  </div> -->
  <future-div v-if="story"
              :class="i%2 === 0 ? 'start': 'end'" 
              class="work-block border-block h-padding-none xs-full m-three-quarters l-two-thirds v-margin-bottom">

    <nuxt-link 
      :to="`/${story.full_slug}`"
      class="wrapper-link">

      <section class="h-padding v-margin-bottom">
        <story-blok-image :filename="story.content.image.filename" aspect="four-three" class="v-margin-bottom"/>
      </section>

      <section class="horizontal">
        <div class="border-block xs-full s-half v-padding-bottom-big">
          <h2 class="mid v-margin-top-none">{{ story.content.title }}</h2>
          <p class="mid v-margin-top-none">With {{ story.content.client }}.</p>
        </div>
        <div class="border-block xs-full s-half">
          
          <!-- <div v-if="work.award" class="badge-container h-padding"><award-badge
            :award-type="work.award"
          /></div> -->

        </div>
      </section>
    </nuxt-link>
  </future-div>
</template>

<script>
import AwardBadge from '~/components/AwardBadge.vue'
export default {
  name: 'HomepageWorkBlock',
  components: {
    AwardBadge
  },
  props: {
    uuid: {
      type: String,
      default: null
    },
    i: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      story: null
    }
  },
  watch: {
    uuid() {
      console.log('uuid changed')
      this.$fetch()
    }
  },
  mounted() {
    if (
      this.$route.query._storyblok ||
      window.Storyblok ||
      this.$nuxt.context.isDev ||
      this.uuid != this.story.uuid
    ) {
      this.$fetch()
    }
  },
  async fetch() {
    let version = this.$route.query._storyblok ? 'draft' : 'published'

    console.log('loading item', version)

    return this.$storyapi
      .get(`cdn/stories/${this.uuid}?find_by=uuid`, {
        version: version
      })
      .then(res => {
        this.$set(this, 'story', { ...{}, ...res.data.story })
      })
  }
}
</script>

<style scoped lang="scss">
.badge-container {
  position: absolute;
  bottom: 0rem;
  right: 0rem;
}
.link {
  text-decoration: none;
}
</style>
