<template>
  <div>
    <h2 class="big v-margin-top-none v-margin-bottom-big">Client partners</h2>
    <div id="logos" class="horizontal">

      <!-- <transition-group  > -->
      <article v-for="(partner, i) in partners.slice(startIndex, startIndex+visibleCount)" :key="`partners-${partner}`" class="border-block v-padding-bottom-mid xs-third s-quarter m-sixth l-sixth">
        <!-- <transition appear name="fade"> -->
        <future-img 
          :style="{transitionDelay:`${i*10}ms`}"
          :key="`img-partners-${partner}`" 
          :src="`clients/${partner}.svg`"
          :aspect="'four-three'"
          class="multiply"/>
          <!-- </transition> -->
      </article>
      <!-- </transition-group> -->

      <div id="logos-back" @click="currentPage--"/>
      <div id="logos-next" @click="currentPage++"/>
          
    </div>
  </div>
</template>

<script>
import FutureImg from '~/components/FutureImg.vue'
export default {
  name: 'LogoSection',
  components: {
    FutureImg
  },
  data() {
    return {
      partners: [
        'abc',
        'act-gov',
        'asic',
        'ausgrid',
        'cba',
        'guardian',
        'nsw-gov',
        'sbs',
        'service-nsw',
        'tas-gov',
        'uts',
        'x15'
      ],
      currentPage: 0
    }
  },
  computed: {
    visibleCount() {
      return this.valueFromMq({ tiny: 3, small: 3, mid: 4, big: 6, max: 6 })
    },
    startIndex() {
      return (
        (Math.abs(this.currentPage) * this.visibleCount) % this.partners.length
      )
    }
  }
}
</script>

<style scoped lang="scss">
#logos {
  position: relative;

  #logos-back {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 50%;
    cursor: url(~assets/shared/arrow-left.svg), pointer;
  }

  #logos-next {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 50%;
    cursor: url(~assets/shared/arrow-right.svg), pointer;
  }
}
</style>
