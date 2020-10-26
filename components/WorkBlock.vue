<template>

  <article v-if="story"
           :class="!compact ? story.content.thumbnail_size : 'xs-full s-third'" 
           class="work-block border-block xs-full v-margin-bottom v-padding-bottom-big">

    <nuxt-link 
      :to="`/${story.full_slug}`"
      class="wrapper-link">

      <story-blok-image :filename="story.content.image.filename" :alt="story.content.image.alt" aspect="four-three" class="v-margin-bottom"/>
      <section class="xs-full">
        <h2 class="mid highlight v-margin-top-none">{{ story.content.title }}</h2>
        <p class="mid highlight v-margin-top-none">With {{ story.content.client }}</p>
        <p class="mid highlight v-margin-top-none underline">Read case study.</p>
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
    },
    compact: {
      type: Boolean,
      default: false
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
