<template>
  <div>
    <h2 class="big v-margin-top-none v-margin-bottom-big">Client partners</h2>
    <div id="logos" class="horizontal" @click="currentPage++">
          
      <article v-for="(partner) in partners.slice(startIndex, startIndex+visibleCount)" :key="`partners-${partner}`" class="border-block v-padding-bottom-mid xs-third s-quarter m-sixth l-sixth">
        <future-img 
          :src="`clients/${partner}.svg`"
          :aspect="'four-three'"/>
      </article>
          
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
      return (this.currentPage * this.visibleCount) % this.partners.length
    }
  }
}
</script>

<style scoped lang="scss">
#logos {
  cursor: url(~assets/shared/arrow-right.svg), pointer;
}
</style>
