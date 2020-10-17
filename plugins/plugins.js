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

import Page from '@/components/bloks/Page.vue'
import CaseStudy from '@/components/bloks/CaseStudy.vue'
import Grid from '@/components/bloks/Grid.vue'
import Column from '@/components/bloks/Column.vue'
import Richtext from '@/components/bloks/Richtext.vue'
import BlokImage from '@/components/bloks/BlokImage.vue'
import StoryBlokImage from '@/components/StoryBlokImage.vue'
import SuperFooter from '~/components/bloks/SuperFooter.vue'
import CaseStudyList from '~/components/bloks/CaseStudyList.vue'
import HomepageCaseStudyList from '~/components/bloks/HomepageCaseStudyList.vue'
import HomepageArticleList from '~/components/bloks/HomepageArticleList.vue'
import CtaButton from '~/components/bloks/CtaButton.vue'
import Quote from '~/components/bloks/Quote.vue'
import VimeoEmbed from '~/components/bloks/VimeoEmbed.vue'
import TeamProfileList from '~/components/bloks/TeamProfileList.vue'
import ClientList from '~/components/bloks/ClientList.vue'

Vue.component('future-div', FutureDiv)
Vue.component('future-img', FutureImg)
Vue.component('fixed-aspect', FixedAspect)
Vue.component('super-footer', SuperFooter)
Vue.component('page', Page)
Vue.component('case-study', CaseStudy)
Vue.component('grid', Grid)
Vue.component('column', Column)
Vue.component('richtext', Richtext)
Vue.component('blok-image', BlokImage)
Vue.component('story-blok-image', StoryBlokImage)
Vue.component('super-footer', SuperFooter)
Vue.component('case-study-list', CaseStudyList)
Vue.component('homepage-case-study-list', HomepageCaseStudyList)
Vue.component('homepage-article-list', HomepageArticleList)
Vue.component('cta-button', CtaButton)
Vue.component('quote', Quote)
Vue.component('vimeo-embed', VimeoEmbed)
Vue.component('team-profile-list', TeamProfileList)
Vue.component('client-list', ClientList)

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
