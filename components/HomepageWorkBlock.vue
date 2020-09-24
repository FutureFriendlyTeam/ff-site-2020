<template>

  <future-div
    :class="i%2 === 0 ? 'start': 'end'" 
    :background-color="work.background"
    class="work-block border-block h-padding-none xs-full m-three-quarters l-two-thirds v-margin-bottom">

    <a 
      :href="work.link"
      target="_blank" 
      class="wrapper-link">

      <section class="h-padding v-margin-bottom">
        <future-img 
          :src="work.img.src" 
          :aspect="work.img.aspect" 
          :alt="work.img.alt"
          :scale="true"/>
      </section>

      <section class="horizontal">
        <div class="border-block xs-full s-half v-padding-bottom-big">
          <h2 class="mid v-margin-top-none">{{ work.client }}</h2>
          <p class="mid v-margin-top-none">{{ work.text }}</p>
          <p class="mid v-margin-top-none">{{ work.tag }}</p>
        </div>
        <div class="border-block xs-full s-half">

          <div v-if="work.award" class="badge-container h-padding"><award-badge
            :award-type="work.award"
          /></div>

        </div>
      </section>
    </a>
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
    work: {
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
