<template>
  <div 
    id="page" 
    :style="{backgroundColor: backgroundColor}">

    <fixed-banner/>
    <main-header/>

    <section 
      v-observe-visibility="{
        callback: changeBackground,
        intersection: {
          rootMargin: '-50% 0px -50% 0px'
        },
      }"
      id="hero"
      data-enter-background="#FFF" 
      class="center-col v-margin-bottom-small v-center horizontal">
      <div 
        id="hero-text" class="xs-full s-three-quarters m-two-thirds">
        <!-- <transition
          appear name="wipe-in"> -->



        <h1 class="no-margin indent" >Digital services have the power to change lives and build a better future.</h1>
        <!-- </transition> -->
      </div>
    </section>


    <section 
      class="center-col horizontal v-margin-bottom-small" >
      <work-block
        v-observe-visibility="{
          callback: changeBackground,
          intersection: {
            rootMargin: '-50% 0px -50% 0px'
          },
        }"
        v-for="(work, i) in caseStudies"
        :data-enter-background="work.color" 
        :key="`${i}-caseStudies`" 
        :work="work" 
        :show-badge="showAwards.includes(work.awardType)"
        :i="i"
        :class="[i%2 === 0 ? 'start': 'end']"
        class="work-row" />
    </section>

    <section v-observe-visibility="{
      callback: changeBackground,
      intersection: {
        rootMargin: '-50% 0px -50% 0px'
      },
    }" v-if="visibleAwards.length > 0" id="awardsCallout" class=" center-col v-margin-bottom-small" data-enter-background="#D9F5ED" >

      <article class="xs-full m-three-quarters l-two-thirds border-left border-right v-margin-bottom-small border-left border-right">
    
        <section class="h-padded v-margin-bottom-small">
          <future-img 
            :aspect="'four-three'" 
            :scale="true"
            src="gda-photo.jpg" 
            alt="Photo of hand holding a Good Design Award"/>
        </section>

        <div class="horizontal border-left">
          <section class="h-padded s-half border-right v-padded-bottom">
            <h2 class="no-margin-top mid">Future Friendly recognised for {{ visibleAwards.length }} Good Design awards in 2020.</h2>
            <p class="mid">Australia's annual Good Design Awards program is one of the oldest and most prestigious international design awards in the world, promoting excellence in design and innovation since 1958.</p>

            <p><a href="#" class="mid link">Read the annoucement</a></p>
          </section>

          <section class="h-padded s-half">
            <a v-for="(award, i) in visibleAwards" :key="`${i}-award`" :href="award.link" target="_blank" class="award-list-item horizontal no-wrap wrapper-link">
              <div class="badge-wrapper">
                <future-img
                  v-if="award.badgeImg"  
                  :src="`${award.badgeImg.src}`" 
                  :aspect="'free'"
                  :alt="award.badgeImg.alt"
                  class="badge "
                />
              </div>
              <div class="flex hover-accent">
                <h3 class="no-margin body">{{ award.text }}<span v-if="award.client">, with {{ award.client }}</span></h3>
                <!-- <p class="no-margin"></p> -->
              </div>
            </a>
          </section>
        </div>
      </article>
    </section>











    <section 
      v-observe-visibility="{
        callback: changeBackground,
        intersection: {
          rootMargin: '-50% 0px -50% 0px'
        },
      }"
      id="services" 
      data-enter-background="#FCDEE1" 
      class="center-col v-margin-mega-bottom">
      <div 
        class="s-three-quarters m-two-thirds v-margin-mega" 
      >
        <h1 class="indent">We define and deliver digital services that succeed today and in the future.</h1>
      </div>

      <div class="border-left border-right">

        <div 
          id="strategic-design" 
          class="horizontal border-left service-row v-margin-bottom-small">
          <div class="xs-full m-two-thirds service-image border-left border-right">
            <div id="strategic-design-image">
              <div 
                id="strategic-design-image-1"
                class="h-padded flex" >

                <future-img 
                  :scale="true" 
                  src="strategic-design.png"
                  alt="Photo of a woman co-designing a digital service"
                  aspect="four-three"/>
              </div>

              <div 
                id="strategic-design-image-2"
                class="xs-half h-padded">
                <image-grid :images="['process-1.png','process-2.png','process-3.png','blank','blank','process-4.png','process-5.png', 'process-6.png']"/>
              </div>
            </div>
          </div>

          <div class="xs-full s-two-thirds m-third h-padded border-right service-copy v-padded-bottom-big">
            <h2 class="no-margin-top mid">Digital service strategy — define how products & services succeed today, tomorrow, and in the future.</h2>
            <ul class="body no-margin">
              <li>Proposition design </li>
              <li>Product innovation</li>
              <li>Service design</li>
              <li>Rapid prototyping & customer validation</li>
              <li>Business cases & funding</li>
              <li>Live trials & experimentation</li>
              <li>3 horizons roadmaps</li>
            </ul>
          </div>
        </div>

        <div 
          id="product-delivery" 
          class="horizontal s-reverse border-left service-row">
          <div class="xs-full m-two-thirds service-image border-left border-right">
            <div id="product-delivery-image">
              <div 
                id="product-delivery-image-1"
                class="h-padded flex" >
  
                <future-img 
                  :scale="true" 
                  src="product-delivery.png" 
                  alt="Photo of a developer building a new digital product"
                  aspect="four-three"/>

              </div>
            </div>
          
          </div>

          <div class="xs-full s-two-thirds m-third h-padded border-left service-copy v-padded-bottom-big">
            <h2 class="no-margin-top mid">Delivery support — work together to launch new digital products, and set internal teams up for success.</h2>
            <ul class="body no-margin">
              <li>Team formation & acceleration</li>
              <li>Product management</li>
              <li>Product design</li>
              <li>Product engineering</li>
              <li>User testing</li>
              <li>MVP / First release delivery</li>
              <li>Product roadmaps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>



    <section 
      v-observe-visibility="{
        callback: changeBackground,
        intersection: {
          rootMargin: '-50% 0px -50% 0px'
        },
      }"
      id="partners" 
      class="v-margin-mega center-col"
      data-enter-background="#CDCCC4" 
    >

      <div class=" horizontal border-left border-right">
        <div class="xs-full s-third m-quarter h-padded border-right v-padded-bottom-big">
          <h3 class="no-margin-top v-margin-bottom-small">Client partners</h3>
          <nav>
            
            <a :class="[showClients === 'gov' ? 'active' : '']" class="link partner-filter" @click="showClients = 'gov'">Public Sector</a>
            <a :class="[showClients === 'fin' ? 'active' : '']" class="link partner-filter" @click="showClients = 'fin'">Finance</a>
            <a :class="[showClients === 'health' ? 'active' : '']" class="link partner-filter" @click="showClients = 'health'">Health</a>
            <a :class="[showClients === 'edu' ? 'active' : '']" class="link partner-filter" @click="showClients = 'edu'">Education</a>
            
          </nav>
        </div>

        <div 
          id="partner-list" 
          class="flex">
          <p 
            v-for="(partner, i) in visibleClients"
            :key="`${i}-partner`" 
            :delay="100+(i*50)" 
            class="h-padded partner no-margin-top mini">
            {{ partner.name }}
          </p>        
        </div>
      </div>
    </section>



    <main-footer 
      v-observe-visibility="{
        callback: changeBackground,
        intersection: {
          rootMargin: '-50% 0px -50% 0px'
        },
      }" 
      data-enter-background="#f05969"/>
  </div>
</template>

<script>
import awards from '~/data/awards.json'
import clients from '~/data/clients.json'
import caseStudies from '~/data/case-studies.json'

import MainHeader from '~/components/MainHeader.vue'
import MainFooter from '~/components/MainFooter.vue'
import FutureImg from '~/components/FutureImg.vue'
import WorkBlock from '~/components/WorkBlock.vue'
import ImageGrid from '~/components/ImageGrid.vue'
import FixedBanner from '~/components/FixedBanner.vue'

export default {
  components: {
    MainHeader,
    FutureImg,
    WorkBlock,
    ImageGrid,
    MainFooter,
    FixedBanner
  },
  data() {
    return {
      backgroundColor: '#ffffff',
      showBanner: true,
      awards: awards,
      partners: clients,
      caseStudies: caseStudies,
      // showAwards: ['accolade', 'winner', 'gold', 'best'],
      showAwards: [],
      showClients: 'gov'
    }
  },

  computed: {
    visibleAwards() {
      return this.awards.filter(award => {
        return this.showAwards.includes(award.type)
      })
    },
    visibleClients() {
      return this.partners.filter(partner => {
        if (this.showClients === 'all') {
          return true
        } else {
          return partner.tags.includes(this.showClients)
        }
      })
    }
  },

  mounted() {
    const sectors = ['gov', 'fin', 'health', 'edu']
    // setInterval(() => {
    //   let curr = sectors.indexOf(this.showClients)
    //   let next = curr + 1
    //   this.showClients = sectors[next % sectors.length]
    // }, 2000)
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

#page {
  transition: background-color 600ms ease;
}

#hero {
  // h1 {
  //   // text-indent: 16.66%;
  // }
  min-height: 66.66vh;
  overflow: hidden;
}

#partners {
  #partner-list {
    columns: 1;
    column-fill: balance;

    @media (min-width: $small) {
      columns: 2;
    }

    @media (min-width: $mid) {
      columns: 3;
    }

    column-gap: 0px;
  }

  .partner-filter {
    display: block;
    margin-bottom: 1em;

    &.active {
      color: $accent;
    }
  }
}

.work-row {
  &.end {
    @media (min-width: $mid) {
      margin-left: 25%;
    }

    @media (min-width: $big) {
      margin-left: 33.33%;
    }
  }
}

#services {
  .service-image {
    margin-bottom: 1.5rem;

    @media (min-width: $mid) {
      margin-bottom: 0rem;
    }
  }

  #strategic-design {
    z-index: 99;
    mix-blend-mode: multiply;
  }

  #strategic-design-image-1 {
    position: absolute;
    left: 0rem;
    top: 0rem;
    right: 25%;
  }

  #strategic-design-image-2 {
    margin-left: 50%;
    margin-top: 2rem;
    @media (min-width: $mid) {
      transform: translate3d(0, 33.33%, 0);
    }
    mix-blend-mode: multiply;
  }

  #product-delivery-image-1 {
    mix-blend-mode: multiply;
    // margin-right: 33.33%;
    margin-left: 25%;
  }
}

.award-list-item {
  margin-bottom: 1.5rem;
  align-items: flex-start;

  @media (min-width: $mid) {
    margin-bottom: 3rem;
  }

  .badge-wrapper {
    width: 6rem;
    margin-right: 1.5rem;
    padding: 1rem;
    background-color: #000;
  }
}
</style>
