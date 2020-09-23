<template>
  <div 
    id="page">

    <!-- <main-header/> -->

    <section 
      class="v-padding-top-mega v-padding-bottom-big">
      <div class="center-col">
        <h1 class="mega xs-full s-three-quarters no-margin">Selected work.</h1>
      </div>
    </section>


    <section class="v-padding-bottom-mega">
      <div class="center-col horizontal">
        <work-block
          v-for="(work, i) in work"
          :key="`work-${i}`" 
          :work="work" 
          :i="i"
          :class="[i%2 === 0 ? 'start': 'end']" />
      </div>
    </section>



  </div>
</template>

<script>
import work from '~/data/work.json'

import WorkBlock from '~/components/WorkBlock.vue'

export default {
  components: {
    WorkBlock
  },
  data() {
    return {
      work: work
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/borders.scss';

// #quote-image {
//   @media (min-width: $small) {
//     &:after {
//       display: none;
//     }
//   }
// }
</style>
