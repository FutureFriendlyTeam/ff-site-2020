<template>

  <article v-if="story"
           :class="story.content.thumbnail_size" 
           class="work-block border-block xs-full v-margin-bottom v-padding-bottom-mega">

    <nuxt-link 
      :to="`/${story.full_slug}`"
      class="wrapper-link">

      <story-blok-image :filename="story.content.image.filename" aspect="four-three" class="v-margin-bottom"/>
      <section>
        <h2 class="mid v-margin-top-none">{{ story.content.title }}</h2>
        <p class="mid v-margin-top-none">With {{ story.content.client }}</p>
      </section>
    </nuxt-link>
  </article>
</template>

<script>
import AwardBadge from '~/components/AwardBadge.vue'
export default {
  name: 'WorkBlock',
  components: {
    AwardBadge
  },
  props: {
    story: {
      type: Object,
      default: null
    }
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
