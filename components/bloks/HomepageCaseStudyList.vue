<template>
  <future-div v-storyblok-editable="blok" :background-color="'light'">

    <section>
      <div class="center-col horizontal">
        <homepage-work-block
          v-for="(story, i) in blok.case_studies"
          :key="`homepage-case-study-${i}`" 
          :story="story" 
          :class="[i%2 === 0 ? 'start': 'end']"
          class="work-block" />
      </div>
    </section>

  </future-div>
</template>

<script>
import HomepageWorkBlock from '~/components/HomepageWorkBlock.vue'

export default {
  components: {
    HomepageWorkBlock
  },
  props: {
    blok: {
      type: Object,
      default: null
    }
  },
  mounted() {
    console.log('homepage case study list', this.blok)
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';
.work-block {
  &.end {
    @media (min-width: $mid) {
      margin-left: 25%;
    }

    @media (min-width: $big) {
      margin-left: 33.33%;
    }
  }
}
</style>
