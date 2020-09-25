<template>
  <div 
    id="page">

    <future-div 
      :background-color="'light'" class="v-padding-top-mega v-padding-bottom-mega">
      <div class="center-col">
        <h1 class="mega xs-full s-three-quarters no-margin">Digital services have the power to change lives and build a better future.</h1>
      </div>
    </future-div>

    <future-div :background-color="'accentLight'" class="v-padding-bottom-mega">
      <div class="center-col">
        <logo-section/>
      </div>
    </future-div>

    <div class="v-padding-bottom-mega">
      <div class="center-col">
        <homepage-work-block
          v-for="(work, i) in work.filter(item => item.homepage)"
          :key="`work-${i}`" 
          :work="work" 
          :i="i"
          :class="[i%2 === 0 ? 'start': 'end']" />
      </div>
    </div>

    <future-div class="v-padding-bottom-mega">
      <div class="center-col">
        <h2 class="big v-margin-top-none v-margin-bottom-big">News</h2>
        <div class="horizontal">
          <article v-for="(article, i) in news" :key="`news-${i}`" class="border-block xs-full s-half m-quarter v-margin-bottom">
            <a :href="article.link" class="wrapper-link" target="_blank">
              <h2 class="mid v-margin-top-none v-margin-bottom">{{ article.text }}</h2>
              <future-img 
                :aspect="article.img.aspect" :src="article.img.src"/>
            </a>
          </article>
        </div>
      </div>
    </future-div>

    <super-footer :background-color="'accent'" :text-color="'dark'" :hover-color="'accentLight'"/>

  </div>
</template>

<script>
import awards from '~/data/awards.json'
import partners from '~/data/partners.json'
import work from '~/data/work.json'
import news from '~/data/news.json'

import HomepageWorkBlock from '~/components/HomepageWorkBlock.vue'

import LogoSection from '~/components/LogoSection.vue'

export default {
  transition: 'fade',
  components: {
    HomepageWorkBlock,
    LogoSection
  },
  data() {
    return {
      work: work,
      news: news
    }
  },

  methods: {
    changeBackground(visible, el) {
      if (visible) {
        this.backgroundColor = el.target.getAttribute('data-enter-background')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
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
