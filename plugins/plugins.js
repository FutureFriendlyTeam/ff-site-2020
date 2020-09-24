import Vue from 'vue'
import VueMq from 'vue-mq'
import VueObserveVisibility from 'vue-observe-visibility'

import FutureImg from '~/components/FutureImg.vue'
import FutureDiv from '~/components/FutureDiv.vue'
import FixedAspect from '~/components/FixedAspect.vue'

Vue.component('future-div', FutureDiv)
Vue.component('future-img', FutureImg)
Vue.component('fixed-aspect', FixedAspect)

Vue.use(VueObserveVisibility)
Vue.use(VueMq, {
  breakpoints: {
    tiny: 0,
    small: 640,
    mid: 960,
    big: 1200,
    max: Infinity
  }
})

Vue.mixin({
  methods: {
    valueFromMq(value) {
      if (!value) return null
      return value[this.$mq]
    }
  }
})

// Vue.filter('valueFromMq', value => {
//   if (!value) return null
//   return value[this.$mq]
// })
