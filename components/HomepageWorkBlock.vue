<template>
  <future-div v-if="story.content"
              :class="i%2 === 0 ? 'start': 'end'" 
              :background-color="story.content.background_color" 
              :text-color="story.content.text_color"
              class="work-block border-block h-padding-none xs-full m-three-quarters l-two-thirds v-margin-bottom">

    <nuxt-link 
      :to="`/${story.full_slug}`"
      class="wrapper-link">

      <section class="h-padding v-margin-bottom">
        <story-blok-image :filename="story.content.image.filename" aspect="four-three" class="v-margin-bottom"/>
      </section>

      <section class="horizontal">
        <div class="border-block xs-full s-half v-padding-bottom-big">
          <h2 class="mid highlight v-margin-top-none">{{ story.content.title }}</h2>
          <p class="mid highlight v-margin-top-none">With {{ story.content.client }}.</p>
          <p class="mid highlight v-margin-top-none underline">Read case study.</p>
        </div>
        <div class="border-block xs-full s-half">
          
          <div v-if="story.content.award !== 'none'" class="badge-container h-padding"><award-badge
            :award-type="story.content.award"
          /></div>

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
    story: {
      type: Object,
      default: null
    },
    i: {
      type: Number,
      default: 0
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
