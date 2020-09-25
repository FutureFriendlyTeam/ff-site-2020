import Vue from 'vue'
import VueMq from 'vue-mq'
import VueObserveVisibility from 'vue-observe-visibility'

// import locomotiveScroll from 'locomotive-scroll'

// Object.defineProperty(Vue.prototype, 'locomotiveScroll', {
//   value: locomotiveScroll
// })

import FutureImg from '~/components/FutureImg.vue'
import FutureDiv from '~/components/FutureDiv.vue'
import FixedAspect from '~/components/FixedAspect.vue'
import SuperFooter from '~/components/SuperFooter.vue'

Vue.component('future-div', FutureDiv)
Vue.component('future-img', FutureImg)
Vue.component('fixed-aspect', FixedAspect)
Vue.component('super-footer', SuperFooter)

Vue.prototype.$theme = {
  light: '#ffffff',
  light2: '#edefed',
  dark: '#000000',

  accent: '#f05969',
  accentLight: '#fcdee0',

  extended1: '#4a29f0',
  extended1Light: '#d1e5ff',

  extended2: '#45d1a6',
  extended2Light: '#d9f5ed',

  extended3: '#fbe704',
  extended3Light: '#fffacc'
}

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
  // data() {
  //   return {
  //     activeBackgroundColor: '#ffffff'
  //   }
  // },
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
