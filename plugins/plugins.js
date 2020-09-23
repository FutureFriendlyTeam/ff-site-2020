import Vue from 'vue'
import VueMq from 'vue-mq'
import VueObserveVisibility from 'vue-observe-visibility'
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
