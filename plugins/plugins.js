import Vue from 'vue'
// import VueMq from 'vue-mq'

// import { IntersectDirective } from 'vue-intersect-directive'

// Vue.use(VueIntersect)
import VueObserveVisibility from 'vue-observe-visibility'

// import locomotiveScroll from 'locomotive-scroll'

// Object.defineProperty(Vue.prototype, 'locomotiveScroll', {
//   value: locomotiveScroll
// })s

import MainFooter from '~/components/MainFooter.vue'

import FutureImg from '~/components/FutureImg.vue'
import FutureDiv from '~/components/FutureDiv.vue'
import FixedAspect from '~/components/FixedAspect.vue'

import Page from '@/components/bloks/Page.vue'
import CaseStudy from '@/components/bloks/CaseStudy.vue'
import Podcast from '@/components/bloks/Podcast.vue'
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
import ReadNext from '~/components/bloks/ReadNext.vue'
import ReadNextCaseStudies from '~/components/bloks/ReadNextCaseStudies.vue'
import BrandRenameBanner from '~/components/BrandRenameBanner'
import AwardList from '~/components/bloks/AwardList'
import AwardBadge from '~/components/AwardBadge'
import ModalPractice from '@/components/bloks/ModalPractice'
import FormSection from '~/components/bloks/FormSection'
import FormInput from '~/components/bloks/FormInput'
import LinkedInJobsLink from '~/components/bloks/LinkedInJobsLink'

Vue.component('main-footer', MainFooter)
Vue.component('brand-rename-banner', BrandRenameBanner)
Vue.component('future-div', FutureDiv)
Vue.component('future-img', FutureImg)
Vue.component('fixed-aspect', FixedAspect)
Vue.component('super-footer', SuperFooter)
Vue.component('page', Page)
Vue.component('case-study', CaseStudy)
Vue.component('podcast', Podcast)
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
Vue.component('read-next', ReadNext)
Vue.component('read-next-case-studies', ReadNextCaseStudies)
Vue.component('award-list', AwardList)
Vue.component('award-badge', AwardBadge)
Vue.component('modal-practice', ModalPractice)
Vue.component('form-section', FormSection)
Vue.component('form-input', FormInput)
Vue.component('workable-listing-display', LinkedInJobsLink)

// Vue.prototype.$backgroundColor = '#ffffff'
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

Vue.mixin({
  data() {
    return {
      hasObserverRoot: false,
      observerRoot: null,
      inview: false
    }
  },
  mounted() {
    this.observerRoot =
      window.location?.ancestorOrigins &&
      window.location.ancestorOrigins[0] &&
      window.location.ancestorOrigins[0].includes('app.storyblok.com')
        ? window.document
        : null //
    this.hasObserverRoot = true
  },
  methods: {
    onObserverHandler(isVisible, entry, cb) {
      // this.$nextTick(() => {
      if (isVisible && !entry.target.classList.contains('inview')) {
        entry.target.classList.add('inview')
        this.inview = true
      } else if (!isVisible && entry.target.classList.contains('inview')) {
        entry.target.classList.remove('inview')
        this.inview = false
      }
      if (cb) {
        this[cb](isVisible, entry)
      }
    }
  }
})
