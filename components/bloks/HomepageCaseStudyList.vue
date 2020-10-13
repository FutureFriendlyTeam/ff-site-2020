<template>
  <future-div :background-color="'light'">

    <section>
      <div class="center-col horizontal">
        <homepage-work-block
          v-for="(uuid, i) in blok.case_studies"
          :key="`work-${i}`" 
          :uuid="uuid" 
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
