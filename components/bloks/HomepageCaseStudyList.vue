<template>
  <section>
    <div class="center-col horizontal">
      <div class="xs-full m-quarter l-third">
        <component v-for="blok in blok.blocks" :key="blok._uid" :blok="blok" :is="blok.component"/>
      </div>
      <homepage-work-block
        v-for="(story, i) in blok.case_studies"
        :key="`homepage-case-study-${i}`" 
        :story="story" 
        :class="[i !== 0 ? i%2 === 1 ? 'start': 'end': '']"
        class="work-block" />
    </div>
  </section>
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
