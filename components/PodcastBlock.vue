<template>
  <article
    v-if="story"
    :class="!compact ? story.content.thumbnail_size : 'xs-full s-third'"
    class="work-block border-block xs-full v-margin-bottom v-padding-bottom-big"
  >
    <nuxt-link :to="`/${story.full_slug}`" class="wrapper-link">
      <story-blok-image
        :filename="story.content.cover.filename"
        :alt="story.content.cover.name"
        aspect="free"
        class="v-margin-bottom"
      />
      <section class="xs-full">
        <h2 class="body highlight v-margin-top-none">
          Ep. {{ story.content.episode }}
        </h2>
        <h2 class="body highlight v-margin-top-none">
          {{ story.content.title }}
        </h2>

        <h2
          v-if="story.content.shortDescription"
          class="body highlight v-margin-top-none"
        >
          {{ story.content.shortDescription }}
        </h2>
        <!-- <p class="mid highlight v-margin-top-none">With {{ story.content.client }}</p> -->
        <p class="body highlight v-margin-top-none">→ Listen Now</p>
      </section>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  name: 'PodcastBlock',
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
.link {
  text-decoration: none;
}
</style>
